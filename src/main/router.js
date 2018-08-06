import Vue from 'vue'
import Router from 'vue-router'
import Main from '@pages/Home'
import RTab from '@components/RTab'
import TabA from '@pages/TabA'
import TabB from '@pages/TabB'
import TabC from '@pages/TabC'
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
    path: '/settings',
    name: 'settings',
    components: {
      content: Settings
    },
    meta: {
      animation: 'slide-fade-up'
    }
  },
  {
    path: '/',
    components: {
      'content': Main
    },
    meta: {
      animation: 'slide-fade-up'
    },
    children: [
      {
        path: '',
        name: 'taba',
        components: { 'tab-tab': RTab, 'tab-content': TabA },
        meta: {
          tab: 1
        }
      },
      {
        path: 'tab-b',
        name: 'tabb',
        components: { 'tab-tab': RTab, 'tab-content': TabB },
        meta: {
          tab: 2
        }
      },
      {
        path: 'tab-c',
        name: 'tabc',
        components: { 'tab-tab': RTab, 'tab-content': TabC },
        meta: {
          tab: 3
        }
      }
    ]
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

router.beforeEach(
  (to, from, next) => {
    let totab = (to.meta !== undefined && to.meta.tab !== undefined) ? to.meta.tab : null
    let fromtab = (from.meta !== undefined && from.meta.tab !== undefined) ? from.meta.tab : null
    let tabanimation = totab > fromtab ? 'slide-fade-left' : 'slide-fade-right'
    store.commit('SETTABANIMATION', tabanimation)
    next()
  }
)

export default router
