<template>
  <div>Страница поста ID = {{ $route.params.id }}</div>
</template>

<script>
export default {
  data() {},
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
</style>