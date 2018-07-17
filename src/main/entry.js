import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import '@assets/base'
Vue.use(VueMaterial)

new Vue({
  components: { App },
  template: '<App/>',
  router
}).$mount('#app')
