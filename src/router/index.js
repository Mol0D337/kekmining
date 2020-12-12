import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: () => import('../views/MainPage/MainPage.vue')
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('../views/set.vue')
    },
    {
      path: '/reset',
      name: 'Reset',
      component: () => import('../views/MainPage/Reset/Reset.vue')
    },
    {
      path: '/reset2',
      name: 'Reset2',
      component: () => import('../views/MainPage/Reset/Reset2.vue')
    },

    {
      path: '/reset/password',
      name: 'ResetPassword',
      component: () => import('../views/MainPage/Reset/ResetPassword.vue')
    },
  ]
})
