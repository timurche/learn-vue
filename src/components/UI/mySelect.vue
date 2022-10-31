<template>
  <select class="mySelect" v-model="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: { type: String },
    options: { type: Array, default: () => [] },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.mySelect{
  width: 50%;
  border: 1px solid green;
  border-radius: 5px;
  /*margin: 10px 5px 15px 0;*/
  padding: 8px 5px;
}
</style>