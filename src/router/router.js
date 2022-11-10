import Main from "@/pages/Main";
import postsPage from "@/pages/postsPage";
import singlePost from "@/pages/singlePost";
import { createRouter, createWebHistory } from "vue-router";
import allaboutus from "@/pages/allaboutus";
import store from "@/pages/store";

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
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
