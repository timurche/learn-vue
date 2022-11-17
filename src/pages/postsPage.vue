<template>
  <div>
    <div style="display: flex">
      <my-button class="crtBtn" @click="showDialog"> Создать пост </my-button>

      <my-button @click="clearAll" class="crtBtnclr crtBtn"
        >Очистить посты</my-button
      >
    </div>
    <div class="filters">
      <h4>Сортировка:</h4>
      <my-select
        class="mySelect"
        v-model="selectedOption"
        :options="sortOptions"
      />
      <h4>Поиск:</h4>
      <my-input v-model="searchInput" placeholder="Вводи..."></my-input>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <h4>Создание поста</h4>
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      style="align-self: flex"
      @remove="removePost"
      :postsprops="sortedAndSearchedPosts"
    />
    <div v-if="isPostLoading">*** идет загрузка***</div>
  </div>
  <div v-intersection="loadMorePosts" class="observer"></div>
  <!-- <div class="pagination__wrapper">
    
    <div
      class="pageItem"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ pageItemCurrent: pageNumber === pageNum }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div> -->
</template>

<script>
import postForm from "@/components/PostForm";
import postList from "@/components/PostList";
import axios from "axios";

export default {
  components: { postForm, postList },
  data() {
    return {
      searchInput: "",
      posts: [],
      dialogVisible: false,
      pageNum: 1,
      pageLimit: 10,
      totalPages: 0,
      isPostLoading: false,
      selectedOption: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },

  methods: {
    changePage(pageNumber) {
      this.pageNum = pageNumber;
      //this.fetchPosts();
    },

    clearAll() {
      this.posts = this.posts.filter((p) => p.id === 0);
    },
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.pageNum,
              _limit: this.pageLimit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.pageLimit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.pageNum += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.pageNum,
              _limit: this.pageLimit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.pageLimit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    /* const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      //if (entries[0])
      if (entries[0].isIntersecting && this.pageNum < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer); */
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedOption]?.localeCompare(post2[this.selectedOption])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

