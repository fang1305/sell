<template>
    <div class="hello" id="app">
        <v-header :seller = "seller"></v-header>
        <keep-alive>
            <router-view class="viewPage"></router-view>
        </keep-alive>
        <div class="bottom">
            <router-link v-for="(item,index) in navList" :to="item.path" class="footer" :key="index">
                <span v-text="item.item"></span>
            </router-link>
        </div>
    </div>
</template>

<script>
import headerPage from './header/header.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
        headerText: 'dsads',
        seller: {},
        navList:[
            {
                path: '/chat',
                item: '微我'
            },{
                path: '/address',
                item: '通讯录'
            },{
                path: '/supply',
                item: '供求'
            },{
                path: '/find',
                item: '发现'
            },{
                path: '/my',
                item: '我'
            }
        ] ,
        msg: 'Welcome to Your Vue.js App'
    }
  },created() {
      this.$router.push('/goods')
  },
  components:{
      "v-header": headerPage
  }
}
</script>

<style scoped>
#app{
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
}
.viewPage{
    position: absolute;
    top: 88px;
    width: 100%;
    bottom: 88px;
}
.bottom{
    position: absolute;
    bottom: 0;
    height: 88px;
}
</style>
