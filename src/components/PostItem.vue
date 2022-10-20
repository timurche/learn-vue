<template>
  <div class="post">
    <div>
      <div><strong>Заголовок: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button class="delButton" @click="$emit('remove', post)">
        Удалить
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
}
</style>