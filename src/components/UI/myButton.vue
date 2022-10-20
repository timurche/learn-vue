<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.button {
  padding: 8px 5px;
  color: black;
  background: none;
  transition: 300ms;
  border: 1px solid black;
  border-radius: 5px;
}

.button:hover {
  color: white;
  background-color: black;
  transition: 300ms;
}
</style>