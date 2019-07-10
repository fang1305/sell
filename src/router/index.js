import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
            path: '/goods',
            component: resolve => require(['../components/goods/goods.vue'], resolve)
        }, {
            path: '/address',
            component: resolve => require(['../components/address/index.vue'], resolve)
        }, {
            path: '/login',
            component: resolve => require(['../components/login/index.vue'], resolve)
        }, {
            path: '/seller',
            component: resolve => require(['../components/seller/seller.vue'], resolve)
        }, {
            path: '/ratings',
            component: resolve => require(['../components/ratings/ratings.vue'], resolve)
        }, {
            path: '/chat',
            component: resolve => require(['../components/chat/index.vue'], resolve)
        }
      ]
    }
  ]
})
