<template>
    <div id="app">
        <v-header :seller="seller"></v-header>
        <div class="tab">
            <router-link :seller="seller" class="tab-item" v-for="(item,index) in tabNav" :key="index" :to="item.link">
                {{item.name}}
            </router-link>
        </div>
        <router-view class="content"></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import vHeader from './components/header/header'
const ERR_OK = 0;

export default {
    name: 'App',
    data(){
        return {
            seller: {},
            tabNav: [{
                link: '/goods/39',
                name: '商品'
            },{
                link: '/rate',
                name: '评论'
            },{
                link: '/seller',
                name: '商家'
            }]
        }
    },
    created() {
        this.$http.get('/seller').then((response) => {
            console.log(response)            
            response = response.body;
            if(response.errno === ERR_OK){
                this.seller = response.data;
            }
        });
    },
    components:{
        vHeader
    }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
@import url("./common/stylus/common.css");
@import url("./common/stylus/icon.styl");

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .tab
    display: flex
    height: 80px
    line-height: 80px
    background #FFF
    a.tab-item
        flex: 1
        -webkit-box-flex: 1
        text-align: center
        display: block
        font-size: 28px
        color: rgba(77,85,93,1)
        &.active
            color: red
    .content
        background #FFF;
</style>
