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
        :model-value="selectedOption"
        @update:model-value="setSelectedOption"
        :options="sortOptions"
      />
      <h4>Поиск:</h4>
      <my-input
        :model-value="searchInput"
        @update:model-value="setSearchInput"
        placeholder="Вводи..."
      ></my-input>
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
</template>

<script>
import postForm from "@/components/PostForm";
import postList from "@/components/PostList";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  components: { postForm, postList },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchInput: "post/setSearchInput",
      setSelectedOption: "post/setSelectedOption",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      searchInput: (state) => state.post.searchInput,
      posts: (state) => state.post.posts,
      dialogVisible: (state) => state.post.dialogVisible,
      pageNum: (state) => state.post.pageNum,
      pageLimit: (state) => state.post.pageLimit,
      totalPages: (state) => state.post.totalPages,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedOption: (state) => state.post.selectedOption,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>

<style scoped>
</style>