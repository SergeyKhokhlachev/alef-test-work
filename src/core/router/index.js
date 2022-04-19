import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@page/MainPage"),
  },
  {
    path: "/404",
    name: "page-not-found",
    component: () => import("@page/NotFound"),
  },
  {
    path: "/:catchAll(.*)",
    name: "page-not-found-fix",
    component: () => import("@page/NotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
