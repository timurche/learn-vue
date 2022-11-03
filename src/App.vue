<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>


<script>
import navBar from "@/components/navBar";
export default {
  components: { navBar },
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  padding: 10px;
  display: block;
}
.crtBtn {
  margin: 10px 15px 15px 0px;
}

.crtBtnclr {
  background-color: red;
  color: white;
}

.inlimit {
  /*max-height: 33px;*/
  max-width: 50px;
  margin: 10px 5px 15px 10px;
}
.filters {
  display: flex;
  align-items: center;
}
.mySelect {
  margin-right: 15px;
}
.pagination__wrapper {
  display: flex;
  margin: 15px 0 0 10px;
}
.pageItem {
  padding: 8px 12px 8px 12px;
  cursor: pointer;
}
.pageItemCurrent {
  background-color: grey;
  color: white;
  border-radius: 5px;
}
.observer {
  height: 30px;
  background: tomato;
}
</style>
