<template>
    <div id="app">
        <div>
            <!-- postcss插件会搞定CSS兼容问题 -->
        </div>
        <v-header :seller = "seller"></v-header>
        <div class="tab">
            <router-link v-for="(item, index) in navList" :key="index" :to='item.path' class="tab-item" tag="div">
                <a v-text="item.item"></a>
            </router-link>
        </div>
        <keep-alive>
        <router-view class="viewPage"></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import header from './components/header/header.vue'
    export default {
        name: 'App',
        data() {
            return {
                seller: {},
                navList:[
                    {
                        path: '/goods',
                        item: '商品'
                    },{
                        path: '/ratings',
                        item: '评价'
                    },{
                        path: '/seller',
                        item: '商家'
                    }
                ]     
            }
        },  
        created() {
            this.$http.get('/api/seller').then(res => {
                res = res.data;
                if(res.errno === 0){
                    this.seller = res.data;
                }else{
                }
            },err => {
                console.log(err)
            })
        },
        components: { 
            "v-header":header 
        }
    }
</script>

<style>
    @import url("components/common/style/base.css");
    body{
        padding: 0;
        margin: 0;
    }
    .viewPage{
        background: red;
        position: absolute;
        top: 175px;
        bottom: 0;
        width: 100%;
    }
    #app .tab{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px; 
        /* border-bottom: 1px solid rgba(7,17,27,0.1); */
        position: relative;
    }
    #app .tab:after{
        content: '';
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        background: rgba(7,17,27,0.1);
        position: absolute;
    }
    #app .tab .tab-item{
        flex: 1;
        -webkit-tap-highlight-color:transparent;
        text-align: center;
    }
    #app .tab .tab-item a{
        display: block;
        color: #333;
    }
    #app .tab .router-link-active a{
        color: #3699FF;
    }
</style>
