<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="postInput"
  />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  name: "my-input",
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.postInput {
  width: 100%;
  border: 1px solid green;
  border-radius: 5px;
  /*margin: 10px 5px 15px 0;*/
  padding: 5px;
}
</style>