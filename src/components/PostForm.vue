<template>
  <form @submit.prevent>
    <my-input
      v-model.trim="post.title"
      class="postInput"
      type="text"
      placeholder="Заголовок"
    />
    <my-input
      v-model.trim="post.body"
      class="postInput"
      type="text"
      placeholder="Описание"
    />
    <my-button class="submit_button" @click="createPost">
      Опубликовать
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: { id: "", title: "", body: "" },
    };
  },
  methods: {
    createPost() {
      this.post.id = (new Date().getTime() / 1000).toString();
      this.$emit("create", this.post);
    },
  },
};
</script>


<style scoped>
.postInput {
  margin: 10px 0 0;
}
form {
  display: flex;
  flex-direction: column;
}
.submit_button {
  align-self: flex-end;
  margin-top: 10px;
}
</style>