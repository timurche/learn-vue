<template>
  <div class="app">
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
      <my-input v-model="searchInput" placeholder="Вводи...">554545</my-input>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <h4>Создание поста</h4>
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :postsCountf="postsCountf"
      style="align-self: flex"
      @remove="removePost"
      :postsprops="sortedAndSearchedPosts"
    />
    <div v-if="isPostLoading">*** идет загрузка***</div>
  </div>
  <div class="pagination__wrapper">
    <div
      class="pageItem"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ pageItemCurrent: pageNumber === pageNum }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
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
      pageLimit: 5,
      totalPages: 0,
      isPostLoading: false,
      postsCountf: 0,
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
      this.fetchPosts();
    },
    countPostsNow() {
      this.postsCountf = this.posts.length;
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
        this.isPostLoading = true;
        setTimeout(async () => {
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
          this.isPostLoading = false;
        }, 1000);
      } catch (e) {
        /** alert(e);*/
      } finally {
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedOption]?.localeCompare(post2[this.selectedOption])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
  },

  watch: {
    posts: {
      handler(val, oldVal) {
        this.countPostsNow();
      },
      deep: true,
    },
    selectedOption(newValue) {
      this.posts.sort((post1, post2) =>
        post1[newValue]?.localeCompare(post2[newValue])
      );
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  padding: 10px;
  display: block;
}
.crtBtn {
  margin: 10px 15px 15px 0px;
}

.crtBtnclr {
  background-color: red;
  color: white;
}

.inlimit {
  /*max-height: 33px;*/
  max-width: 50px;
  margin: 10px 5px 15px 10px;
}
.filters {
  display: flex;
  align-items: center;
}
.mySelect {
  margin-right: 15px;
}
.pagination__wrapper {
  display: flex;
  margin: 15px 0 0 10px;
}
.pageItem {
  padding: 8px 12px 8px 12px;
  cursor: pointer;
}
.pageItemCurrent {
  background-color: grey;
  color: white;
  border-radius: 5px;
}
</style>
