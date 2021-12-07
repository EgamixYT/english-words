import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/index.css' 
import global from "./global"
import store from './store'
import { initializeApp } from "firebase/app";
import { required, email } from '@vuelidate/validators'


initializeApp({
    apiKey: "AIzaSyBSRT3HkmD5y8XMOEkF5Tq_6v0ekeAPx4Y",

    authDomain: "english-words-d4611.firebaseapp.com",
  
    projectId: "english-words-d4611",
  
    storageBucket: "english-words-d4611.appspot.com",
  
    messagingSenderId: "901168815277",
  
    appId: "1:901168815277:web:fd9d6cf399d4954d237a24"
  
})
const app = createApp(App).use(router).use(store)
global(app)
app.mount("#app")