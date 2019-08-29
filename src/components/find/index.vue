<template>
    <div class='main'>
        <div class="findNav flex-def">
            <router-link class="flex-item findList" v-for="(item,index) in navList" :to="item.url" :key="index">
                <img :src="item.img" />
                <p v-text="item.name"></p>
            </router-link>
        </div>
        <div class='content'>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
            <p>2222222222222222222222222222222</p>
            <p>3333333333333333333333333333333</p>
            <p>1111111111111111111111111111111</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'find',
    data(){
        return {
            navList:[
                {
                    name: '供应',
                    img: require("../../image/icon_find/fx_qz.png"),
                    url: 'supply'
                },{
                    name: '需求',
                    img: require("../../image/icon_find/fx_gc.png"),
                    url: 'ask'
                },{
                    name:'圈子',
                    img: require("../../image/icon_find/fx_pyq.png"),
                    url: 'cricle'
                },{
                    name: '广场',
                    img: require("../../image/icon_find/fx_cjeg.png"),
                    url: 'gc'
                },{
                    name: '朋友圈',
                    img: require("../../image/icon_find/fx_fjdr.png"),
                    url: 'friend'
                }
            ]
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll,true)
    },
    beforeCreate() {
        
    },created() {
        // 创建
    },methods: {
        handleScroll(e){
            console.log(e.target.scrollTop)
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
</style>
