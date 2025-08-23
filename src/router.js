import { createRouter, createWebHistory } from 'vue-router';
import Login from './layouts/login.vue';
import Register from './layouts/register.vue';
import ForgotPassword from './layouts/forgot-password.vue';
import AdminLayout from './layouts/AdminLayout.vue';
import SiteLayout from './layouts/SiteLayout.vue';
import LogoCreate from './admin/LogoCreate.vue';
import LogoList from './admin/LogoList.vue';
import LogoEdit from './admin/LogoEdit.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/layouts/admin', component: AdminLayout },
  { path: '/', component: SiteLayout },
  { path: '/admin/logos', component: LogoList },
  { path: '/admin/logos/create', component: LogoCreate },
  { path: '/admin/logos/edit/:id', component: LogoEdit }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
