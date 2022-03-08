import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// Global components
import NavBar from './components/NavBar.vue'


const pinia = createPinia()
const ecossistema = createApp(App)

ecossistema.component('NavBar', NavBar)

ecossistema.use(pinia)
ecossistema.use(router)

ecossistema.mount('#app')