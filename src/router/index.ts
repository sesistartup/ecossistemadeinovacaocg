import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'
import FaleConosco from '../views/fale-conosco/FaleConosco.vue'
import QuemSomos from '../views/quem-somos/QuemSomos.vue'

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
  },
  {
    path: "/quem-somos",
    name: "QuemSomos",
    component: QuemSomos
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;