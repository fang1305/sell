<template>
    <div class='shopcart'>
        <div class="content" @click="toggleList">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                    </div>
                </div>
                <div class="price">{{totalCount}}元</div>
                <div class="desc">需要配送费{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay">
                    {{minPrice}}元起送
                </div>
            </div>
        </div>
        <div class="ball-container">
            <transition-group name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                <div class='ball' v-for="(ball,index) in balls" :key="index"  v-show="ball.show" >
                    <div class="inner inner-hook" ref='innertest' v-bind:key="-1"></div>
                </div>
            </transition-group>
        </div>
        <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
            <div class="list-header">
                <h1 class="title">购物车</h1>
                <span class="empty">清空</span>
            </div>
            <ul class="list-content">
                    <li class="foods" v-for="(food,index) in foods" :key="index">
                        <span class="name">{{food.name}}</span>
                        <div class="price">
                            <span>价格:{{food.price*food.count}}</span>
                        </div>
                        <div class="cartcontrol-wrapper">
                            <v-cartcontrol :food="food"></v-cartcontrol>
                        </div>
                    </li>
            </ul>
        </div>
        </transition>
    </div>
</template>
<script>
import vCartcontrol from '../cartcontrol/cartcontrol'
export default {
    data(){
        return {
            fold: true,
            balls: [{
                show: false
            }],
            dropBall: []
        }
    },props:{
        deliveryPrice: {
            type: Number,
            default(){
                return 20
            }
        },
        ball:{
            type: Object
        },
        foods:{
            type: Array
        },
        minPrice: {
            type: Number,
            default(){
                return 0
            }
        }
    },
    components: {
        vCartcontrol
    },
    computed: {
        listShow(){
            if(!this.totalCount){
                this.fold = true;
                return false
            }
            let show = !this.fold;
            return show
        },
        totalCount(){
            let count = 0;
            console.log(this.foods)
            this.foods.forEach(food =>{
                count += parseFloat(food.price)*food.count
            })
            return count
        }
    },
    mounted() {
        this.$nextTick(() => {
            // console.log(this.$refs.innertest.style.height)
        })
    },
    methods: {
        toggleList(){
            if(!this.totalCount){
                return;
            }
            this.fold = !this.fold;
        },
        dropFun(el){
            this.dropBall = []
            for(let i=0;i<this.balls.length;i++){
                let ball = this.balls[i];
                if(!ball.show){
                    ball.show = true
                    ball.el = el;
                    this.dropBall.push(ball);
                    return;
                }
            }
        },beforeEnter(el){
                let count = this.balls.length;
                while(count--){
                    let ball = this.balls[count];
                    if(ball.show){
                        // 获取元素视图定位
                        let rect = ball.el.getBoundingClientRect();
                        let x = rect.left-32;
                        let y = -(window.innerHeight - rect.top -22);
                        console.log(window.innerHeight+'=='+rect.top+'==='+x+'==='+y)
                        el.style.display = '';
                        el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                        el.style.transform = `translate3d(0,${y}px,0)`;
                        console.log(el.style.transform)
                        let inner = el.firstElementChild;
                        inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                        inner.style.background = 'red';
                        inner.style.transform = `translate3d(${x}px,0,0)`;
                    }
                }
            },
            enter(el){
                /* 触发浏览器重复 */
                let rf = el.offsetHeight;
                // this.$nextTick(()=>{
                    el.style.webkitTransform = 'translate3d(0,0,0)';
                    el.style.transform = 'translate3d(0,0,0)';
                    let inner = el.firstElementChild;
                    console.log(inner)
                    inner.style.webkitTransform = 'translate3d(0,0,0)';
                    inner.style.transform = 'translate3d(0,0,0)';
                    inner.style.background = 'red';
                // })
            },
            afterEnter(el){
                let ball = this.dropBall.shift();
                if(ball){
                    ball.show = false;
                    el.style.display = '';
                }
            }
    },
    transitions:{
        drop: {
            
        }
    }
}
</script>
<style lang="stylus">
    .shopcart
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 999
        .shopcart-list
            position absolute
            z-index: -1
            background #FFF
            left: 0
            top: 0
            right: 0
            width: 100%;
            transform: translateY(-100%)
            &.fold-enter, &.fold-leave-to 
                transform: translateY(0)
            &.fold-leave, &.fold-enter-to 
                transform: translateY(-100%)
            &.fold-enter-active, &.fold-leave-active 
                transition: all .2s
            .list-header
                height: 80px
                line-height 80px
                padding: 0 36px;
                bakcground: #f3f5f7
                border-bottom: 1px solid rgba(7,17,27,.1)
                .title
                    float: left;
                    font-size 28px
                    color: #333;
                .empty
                    font-size 24px;
                    float:right
                    color: rgb(0,160,122)
                .list-content
                    padding: 0 36px;
                    max-height 436px
        .ball-container
            .ball
                position: fixed
                left: 32px
                bottom: 22px
                z-index: 999
                width 16px
                height: 15px
                transition: all 0.4s cubic-bezier(.49,-0.29,0.75,0.41)
            .inner
                width 16px
                height: 15px
                border-radius 50%;
                background #3699FF
                transition: all 0.4s
</style>