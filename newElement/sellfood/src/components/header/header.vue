<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="">
            </div>
            <div class="content" @click="showDetail">
                <div class="title">
                    <span class='brand'></span>
                    <span class='name'>{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="supports">
                    <span class='icon'></span>
                    <span class='text'>{{seller.supports[0].description}}</span>
                </div>
            </div>
        </div>
        <div class="bulletin-wrapper"></div>
        <div class="background">
            <img :src="seller.avatar" width="100%" alt="">
        </div>
        <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <v-star :size="48" :score="seller.score"></v-star>
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close"></i>
            </div>
        </div>
    </div>
</template>
<script type='tex/ecmascript-6'>
/* eslint-disable */
import vStar from '../star/star'
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data(){
        return {
            detailShow: false
        }
    },
    created() {
        console.log(this.seller)
    },
    components: {
        vStar
    },
    methods: {
        showDetail(){
            this.detailShow = true;
        }
    },
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>
.header
    position relative
    color: #FFF
    overflow hidden
    background rgba(7,17,27,.5)
    .content-wrapper
        padding: 48px 24px 36px 48px
        width: 100%
        display: flex
        color: #ffffff
        .content
            flex: 1
            text-align: left
            font-size: 28px
            -webkit-box-flex: 1
            margin-left 32px
            .supports
                line-height 40px
                font-size 36px
                margin-top 20px
    .background
        position: absolute
        top: 0
        left 0
        z-index -1
        right 0
        bottom 0
        filter: blur(10px) 
    .detail
        position: fixed
        z-index: 100
        top: 0
        left: 0
        background rgba(7,17,27,.7)
        width: 100%
        height: 100%
        overflow: auto
        .detail-wrapper
            min-height 100%
            .detail-main
                margin-top 128px
                padding-bottom 128px
            .detail-close
                position relative
                width 64px
                height 64px
                margin: -128px auto
                clear both
                font-size 64px
</style>