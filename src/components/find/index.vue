<template>
    <div class='main'>
        <div class="findNav flex-def">
            <router-link class="flex-item findList" v-for="(item,index) in navList" :to="item.url" :key="index">
                <img :src="item.img" />
                <p v-text="item.name"></p>
            </router-link>
        </div>
        <transition :name="transitionName">
            <keep-alive>
                <router-view v-if="!$route.meta.keepAlive" @sendMsg='getMsg' class="content"></router-view>
            </keep-alive>
            <router-view v-if="$route.meta.keepAlive" @sendMsg='getMsg' class="content"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'find',
    data(){
        return {
            transitionName: '',
            contentStyle: {},
            navList:[
                {
                    name: '供应',
                    img: require("../../image/icon_find/fx_qz.png"),
                    url: '/find'
                },{
                    name: '需求',
                    img: require("../../image/icon_find/fx_gc.png"),
                    url: '/find/ask'
                },{
                    name:'圈子',
                    img: require("../../image/icon_find/fx_pyq.png"),
                    url: '/find/cricle'
                },{
                    name: '广场',
                    img: require("../../image/icon_find/fx_cjeg.png"),
                    url: '/find/round'
                },{
                    name: '朋友圈',
                    img: require("../../image/icon_find/fx_fjdr.png"),
                    url: '/find/friend'
                }
            ]
        }
    },
    computed: {
        // 逻辑相关

    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll,true)
    },
    watch: {//使用watch 监听$router的变化
        $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之则为后退状态
            console.log(to);
            if(to.meta.index > from.meta.index){
                //设置动画名称
                this.transitionName = 'slide-left';
            }else{
                this.transitionName = 'slide-right';
            }
        }
    },
    beforeCreate() {
        
    },created() {
        // 创建
        setTimeout(() => {

        }, 3000);
    },methods: {
        handleScroll(e){
            console.log(e.target.scrollTop)
        },
        getMsg(data){
            console.log(data)
        }
    }
}
</script>
<style scoped>
.findList{
    font-size: 26px;
    text-align: center;
    padding: 30px 0;
    color: #666;
}
.findList img{
    height: 88px;
    margin-bottom: 20px;
}
.content p{
    line-height: 88px;
    font-size: 32px;

}
.content{
    position: absolute;
    top: 200px;
    bottom: 0;
    width: 100%;
    overflow: scroll;
    background: #FFF;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
