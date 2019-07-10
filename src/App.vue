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
            if(token){

            }else{
                this.$router.push('/login');
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
        height: .88rem;
        
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
        position: absolute;
    }
</style>
