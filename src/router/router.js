import Main from "@/pages/Main";
import postsPage from "@/pages/postsPage";
import aboutUs from "@/pages/aboutUs";
import singlePost from "@/pages/singlePost";
import { createRouter, createWebHistory } from "vue-router";

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
    path: "/about",
    component: aboutUs
  },
  {
    path: "/myposts/:id",
    component: singlePost
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
