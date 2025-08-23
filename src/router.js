import { createRouter, createWebHistory } from 'vue-router';
import Login from './layouts/login.vue';
<<<<<<< HEAD
import Register from './layouts/register.vue';
import ForgotPassword from './layouts/forgot-password.vue';
=======
import Register from './layouts/Register.vue';
>>>>>>> 9f8811110cb1cbf7551695fcb59085800daf27e2
import AdminLayout from './layouts/AdminLayout.vue';
import SiteLayout from './layouts/SiteLayout.vue';
import LogoCreate from './admin/LogoCreate.vue';
import LogoList from './admin/LogoList.vue';
import LogoEdit from './admin/LogoEdit.vue';

const routes = [
  { path: '/login', component: Login },
<<<<<<< HEAD
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
=======
  {path: '/register', component: Register }, // Redirect to logos by default
>>>>>>> 9f8811110cb1cbf7551695fcb59085800daf27e2
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
