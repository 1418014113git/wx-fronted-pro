import Vue from 'vue'
import Router from 'vue-router'
import Register from '../views/register'
import Portal from '../views/portal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
      component: Portal
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
