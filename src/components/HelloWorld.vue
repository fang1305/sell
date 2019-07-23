<template>
    <div class="hello" id="app">
        <v-header :seller = "seller"></v-header>
        <keep-alive>
            <router-view class="viewPage"></router-view>
        </keep-alive>
        <div class="footerBox flex-def">
            <router-link v-for="(item,index) in navList" @click.native="changeNav(index)" :to="item.path" :class="[{'active':index==activeIndex},'footer flex-item']" :key="index">
                <span v-text="item.item"></span>
            </router-link>
        </div>
    </div>
</template>

<script>
import headerPage from './header/header.vue'
// import Vue from 'vue';
// Vue.component('v-header', {
//     props: ['postTitle'],
//     template: '<h3>89898989</h3>'
// })
export default {
  name: 'HelloWorld',
  data () {
    return {
        headerText: 'dsads',
        seller: 90,
        activeIndex: 0,
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
  },methods: {
      changeNav(index) {
          this.activeIndex = index;
          this.seller = {text: '888'};
      }
  },created() {
      this.$router.push('/chat')
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
    border-top: 1px solid #F3F5f8;
    border-bottom: 1px solid #F3F5f8;
}
.footerBox{
    position: absolute;
    bottom: 0;
    height: 98px;
    width: 100%;
    text-align: center;
    border-top: 1px solid #F3F5F8;
}
.footerBox .footer{
    padding-top: 64px;
    box-sizing: border-box;
    color: #333;
}
.footerBox .footer:nth-child(1){
    background: url('../../src/image/icon_footer/bottombtn0101.png') no-repeat;
    background-size: 42px auto;
    background-position: center 16px;
}
.footerBox .footer:nth-child(1).active{
    background-image: url('../../src/image/icon_footer/bottombtn0102.png');
}
.footerBox .footer:nth-child(2).active{
    background-image: url('../../src/image/icon_footer/bottombtn0202.png');
}
.footerBox .footer:nth-child(3).active{
    background-image: url('../../src/image/icon_footer/bottombtn0302.png');
}
.footerBox .footer:nth-child(4).active{
    background-image: url('../../src/image/icon_footer/bottombtn0402.png');
}
.footerBox .footer:nth-child(5).active{
    background-image: url('../../src/image/icon_footer/bottombtn0502.png');
}
.footerBox .footer:nth-child(2){
    background: url('../../src/image/icon_footer/bottombtn0201.png') no-repeat;
    background-size: 42px auto;
    background-position: center 16px;
}
.footerBox .footer:nth-child(3){
    background: url('../../src/image/icon_footer/bottombtn0301.png') no-repeat;
    background-size: 42px auto;
    background-position: center 16px;
}
.footerBox .footer:nth-child(4){
    background: url('../../src/image/icon_footer/bottombtn0401.png') no-repeat;
    background-size: 42px auto;
    background-position: center 16px;
}
.footerBox .footer:nth-child(5){
    background: url('../../src/image/icon_footer/bottombtn0501.png') no-repeat;
    background-size: 42px auto;
    background-position: center 16px;
}
</style>
