import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'

import '@/common/stylus/index.styl'
// 优化移动端点击300ms的延迟
fastclick.attach(document.body);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
