<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul>
                <li v-for="(item,index) in goods" class="menu-item" :key='index'>
                    <span v-if="item.type>0" class='icon'>{{item.name}}</span>
                    <span v-else class="text">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper">
            <ul>
                <li class="food-list" v-for="(item,index) in goods" :key='index'>
                    <h1 class='title'>{{item.name}}</h1>
                    <ul>
                       <li  @click="selectFood(food,$event)" v-for="(food,indexs) in item.foods" :key="indexs" class="food-item">
                            <div class="icon">
                                <img :src="food.icon" />    
                            </div>   
                            <div class="content">
                                <h2 class='name'>{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span>月售{{food.sellCount}}</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                            </div>
                            <div class="price">
                                <span>{{food.price}}</span>
                                <span v-show="food.oldPrice">{{food.oldPrice}}</span>
                            </div>
                            <div class="cartcontrol-wrapp">
                                <v-cartcontrol @addcart="_drop" :food="food"></v-cartcontrol>
                            </div>
                        </li> 
                    </ul>
                </li>
            </ul>
        </div>
    <v-shopcart ref="shopcart" :foods="selectFoods"></v-shopcart>
    <v-food :food="selectedFood" ref="vfood" @addcart="_drop"></v-food>
    </div>
</template>
<script  type="text/ecmascript-6">
/* eslint-disable */
const ERR_OK = 0;
import vShopcart from '../shopcart/shopcart'
import vFood from '../food/food'
import vCartcontrol from '../cartcontrol/cartcontrol'
export default {
    data(){
        return {
            goods: [],
            classMap: '',
            selectedFood: {},
            ballObj: {}
        }
    },
    
    components:{
        vShopcart,vFood,vCartcontrol
    },
    props: {
        seller: {
            type: Object
        }
    },
    computed: {
        selectFoods(){
            let foods = [];
            this.goods.forEach(good => {
                good.foods.forEach(food =>{
                    if(food.count){
                        console.log(food)
                        foods.push(food);
                    }
                })
            })
            return foods;
        }
    },
    events:{
        'cart.add'(target){
            // 父组件获取点击加号传来的组件
            console.log('哼哼哈嘿')
            // this._drop(target);
        }
    },   
    methods: {
        // 获取添加
        _drop(target){
            // 优化体验,异步执行下落动画
            // this.$nextTick(()=>{
                this.$refs.shopcart.dropFun(target)
            // })
        },
        selectFood(food,event){
            // if (!event._constructed) {
            //     return;
            // }
            console.log(this.seller)
            this.selectedFood = food;
            this.$refs.vfood.show();
        },
        selectMenu(index,event){
            if(!event._constructed){
                return;
            }
            let foodList  = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
            let el = foodList[index];
        },
        _initScroll(){
            // this.meunScroll = new BScroll(this.$els.menuWrapper,{
            //     click: true
            // });
            // this.foodsScroll = new BScroll(this.$els.foodsWrapper,{
            //     click: true,
            //     probeType: 3
            // })
        }
    },
    created() {
        this.$http.get('/goods').then((response) => {
            console.log(response)            
            response = response.body;
            if(response.errno === ERR_OK){
                this.goods = response.data;
            }
        });
    },
}
</script>
<style lang="stylus" rel='stylesheet/stylus'>
    .goods
        text-align left 
        display flex
        position absolute
        width 100%
        top: 300px
        bottom: 92px
        overflow hidden
        .menu-wrapper
            flex: 0 0 160px
            width 160px
            padding-left 24px
            background #f3f5f7
            box-sizing border-box
            .menu-item
                display: table
                width 112px
                box-sizing border-box
                height: 108px
                line-height 28px
                vertical-align middle
                .text,.icon
                    text-align left
                    vertical-align middle;
                    display table-cell
                    width 112px
                    border-bottom 1px solid rgba(7,17,27,.1)
        .foods-wrapper
            flex: 1

</style>