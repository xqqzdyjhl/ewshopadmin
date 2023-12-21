import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/styles/tailwind.css'
import App from './App.vue'
import {router} from "./router";
import '../src/styles/index.less'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')