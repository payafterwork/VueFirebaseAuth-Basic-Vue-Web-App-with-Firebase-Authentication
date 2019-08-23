import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Signup from '@/components/auth/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})