import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home'
import Advertisement from '@pages/Advertisement'
import Tour from '@pages/Tour'
import TourOne from '@pages/tour/one.vue'
import Settings from '@pages/Settings'
import store from './store'

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
    component: Home,
    name: 'home',
    meta: {
      animation: 'slide-fade-up'
    }
  },
  {
    path: '/advertisement',
    component: Advertisement,
    name: 'advertisement',
    meta: {
      animation: 'slide-fade-left'
    }
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
  },
  {
    path: '/settings',
    component: Settings,
    name: 'settings',
    meta: {
      animation: 'slide-fade-left'
    }
  }
]

const router = new Router({
  routes: [].concat(Base, error404)
})

router.beforeEach(
  (to, from, next) => {
    let animation = (to.meta !== undefined && to.meta.animation !== undefined) ? to.meta.animation : null
    store.commit('SETPAGEANIMATION', animation)
    next()
  }
)

export default router
