import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/test.vue')
    },
    {
      path: '/',
      name: 'MainPage',
      component: () => import('../views/MainPage/MainPage.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "no") {
          next()
        } else {
          next('/buy-hash')
        }
      }
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
    {
      path: '/buy-hash',
      name: 'BuyHash',
      component: () => import('../views/AdminPanel/BuyHash.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('../views/AdminPanel/Help.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('../views/AdminPanel/History.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/personal-office',
      name: 'PersonalOffice',
      component: () => import('../views/AdminPanel/PersonalOffice.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/referrals',
      name: 'Referrals',
      component: () => import('../views/AdminPanel/Referrals.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/AdminPanel/Settings.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: () => import('../views/AdminPanel/Transactions.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/wallets',
      name: 'Wallets',
      component: () => import('../views/AdminPanel/Wallets.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth === "yes") {
          next()
        } else {
          next('/')
        }
      }
    },
  ]
})
