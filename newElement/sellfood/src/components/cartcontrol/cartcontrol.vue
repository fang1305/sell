<template>
    <div class='cartcontrol'>
        <div class="cart-add fl icon-add_circle" @click="addCount($event)">+</div>
        <div v-show="food.count>0" class="fl cart-count">{{food.count}}</div>
        <transition name='move'>
            <div v-show='food.count>0' class="fl cart-decrease" @click="decreaseCart()">
                <span class="inner">减</span>
            </div>
        </transition>
    </div>
</template>
<script>
import vue from 'vue';

export default {
    props: {
        food: {
            type: Object
        }
    },
    created() {
    },
    methods: {
        addCount(event){
            console.log('-------------');
            if(!this.food.count){
                vue.set(this.food,'count', 1)
            }else{
                this.food.count++;
            }
            // 方法传值
            this.$emit('addcart',event.target)
            // this.$dispathch('cart.add',event.target)
        },
        decreaseCart(){
            this.food.count--;
        }
    },
};
</script>
<style lang="stylus">
.cartcontrol
    font-size: 30px
    width: 50%;
    text-align: right;
    line-height 40px;
    height: 80px;
    .fl
        float: right
        padding: 20px;
    .cart-decrease
        transition: all 0.4s linear;
        .inner
            width 40px;
            font-size: 40px;
            text-align: center
            border-radius 40px;
            display inline-block;
            border: 2px solid #3699FF;
            transition: all 0.4s linear;
        &.move-transition
            opacity: 1
            transform: translate3d(0,0,0);
            .inner
                transform: rotate(0);
                color: red
        &.move-enter,&.move-leave
            opacity: 0;
            transform: translate3d(48px,0,0)
            .inner
                transform: rotate(180deg);
                color: blue
    
</style>