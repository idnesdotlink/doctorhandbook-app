import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home'
import Advertisement from '@pages/Advertisement'
import Tour from '@pages/Tour'

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
    path: '/advertisement',
    component: Advertisement
  },
  {
    path: '/tour',
    component: Tour
  }
]

const routes = new Router({
  routes: [].concat(Base, error404)
})

export default routes
