import { createRouter, createWebHistory } from 'vue-router';
import Login from './admin/Login.vue';
import AdminDashboard from './admin/AdminDashboard.vue';
import LogoCreate from './admin/LogoCreate.vue';
import LogoList from './admin/LogoList.vue';
import LogoEdit from './admin/LogoEdit.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/admin', component: AdminDashboard },
  { path: '/admin/logos', component: LogoList },
  { path: '/admin/logos/create', component: LogoCreate },
  { path: '/admin/logos/edit/:id', component: LogoEdit }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
