import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'

const $axios = Symbol()

const pinia = createPinia()
const ecossistema = createApp(App)

ecossistema.use(pinia)
ecossistema.provide($axios, axios)
ecossistema.mount('#app')

// createApp(App).use(pinia).mount('#app')

