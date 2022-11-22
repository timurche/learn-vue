<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="$router.push('/')">
      <h4>SiteLogo!</h4>
    </div>
    <div class="nav__list">
      <ul class="nav-list">
        <li @click="$router.push('/myposts')">Посты</li>
        <li @click="$router.push('/allaboutus')">О нас</li>
        <li @click="$router.push('/store')">Store</li>
        <li @click="$router.push('/compapi')">Composition API</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 50px;
  background: tomato;
  padding: 0 15px;
  align-items: center;
}
.nav-list {
  display: flex;
  margin-left: auto;
  font-size: 18px;
  font-weight: bolder;
}
.nav__list {
  margin-left: auto;
}
li {
  list-style-type: none;
  padding: 15px;
  cursor: pointer;
}
</style>