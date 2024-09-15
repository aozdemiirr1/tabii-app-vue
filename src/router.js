import { createRouter, createWebHistory } from 'vue-router'
import Login from './admin/Login.vue'
import AdminDashboard from './admin/AdminDashboard.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/admin', component: AdminDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
