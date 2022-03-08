import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;