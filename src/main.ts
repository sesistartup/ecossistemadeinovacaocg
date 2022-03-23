import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// Global components
import NavBar from './components/general/NavBar.vue'
import FooterComponent from './components/general/FooterComponent.vue'

const pinia = createPinia()
const ecossistema = createApp(App)

ecossistema.component('NavBar', NavBar)
ecossistema.component('FooterComponent', FooterComponent)

ecossistema.use(pinia)
ecossistema.use(router)

ecossistema.mount('#app')