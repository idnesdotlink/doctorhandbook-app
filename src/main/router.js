import Vue from 'vue'
import Router from 'vue-router'
import Main from '@pages/Home'
import TabBar from '@components/TabBar'
import TabDND from '@pages/TabDND'
import TabDNT from '@pages/TabDNT'
import TabCareer from '@pages/TabCareer'
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
      type: 'root',
      animation: 'slide-fade-up'
    }
  },
  {
    path: '/',
    components: {
      'content': Main
    },
    meta: {
      type: 'root',
      animation: 'slide-fade-up'
    },
    children: [
      {
        path: '',
        name: 'tab-dnd',
        components: { 'tab-tab': TabBar, 'tab-content': TabDND },
        meta: {
          type: 'tab-child',
          tab: 1
        }
      },
      {
        path: 'tab-dnt',
        name: 'tab-dnt',
        components: { 'tab-tab': TabBar, 'tab-content': TabDNT },
        meta: {
          type: 'tab-child',
          tab: 2
        }
      },
      {
        path: 'tab-career',
        name: 'tab-career',
        components: { 'tab-tab': TabBar, 'tab-content': TabCareer },
        meta: {
          type: 'tab-child',
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
    console.log(animation)
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
