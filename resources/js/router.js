import { createRouter, createWebHistory } from 'vue-router';

import Home from './vue/app.vue';
import Login from './vue/login.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
