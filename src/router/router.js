import Main from "@/pages/Main";
import postsPage from "@/pages/postsPage";
import singlePost from "@/pages/singlePost";
import { createRouter, createWebHistory } from "vue-router";
import about from "@/pages/about";

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
    path: "/aboutUs",
    component: about
  },
  {
    path: "/myposts/:id",
    component: singlePost
  },
  {
    path: "/store",
    component: singlePost
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
