import Vue from 'vue'
import App from '@components/App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import store from './store'
import '@assets/base'
import Vuebar from 'vuebar'
import VueTouch from 'vue-touch'
import CordovaService from '@service/cordova'
import Database from '@database'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

if (window.location.protocol === 'file:') {
  let script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', 'cordova.js')
  document.body.appendChild(script)
}

Vue.use(Database)
Vue.use(CordovaService)
Vue.use(VueVirtualScroller)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueMaterial)
Vue.use(Vuebar)

new Vue({
  components: { App },
  template: '<App/>',
  router,
  store
}).$mount('#app')
