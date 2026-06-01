import { createRouter, createWebHistory } from 'vue-router'
import InfoPage from '../views/InfoPage.vue'
import ApiPage from '../views/ApiPage.vue'
import FormPage from '../views/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'info',
      component: InfoPage
    },
    {
      path: '/api',
      name: 'api',
      component: ApiPage
    },
    {
      path: '/form',
      name: 'form',
      component: FormPage
    }
  ]
})

export default router