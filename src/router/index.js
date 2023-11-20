import { createRouter, createWebHistory } from 'vue-router'
import SiteView from '../views/SiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SiteView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import('../views/TesteView.vue')
    }
  ]
})

export default router
