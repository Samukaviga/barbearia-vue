import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ReportView from '@/views/ReportView.vue'
import ClientView from '@/views/ClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/service',
      name: 'ServicesView',
      component: ServicesView,
    },

    {
      path: '/report',
      name: 'ReportView',
      component: ReportView,
    },

    {
      path: '/client',
      name: 'ClientView',
      component: ClientView,
    },

  ],
})

export default router
