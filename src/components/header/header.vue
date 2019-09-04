<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{ seller.name }}</span>
                </div>
                <div class="description">
                    {{ seller.description }} / {{ seller.deliveryTime }}分钟送达
                </div>
                <div v-if="seller.supports" class="support" @click="showDetail">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{ seller.supports[0].description }}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports">
                <span class="count">{{ seller.supports.length }}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bullentin-wrapper">
            <span class="bullentin-title"></span>
            <span class="bullentin-text">{{ seller.bulletin }}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>

        <!-- 弹出层 -->
        <transition name="fade">
        <div v-show="detailShow" class="detail">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{ seller.name }}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠价格</div>
                        <div class="line"></div>
                    </div>
                    <!-- <div class="lineTitle">
                        <hr><span>优惠信息</span><hr>
                    </div> -->
                    <ul v-if="seller.supports" class="supports">
                        <li class="support-item" v-for="item in seller.supports">
                            <span class="icon" :class="classMap[item.type]"></span> 
                            <span class="text">{{ item.description }}</span> 
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin">
                        <p class="content">{{ seller.bulletin }}</p>
                    </div>
                </div>
            </div>
            <div class="detail-close" @click="detailShow = false">
                X
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
   import star from "../../components/star/star.vue"
    export default{
        name : 'header',
        components:{
            star
        },
        data() {
            return {
                detailShow: false
            }
        },
        props:{
            seller:[Object]
        },created() {
            this.classMap = ['decrease','discount','special','invoice','guarantee']
        },methods: {
            showDetail(){
                this.detailShow = true;
            }
        }
    }
</script>
<style scoped>
.header{
    position: relative;
    color:#fff;
    background: rgba(0,0,0,.2);;
}
.content-wrapper{
    padding: 20px 40px;
    position: relative;
}
.content-wrapper .avatar{
    display: inline-block;
}
.content-wrapper .content{
    display: inline-block;
    margin-left: 8px;
}
.content-wrapper .content .title{
    margin: 2px 0 8px 0;
}
.content-wrapper .content .title .brand{
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 18px;
    background-image: url("../../../resource/img/brand@2x.png");
    background-repeat: no-repeat;
    background-size: 30px 18px;
}
.content-wrapper .content .description{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}
.content-wrapper .content .support .icon{
    display: inline-block;
    vertical-align: bottom;
    width: 12px;
    height: 12px;
    /* margin-right: 4px; */
    background-size: 12px 12px;
    background-repeat: no-repeat;
}
.content-wrapper .content .support .icon.decrease{
    background-image: url('../../../resource/img/decrease_1@2x.png');
}
.content-wrapper .content .support .icon.discount{
    background-image: url('../../../resource/img/discount_1@2x.png');
}
.content-wrapper .content .support .icon.guarantee{
    background-image: url('../../../resource/img/guarantee_1@2x.png');
}
.content-wrapper .content .support .icon.invoice{
    background-image: url('../../../resource/img/invoice_1@2x.png');
}
.content-wrapper .content .support .icon.special{
    background-image: url('../../../resource/img/special_1@2x.png');
}
.content-wrapper .content .support .text{
    line-height: 12px;
    font-size: 12px;
}
.support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0,0,0,.2);
    text-align: center;
}
.support-count .count{
    font-size: 10px;
    vertical-align: top;
}  
.support-count i.icon-keyboard_arrow_right{
    font-size: 10px;
}
.bullentin-wrapper{
    line-height: 28px;
    height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background:rgba(0,0,0,.3);
}
.bullentin-wrapper .bullentin-title{
    display: inline-block;
    width: 22px;
    height: 12px;
    background-image: url('../../../resource/img/bulletin@2x.png');
    background-size: 22px 12px;
    background-repeat: no-repeat;
    vertical-align: top;
    margin-top: 7px;
}
.bullentin-wrapper .bullentin-text{
    font-size: 10px;
    margin: 0 4px;
    vertical-align: top;
}
.background{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    filter: blur(10px)
}
.header .detail{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    /* transition: all .5s; */
    background: rgba(7,17,27,.8);
    top: 0;
}
.header .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.header .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* .header .detail.fade-transition{
    opacity: 1;
    background: rgba(7,17,27,.8)
}
.header .detail.fade-enter,.header .detail.fade-leave{
    opacity: 0;
    background: rgba(7,17,27,0)
} */
.detail .detail-wrapper{
    min-height: 100%;
    width: 100%;
}
.detail .detail-wrapper .detail-main{
    margin-top: 64px;
    padding-bottom: 64px;
}
.detail .detail-wrapper .detail-main .name{
    line-height: 16px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
}
.detail .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0;
    clear: both;
    font-size: 32px;
    text-align: center;
    color:#fff;
    line-height:32px;
}
.star-wrapper{
    text-align: center;
    padding: 2px 0;
    margin-top: 18px;
}
.lineTitle{
    text-align: center;
    display: flex;
    padding: 0 20px;
    margin-top: 20px;
}
.lineTitle hr{
    flex: 1;
}
.lineTitle span{
    color: #fff;
    padding: 0 12px;
}

.detail-main .title{
    width: 80%;
    margin: 30px auto 24px;
    display: flex;
}
.detail-main .title .line{
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255,255,255,.2);
}
.detail-main .title .text{
    padding: 0 12px;
    font-size: 14px;
    font-weight: 600;

}
.supports{
    width: 80%;
    margin: 0 auto;
}
.supports li{
    list-style: none;
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
}
.supports li:last-child{
    margin-bottom: 0;
}
.supports li .text{
    font-size: 12px;
    line-height: 16px;
    padding-left: 10px;
}
.supports .support-item .icon{
    background-repeat: no-repeat;
    background-size: 16px 16px; 
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: top;
}
.supports .decrease{
    background-image: url("decrease_2@3x.png");
}
.supports .discount{
    background-image: url("discount_2@3x.png");
}
.supports .special{
    background-image: url("special_2@3x.png");
}
.supports .invoice{
    background-image: url("invoice_2@3x.png");
}
.supports .guarantee{
    background-image: url("guarantee_2@3x.png");
}
.bulletin {
    width: 80%;
    margin: 0 auto;
    padding: 0 12px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 26px;
}


</style>
