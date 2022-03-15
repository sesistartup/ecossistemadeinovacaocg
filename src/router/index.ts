import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'
import FaleConosco from '../views/fale-conosco/FaleConosco.vue'
import Parceiros from '../views/parceiros/Parceiros.vue'
import ParceiroExpandido from '../views/parceiros/expandido/ParceiroExpandido.vue'
import QuemSomos from '../views/quem-somos/QuemSomos.vue'
import Eventos from '../views/eventos/Eventos.vue'

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
    path: "/parceiros",
    name: "Parceiros",
    component: Parceiros
  },
  {
    path: "/parceiros/:parceiroId",
    name: "ParceiroExpandido",
    component: ParceiroExpandido
  },
  {
    path: "/quem-somos",
    name: "QuemSomos",
    component: QuemSomos
  },
  {
    path: "/eventos",
    name: "Eventos",
    component: Eventos
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;