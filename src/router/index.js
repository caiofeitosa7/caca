import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from "@/stores/auth";
import SiteView from '../views/SiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'site',
      component: SiteView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) {
          next('/login'); // Redireciona para login se não estiver autenticado
        } else {
          next(); // Permite acesso se autenticado
        }
      },
    },
  ]
})

export default router
