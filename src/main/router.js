import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home'
import Advertisement from '@pages/Advertisement'
import Tour from '@pages/Tour'
import TourOne from '@pages/tour/one.vue'

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
    component: Tour,
    children: [
      {
        path: 'one',
        component: TourOne
      }
    ]
  }
]

const routes = new Router({
  routes: [].concat(Base, error404)
})

export default routes
