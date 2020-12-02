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
      component: () => import('../views/MainPage.vue')
    },
    {
      path: '/set',
      name: 'set',
      component: () => import('../views/set.vue')
    },
    {
      path: '/reset',
      name: 'Reset',
      component: () => import('../views/Reset.vue')
    },

    {
      path: '/reset/password',
      name: 'ResetPassword',
      component: () => import('../views/ResetPassword.vue')
    },
  ]
})
