import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'

import MainView from '@/views/Main'
import ContactLeftView from '@/views/ContactLeft'
var ContactRightView = ContactLeftView
var HomeLeftView = ContactLeftView
var HomeRightView = ContactLeftView
var ServicesRightView = ContactLeftView
var ServicesLeftView = ContactLeftView
var AboutRightView = ContactLeftView
var AboutLeftView = ContactLeftView

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      components: {
        main: MainView
      }
    },
    {
      path: '/home/',
      components: {
        homeLeft: HomeLeftView,
        homeRight: HomeRightView
      }
    },
    {
      path: '/about/',
      components: {
        aboutLeft: AboutLeftView,
        aboutRight: AboutRightView
      }
    },
    {
      path: '/services/',
      components: {
        servicesLeft: ServicesLeftView,
        servicesRight: ServicesRightView
      }
    },
    {
      path: '/contact/',
      components: {
        contactLeft: ContactLeftView,
        contactRight: ContactRightView
      }
    },
    {
      path: '/mobile/',
      components: {
        homeLeft: HomeLeftView,
        homeRight: HomeRightView,
        aboutLeft: AboutLeftView,
        aboutRight: AboutRightView,
        servicesLeft: ServicesLeftView,
        servicesRight: ServicesRightView,
        contactLeft: ContactLeftView,
        contactRight: ContactRightView
      }
    }
  ]
})

// following hooks might be interesting

// function redirectToLoginIfNotAuth (to, from, next) {
//   if (store.getters.auth.isAuthenticated) {
//     next()
//   } else {
//     next('/login')
//   }
// }

// function redirectToHomeIfAuth (to, from, next) {
//   if (!store.getters.auth.isAuthenticated) {
//     next()
//   } else {
//     next('/')
//   }
// }

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.getters.auth.isAuthenticated) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // make sure to always call next()!
//   }
// })

export default router
