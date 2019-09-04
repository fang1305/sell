import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
      {
          path: '/',
          redirect: '/workbench'
          // meta: {
          //     title: '',
          //     requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          // },
      },
    {
        path: '/login',
        component: resolve => require(['../components/login/index.vue'], resolve)
    },
    {
      path: '/workbench',
      component: HelloWorld,
      children: [
        {
            path: '/supply',
            component: resolve => require(['../components/supply/index.vue'], resolve)
        }, {
            path: '/address',
            component: resolve => require(['../components/address/address.vue'], resolve)
        }, {
            path: '/my',
            component: resolve => require(['../components/my/index.vue'], resolve)
        }, {
            path: '/find',
            component: resolve => require(['../components/find/index.vue'],resolve),
            meta: {
                keepAlive: true
            },
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/find/find0.vue'], resolve)
                }, {
                    path: 'ask',
                    component: resolve => require(['../components/find/find1.vue'], resolve)
                }, {
                    path: 'cricle',
                    component: resolve => require(['../components/find/cricle.vue'], resolve)
                }
            ]
        }, {
            path: '/seller',
            component: resolve => require(['../components/seller/seller.vue'], resolve)
        }, {
            path: '/seller',
            component: resolve => require(['../components/seller/seller.vue'], resolve)
        }, {
            path: '/HelloWorld',
            component: resolve => require(['../components/HelloWorld.vue'], resolve)
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
