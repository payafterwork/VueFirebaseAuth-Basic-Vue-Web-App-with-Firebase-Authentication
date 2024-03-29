import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import firebase from 'firebase'
import ViewProfile from '@/components/profile/ViewProfile'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { // This route requires authentication
      	requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
     {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: { // This route requires authentication
      	requiresAuth: true
      }
    }
  ]
})
// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // User is signed in. Proceed to route
      next()
    } else {
      // No user is signed in. Redirect to login
      next({
        name: 'Login'
      })
    }
  } else {
    // if route is not guarded by auth, proceed
    next()
  }
})

export default router