import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import 'lib-flexible';
import axios from 'axios';
// import "babel-polyfill";
Vue.config.productionTip = false;
Vue.use(VueResource);
// 进行下步操作使用axios(将vue改成vue原型链)
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})