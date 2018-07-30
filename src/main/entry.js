import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import store from './store'
import '@assets/base'
import Vuebar from 'vuebar'
import VueTouch from 'vue-touch'
import CordovaService from '@service/cordova'

if (window.location.protocol === 'file:') {
  let script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', 'cordova.js')
  document.body.appendChild(script)
}

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueMaterial)
Vue.use(Vuebar)
Vue.use(CordovaService)

new Vue({
  components: { App },
  template: '<App/>',
  router,
  store
}).$mount('#app')
