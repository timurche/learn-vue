<template>
  <div @load="countPostsNow" v-if="postsprops.length > 0">
    <h3>Посты {{ postsCountf }}</h3>
    <post-item
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
      v-for="post in postsprops"
    />
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
  methods: {
    countPostsNow() {
      this.$emit("load", this.postsprops);
    },
  },
};
</script>

<style scoped>
</style>