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
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },props:{
        deliveryPrice: {
            type: Number,
            default(){
                return 0
            }
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
            return 10
        }
    },
}
</script>
<style lang="stylus">
    
</style>