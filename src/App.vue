<template>
  <div class="app">
    <div style="display: flex">
      <my-button class="crtBtn" @click="showDialog"> Создать пост </my-button>
      <my-button class="crtBtn" @click="fetchPosts">Получить посты</my-button>
      <my-input
        v-model="limit"
        placeholder="лимит"
        type="number"
        class="inlimit"
        >Лимит</my-input
      >
    </div>
    <my-dialog v-model:show="dialogVisible">
      <h4>Создание поста</h4>
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      style="align-self: flex"
      @remove="removePost"
      :postsprops="posts"
    />
    <div v-if="isPostLoading">*** идет загрузка***</div>
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
      posts: [],
      dialogVisible: false,
      limit: 10,
      isPostLoading: false,
    };
  },
  methods: {
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
            "https://jsonplaceholder.typicode.com/posts?_limit=" + this.limit
          );
          this.posts = this.posts.concat(response.data);
          this.isPostLoading = false;
        }, 2000);
      } catch (e) {
        /** alert(e);*/
      } finally {
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
  margin: 10px 15px 15px 0;
}
.inlimit {
  max-height: 32px;
  max-width: 100px;
}
</style>

