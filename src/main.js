import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/index.css' 
import global from "./global"
import store from './store'




const app = createApp(App).use(router).use(store)
global(app)
app.mount("#app")