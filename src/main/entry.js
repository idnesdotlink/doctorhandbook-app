import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import db from './db'
Vue.use(VueMaterial)

db()

new Vue({
  components: { App },
  template: '<App/>',
  router
}).$mount('#app')
