<template>
    <transition name='move'>
        <div  class="food" v-show="showFlag" ref="scrollPart">
            <div >
        <!-- <div  class="food" v-show="showFlag" v-el:vfood> -->
            <div class="food-content">
                <div class="image-header">
                    <img :src="food.image" alt="" />
                    <div class='back'>
                        <i class="icon-arrow_lift" @click="hide">返回按钮</i>
                    </div>
                </div>
                <div class="content">
                    <h1 class="title">{{food.name}}</h1>
                    <div class="detail">
                        <span class="sell-count">月售{{food.sellCount}}</span>
                        <span class="rating">好评率{{food.rating}}</span>
                    </div>
                    <div class="price">
                        {{food.price}}
                    </div>
                    <div class="cartcontrol-wrapper">
                        <cartcontrol @addcart="_addNum" :food="food"></cartcontrol> 
                    </div>
                    <transition name='fade'>
                        <div @click="addFirst" class="buy" v-show="!food.count||food.count===0">
                            加入购物车
                        </div>
                    </transition>
                </div>
            </div>
            <split v-show="food.info"></split>
            <div class="info" v-show="food.info">
                <h1 class='title'>商品信息</h1>
                <p class="text">{{food.info}}</p>
            </div>
            <split v-show="food.info"></split>
            <div class="ratings">
                <h1 class="title">商品评价</h1>
                <ratingselect @selectEvt="changeSelect" @onlyContentEvt="changeContent" :ratings="food.ratings" :select-type="selectType" :only-content="onlyContent" :desc="desc"></ratingselect>      
                <div class="rating-wrapper">
                    <ul v-show='food.ratings && food.ratings.length'>
                        <li v-show="needShow(rating.rateType,rating.text)" class="rating-item" :key='index' v-for="(rating,index) in food.ratings">
                            <div class="user">
                                <span class="name">{{rating.username}}</span>
                                <img :src="rating.avatar" width='24px' height="24px" alt="" class="avatar" />
                            </div>
                            <div class="time">{{rating.rateTime | formatDate}}</div>
                            <p class='text'>
                                <span :class="{'icon-thumb_up':rating.rateType === 0}"></span>
                                <span :class="{'icon-thumb_down':rating.rateType === 1}"></span>
                                <span>{{rating.text}}</span>
                            </p>
                        </li>
                    </ul>
                    <div class="no-rating" v-show="!food.ratings||!food.ratings.length">
                        暂无评价
                    </div>
                </div>
            </div>
        </div></div>
    </transition>
</template>
<script>
import BScroll from 'better-scroll';
import Vue from 'vue';
import {formatDate} from '../../date';
import cartcontrol from '../cartcontrol/cartcontrol'
import ratingselect from '../ratingselect/ratingselect'
import split from '../split/split'
const POSITIVE = 'positive';
const NEGATIVE = 'negative';
const ALL = 'all';
export default {
    data(){
        return {
            showFlag: false,
            selectType: ALL,
            onlyContent: true,
            desc:{
                all: '全部',
                positive: '推荐',
                negative: '吐槽'
            }
        }
    },
    filters:{
        formatDate(time){
            let date = new Date(time);
            return formatDate(date,'yyyy-MM-dd hh:mm');
        }
    },
    components:{
        cartcontrol,split,ratingselect
    },
    props:{
        food: {
            type: Object
        }
    },
    complete: function() {
        console.log(JSON.stringify(this.food))
    },
    computed: {
    },
    methods: {
        changeSelect(type){
            this.selectType = type;
            this.$nextTick(()=>{
                this.scroll.refresh();
            })
        },
        changeContent(type){
            this.onlyContent = type;
            this.scroll.refresh();
        },
        needShow(type,text){
                console.log(type+'=='+this.onlyContent+'=='+text)
            if(this.onlyContent && !text){
                return false;
            }
            if(this.selectType === ALL){
                return true
            }else if(this.selectType === POSITIVE){
                console.log(type)
                return type === 0
            }else if(this.selectType === NEGATIVE){
                console.log(type)
                return type === 1
            }
        },
        hide(){
            console.log(JSON.stringify(this.food))
            this.showFlag = false;
        },
        show(){
            this.showFlag = true;
            this.selectType = ALL;
            this.onlyContent = true;
            this.$nextTick(()=>{
                // new BScroll(this.$refs.scrollPart,{
                //     click: true
                // })
                if(!this.scroll){
                    this.scroll = new BScroll(this.$refs.scrollPart,{
                        click: true,
                        scrollY:true,
                    })
                }else {
                    this.scroll.refresh();
                }
            })
        },
        _addNum(target){
            console.log('获取的当前target')
            console.log(target)
            this.$emit('addcart',target)
        },
        addFirst(event){
            // if(event._constructed){
            //     return;
            // }
            this.$emit('addcart',event.target)
            Vue.set(this.food,'count',1);
        }
    },
}
</script>
<style lang="stylus">
    .food
        position: fixed
        top: 0
        bottom: 96px
        left: 0
        right: 0
        z-index: 30
        width: 100%
        background: #FFF
        transform: translate3d(0%,0,0)
        &.move-leave-active,&.move-enter-active
            transition all 0.2s linear
        &.move-enter,&.move-leave-to
            transform: translate3d(100%,0,0)
        &.move-leave,&.move-enter-to
            transform: translate3d(0,0,0)
        .image-header
            width: 100%
            position: relative
            // padding的百分比,是相对宽度计算的,这样实现宽高相同
            height: 0
            padding-top: 100%
            img
                width 100%;
                height:100%
                position absolute
                left: 0
                top: 0
            .back
                position absolute
                top: 20px
                left: 0px
                .icon-arrow_lift
                    display: block;
                    padding: 20px;
                    font-size 40px;
                    color #FFF;
        .content
            position relative
            padding: 36px;
            .title
                line-height 28px;
                margin-bottom: 16px;
                font-size: 28px;
                font-weight: 700;
                color: rgba(7,17,27,1);
            .detail
                margin-bottom 36px;
                line-height 20px;
                font-size 0
                height: 20px
                .sell-count,.rating
                    font-size 20px;
                    color: rgb(147,153,159);
                .sell-count
                    margin-right 24px;
            .price
                color red
        .cartcontrol-wrapper
            font-size .28rem
            width 100%
            text-align right
            position absolute
            right: 24px
            bottom: 24px;
        .buy
            position absolute;
            right: 36px;
            bottom: 36px;
            z-index: 99;
            height: 48px;
            line-height 48px;
            padding: 0 24px;
            box-sizing border-box;
            font-size 20px;
            border-radius 24px;
            color: #FFF;
            background : rgb(0,160,220)
            &.fade-transition
                transition all 0.5
                opacity 1
            &.fade-enter,&.fade-leave
                opacity 0
        .info
            padding: 36px;
            .title  
                line-height 28px;
                margin-bottom 12px;
                font-size 28px;
                color rgb(7,17,27)
            .text
                line-height 48px;
                padding: 0 16px;
                font-size 24px;
                color: #666
        .ratings
            padding-top: 36px
            .title
                line-height 28px;
                margin-left 36px;
                font-size 28px;
                color rgb(7,17,27)
            .rating-item
                padding: 30px;
                border-bottom 1px solid #f3f5f8;
            .no-rating
                width 100%;
                text-align center;
                font-size 24px;
                color #999;

</style>