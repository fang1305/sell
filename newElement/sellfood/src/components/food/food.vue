<template>
    <transition name='move'>
        <div class="food" v-show="showFlag">
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
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return {
            showFlag: false
        }
    },
    props:{
        food: {
            type: Object
        }
    },
    computed: {
    },
    methods: {
        hide(){
            this.showFlag = false;
        },
        show(){
            this.showFlag = true;
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
</style>