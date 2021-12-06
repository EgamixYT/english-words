import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/index.css' 
import global from './global/index.js'
import store from './store'
import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


initializeApp({

    apiKey: "AIzaSyAgoFLOY8tJbpmJCmcWPDH5kcYVLWe4LE4",
  
    authDomain: "english-words-1b642.firebaseapp.com",
  
    projectId: "english-words-1b642",
  
    storageBucket: "english-words-1b642.appspot.com",
  
    messagingSenderId: "18791232570",
  
    appId: "1:18791232570:web:75ee5768a70587e1827103",
  
    measurementId: "G-G476VGNPYK"
  
  })


const app = createApp(App).use(router).use(store).use(initializeApp)
global(app)
app.mount("#app")