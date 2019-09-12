<template>
    <div class='shopcart'>
        <div class="content">
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
    </div>
</template>
<script>
export default {
    data(){
        return {
            balls: [{
                show: false
            },{
                show: false
            },{
                show: false
            },{
                show: false
            },{
                show: false
            },{
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
    computed: {
        totalCount(){
            let count = 10;
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
                        console.log(el)
                        let x = rect.left-32;
                        let y = -(window.innerHeight - rect.top -22);
                        el.style.display = '';
                        // el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                        el.style.transform = `translate3d(0,${y}px,0)`;
                        let inner = el.firstElementChild;
                        console.log(inner)
                        inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                        inner.style.background = 'red';
                        inner.style.transform = `translate3d(${x}px,0,0)`;
                    }
                }
            },
            enter(el){
                /* 触发浏览器重复 */
                let rf = el.offsetHeight;
                this.$nextTick(()=>{
                    el.style.webkitTransform = 'translate3d(0,0,0)';
                    el.style.transform = 'translate3d(0,0,0)';
                        let inner = el.firstElementChild;
                        console.log(inner)
                    inner.style.webkitTransform = 'translate3d(0,0,0)';
                    inner.style.transform = 'translate3d(0,0,0)';
                    inner.style.background = 'red';
                })
            },
            afterEnter(el){
                let ball = this.dropBall.shift();
                if(ball){
                    ball.show = true;
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
        .ball-container
            .ball
                position: fixed
                left: 32px
                bottom: 22px
                z-index: 200
                width 16px
                height: 15px
                transition: all 0.4s
            .inner
                width 16px
                height: 15px
                border-radius 50%;
                background #3699FF
                transition: all 0.4s
</style>