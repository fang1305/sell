import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// Vue.use(router)

// let app = Vue.extend(App);
// let routers = new VueRouter();
// routers.map({
//     '/goods':{
//         component: HelloWorld
//     }
// });
// router,