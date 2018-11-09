<template>
    <div id="app">
        <div>
            <!-- postcss插件会搞定CSS兼容问题 -->
        </div>
        <v-header :seller = "seller"></v-header>
        <div class="tab">
            <router-link to="/goods" class="tab-item" tag="div">
                <a>商品</a>
            </router-link>
            <router-link to="/ratings" class="tab-item" tag="div">
                <a>评价</a>
            </router-link>
            <router-link to="/seller" class="tab-item" tag="div">
                <a>商家</a>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from './components/header/header.vue'
    export default {
        name: 'App',
        data() {
            return {
                seller: {}       
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
