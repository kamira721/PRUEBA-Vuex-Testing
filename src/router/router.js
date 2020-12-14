import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/inicio']
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    component: () => import('../views/Opiniones.vue'),
    alias: ['/opiniones', '/comentarios']
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import('../views/Favoritos.vue'),
    alias: ['/me-gusta', '/mis-favoritos', '/lista-favoritos', '/like']
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue'),
    alias: ['/administracion', '/admin', '/tabla']
  },
  {
    path: '/edit-opinion/:index',
    name: 'EditOpinion',
    component: () => import('../views/EditOpinion.vue'),
    alias: ['/editar-opinion', '/editar', '/edit']
  },
  {
    path: '*',
    name: 'Error404',
    component: () => import('../views/Error404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;


