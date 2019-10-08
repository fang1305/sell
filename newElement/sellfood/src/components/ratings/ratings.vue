<template>
    <div class="ratings-main"  ref="scrollParts">
        <div class="mainPart">
        <div class="ratings-content">
            <div class="overview">
                <div class="overview-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评价</div>
                    <div class="rank">高于周边{{seller.rankRate}}</div>
                </div>
                <div class="overview-right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <v-star :size="48" :score="seller.serviceScore"></v-star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">商品评分</span>
                        <v-star :size="48" :score="seller.foodScore"></v-star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                </div>
            </div>
        </div>
        <split></split>
        <ratingselect @selectEvt="changeType" :ratings="ratings" :select-type="selectType" :only-content="onlyContent" :desc="desc"></ratingselect>      
        <div class="rating-wrapper">
            <ul>
                <li v-for="(rating,index) in ratings" :key = 'index' class="rating">
                    <div class="avatar">
                        <img :src="rating.avatar" alt="">
                    </div>
                    <div class="content">
                        <h1 class="name">{{rating.username}}</h1>
                        <div class="star-wrapper">
                            <v-star :size='24' :score="rating.score">
                            </v-star>
                            <span class="dilider">{{rating.text}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div></div>
</template>
<script  type="text/ecmascript-6">
/* eslint-disable */
// import Router from 'vue-router'
// const userCom = {template: "<div>dsbh</div>"};
import BScroll from 'better-scroll';
import vStar from '../star/star'
import split from '../split/split'
import ratingselect from '../ratingselect/ratingselect'
let ERR_OK = 0;
const ALL = 'all';
export default {
    data() {
        return {
            seller: {},
            selectType: ALL,
            ratings: [],
            showFlag: false,
            onlyContent: true,
            desc:{
                all: '全部',
                positive: '推荐',
                negative: '吐槽'
            },
            scroll: ''
        }
    },
    components:{
        vStar,split,ratingselect
    },
    methods: {
        changeType(index){
            this.selectType = index;
            console.log('修改'+index)
        }
    },
    // props:{
    //     seller:{
    //         type: Object
    //     }
    // },
    created() {
        this.$http.get('/seller').then((response) => {
            response = response.body;
            if(response.errno === ERR_OK){
                this.seller = response.data;
                console.log(response.data)            
            }
        });
        this.$http.get('/ratings').then((response) => {
            response = response.body;
            if(response.errno === ERR_OK){
                this.ratings = response.data;
                this.$nextTick(()=>{
                    console.log('开始滚动')
                    this.scroll = new BScroll(this.$refs.scrollParts,{
                        click: true,
                        scrollY:true,
                    })
                });
            }
        });
    },
}
</script>
<style lang="stylus">
    .ratings-main
        position absolute;
        top: 348px;
        bottom: 0;
        left: 0;
        width 100%;
        overflow hidden
        .mainPart
            width 100%
        .overview
            display: flex;
            padding: 36px 0;
            .overview-left
                flex: 0 0 274px;
                width: 274px;
                border-right 1px solid rgba(7,17,27,.4);
                text-align center;
            .overview-right
                flex: 1;
                padding-left 48px;
        .avatar
            img
                width: 40px;
</style>