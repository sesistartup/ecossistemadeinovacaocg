import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'
import FaleConosco from '../views/fale-conosco/FaleConosco.vue'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fale-conosco",
    name: "FaleConosco",
    component: FaleConosco
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;