<template>
  <div v-if="postsprops.length > 0">
    <h3>Посты: {{ postsCountf }} шт.</h3>
    <transition-group name="">
      <post-item
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
        v-for="post in postsprops"
      />
    </transition-group>
  </div>
  <h3 v-else>Нет постов :'(</h3>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    postsprops: {
      type: Array,
      required: true,
    },
    postsCountf: { type: Number },
  },
};
</script>

<style scoped>
</style>