// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import 'lib-flexible/flexible'
/* eslint-disable */
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
