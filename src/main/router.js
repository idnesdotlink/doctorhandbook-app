import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home'
import Adv from '@pages/Advertisement'

Vue.use(Router)

const error404 = [
  {
    path: '*',
    redirect: '/'
  }
]

const Base = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/adv',
    component: Adv
  }
]

const routes = new Router({
  routes: [].concat(Base, error404)
})

export default routes
