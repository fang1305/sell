<template>
    <div id="app">
        <!-- <header>{{headerText}}</header> -->
        <!-- <v-header :seller = "seller"></v-header> -->
        <keep-alive>
            <router-view class="viewPage"></router-view>
        </keep-alive>
        <!-- <div class="tab">
            <router-link v-for="(item,index) in navList" @click="chengFooter(item.item)" :key="index" :to="item.path" class="tab-item">
                <span v-text="item.item"></span>
            </router-link>
        </div> -->
    </div>
</template>

<script>
    import header from './components/header/header.vue'
    export default {
        name: 'App',
        data() {
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
                ]     
            }
        },  
        created() {
            let token = localStorage.getItem('token');
            console.log(token == null);
            if(token == null || !token){
                this.$router.push('/login');
            }else{
                this.$router.push('/');
            }
        },
        methods: {
            chengFooter(text){
                
            }
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
    header{
        width: 100%;
        height: 88px;
        line-height: 88px;
        border-bottom: 1px solid #F3F5F8;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        color: #333;
        padding: 0 30px;
        box-sizing: border-box;
        position: fixed;
        background: #FFF;
        top:0;
    }
    .iconMore{
        position: relative;
    }
    .iconMore:after {
        content: " ";
        display: inline-block;
        height: 12px;
        width: 12px;
        border-width: 4px 4px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        top: -4px;
        position: absolute;
        top: 50%;
        margin-top: -8px;
        right: .33rem;
    }
    .tab{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 88px;
        background: #FFF;
        border-top: 1px solid #f3f5f8;
        display: flex;
        text-align: center;
    }
    .tab .tab-item{
        flex: 1;
        line-height: 88px;
        font-size: 20px;
        color: #333;
    }
    .viewPage{
        width: 100%;
        top: 0;
        bottom: 0;
        background: #fff;
        /* position: absolute; */
    }
    .callback{
        background: url('../src/image/icon_fanh.png') no-repeat;
        width: 30px;
        background-size: 18px auto;
        background-position: center left;
    }
    .rightBtn{
        background: url('../src/image/icon_fanh.png') no-repeat;
        width: 80px;
        background-size: 30px auto;
        background-position: center right;
    }
</style>
