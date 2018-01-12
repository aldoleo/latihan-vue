import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Customer from '@/pages/Customer'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/customers',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
