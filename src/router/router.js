import Main from "@/pages/Main";
import postsPage from "@/pages/postsPage";
import singlePost from "@/pages/singlePost";
import { createRouter, createWebHistory } from "vue-router";
import aboutUs from "@/pages/aboutUs";
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
