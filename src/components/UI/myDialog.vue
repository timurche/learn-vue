<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: "my-dialog",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080;
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background-color: white;
  border-radius: 5px;
  min-height: 50px;
  min-width: 300px;
  padding: 10px;
}
</style>