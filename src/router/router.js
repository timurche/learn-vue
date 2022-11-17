import Main from "@/pages/Main";
import postsPage from "@/pages/postsPage";
import singlePost from "@/pages/singlePost";
import { createRouter, createWebHistory } from "vue-router";
import allaboutus from "@/pages/allaboutus";
import store from "@/pages/store";
import compApi from "@/pages/compApi";
const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/myposts",
    component: postsPage
  },
  {
    path: "/allaboutus",
    component: allaboutus
  },
  {
    path: "/myposts/:id",
    component: singlePost
  },
  {
    path: "/store",
    component: store
  },
  {
    path: "/compapi",
    component: compApi
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
