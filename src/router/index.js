import {
    createRouter,
    createWebHistory
  } from 'vue-router'
import home from '../views/Home.vue'
import tests from '../views/Tests.vue'
import login from '../views/Login.vue'
import Navbar from '../layouts/Navbar.vue'
const routes = [ 
    {
        path: '/',
        component: home,
        name: 'home',
        meta: {
                layout: 'Navbar'
        }
    },
    {
        path: '/tests',
        component: tests,
        name: 'tests',
        meta: {
               layout: 'Navbar'
        }
    },
    {
      path: '/login',
      component: login,
      name: 'login',
      meta: {
          
      }
  }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {
          left: 0,
          top: 0
        };
      }
})
export default router