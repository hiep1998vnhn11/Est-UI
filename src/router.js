import Home from './pages/home.vue'
import UserUrl from './pages/user/_url.vue'
import Login from './pages/login/index.vue'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: () => import('./layout/full/MainContainer.vue'),
      // ======================
      // Theme routes / pages
      // ======================
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
          index: 1
        },
        {
          path: '/user/:url',
          name: 'user-url',
          index: 2,
          component: UserUrl
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // Redirect to starterkit page, if no match found
    {
      path: '*',
      redirect: '/'
    }
  ]
})
