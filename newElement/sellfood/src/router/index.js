import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
        path: '/goods',
    //   path: '/goods/:id',
      component: resolve => require(['../components/goods/goods.vue'], resolve)
    }, {
      path: '/seller',
      component: resolve => require(['../components/seller/seller.vue'], resolve)
    }
  ]
})
