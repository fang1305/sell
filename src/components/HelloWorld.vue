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
        seller:{
            path: '/chat',
            item: '微我'
        },
        msg: 'Welcome to Your Vue.js App'
    }
  },methods: {
      changeNav(index) {
          this.activeIndex = index;
          this.seller = this.navList[index];
      }
  },created() {
        this.$router.push('/chat');
        let self = this;
        this.$axios({
            method: 'POST',
            withCredentials: false,
            url: '/api/user_center/index',
            data: {
                token: localStorage.getItem('token'),
            }
        })
        .then(function(ret){
            if (ret.data.code === 200) {
                console.log(JSON.stringify(ret.data, null, 4))
                localStorage.setItem('userlogo',ret.data.data.info.head_img_url);
                localStorage.setItem('nickname',ret.data.data.info.nickname);
                localStorage.setItem('username',ret.data.data.info.username);
                localStorage.setItem('usercompany',ret.data.data.info.current_company);
            } else {
                self.message.error(ret.data.msg);
            }
        })
        .catch(function(err){
            console.log(err);
        });
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
.header{
    height: 88px;
    width: 100%;
    background: #3699FF;
}
.viewPage{
    position: absolute;
    top: 0;
    width: 100%;
    overflow: scroll;
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
.footerBox .footer.active{
    color: #3699FF;
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
