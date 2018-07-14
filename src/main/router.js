import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home'

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
  }
]

const routes = new Router({
  routes: [].concat(Base, error404)
})

export default routes
