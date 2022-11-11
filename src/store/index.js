import { createStore } from "vuex";

export default createStore({
  state: {
    likes: 0,
    isAuth: false
  },
  getters: {
    likesView(state) {
      return state.likes + " likes";
    }
  },
  mutations: {
    incLike(state) {
      state.likes += 1;
    },
    decLike(state) {
      state.likes -= 1;
    },
    authNow(state) {
      state.isAuth = true;
    }
  },
  actions: {}
});
