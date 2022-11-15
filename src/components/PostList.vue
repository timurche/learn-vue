<template>
  <div v-if="postsprops.length > 0">
    <h3>Посты</h3>
    <transition-group name="post-list">
      <post-item
        :post="post"
        @remove="$emit('remove', post)"
        v-for="post in postsprops"
        :key="post.id"
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
  },
};
</script>

<style scoped>
.post-list-move, /* apply transition to moving elements */
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-leave-active {
  position: absolute;
}
</style>