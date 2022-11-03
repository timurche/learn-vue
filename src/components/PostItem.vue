<template>
  <div class="post">
    <div>
      <div>Id {{ post.id }}</div>
      <div><strong>Заголовок: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button class="delButton" @click="$emit('remove', post)">
        Удалить
      </my-button>

      <my-button
        class="openButton"
        @click="$router.push('/myposts/${post.id}')"
      >
        Открыть
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid palevioletred;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.delButton {
  align-self: flex-end;
  margin: 3px;
}
.openButton {
  align-self: flex-end;
  margin: 3px;
}
.post__btns {
  display: flex;
  align-items: center;
}
</style>