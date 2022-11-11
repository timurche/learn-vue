<template>
  <div>
    <div>
      <h3>
        {{ $store.state.isAuth ? "Авторизован" : "Чужак" }}
      </h3>
      <my-button
        v-if="$store.state.isAuth == false"
        @click="$store.commit('authNow')"
        >Войти</my-button
      >
    </div>

    <div>
      {{ $store.getters.likesView }}
      <my-button @click="$store.commit('incLike')"> 👍 </my-button>
      <my-button @click="$store.commit('decLike')"> 👎 </my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>