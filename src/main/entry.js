import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import store from './store'
import '@assets/base'
import Vuebar from 'vuebar'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueMaterial)
Vue.use(Vuebar)

new Vue({
  components: { App },
  template: '<App/>',
  router,
  store
}).$mount('#app')
