<template>
    <div class="star" :class="starType">
        <span v-for='(item,index) in itemClass' :key="index" track-by="$index" :class="[item,'star-item']"></span>
    </div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
export default {
    data(){
        return {
        }
    },
    props: {
        size: {
            type: Number
        },
        score: {
            type: Number
        }
    },
    computed: {
        // 计算属性
        starType() {
            return 'star-'+this.size
        },
        itemClass() {
            let result = [];
            // 向下取整
            let score = Math.floor(this.score*2)/2;
            let hasDecimal = score%1 !== 0;
            let integer = Math.floor(score);
            for(let i=0;i<integer;i++){
                result.push(CLS_ON)
            }
            if(hasDecimal){
                result.push(CLS_HALF)
            }
            if(result.length<LENGTH){
                result.push(CLS_OFF)
            }
            return result;
        }
    },
}
</script>
<style lang="stylus">
.star
    font-size 0
    .star-item
        display: inline-block
        background-repeat: no-repeat
    &.star-48
        .star-item
            width: 40px
            height: 40px
            margin-right 44px
            background-size 40px 40px
            &:last-child
                margin-right 0
            &.on
                background-image url('./star36_on@3x.png')
            &.off
                background-image url('./star36_off@3x.png')
            &.half
                background-image url('./star36_half@3x.png')
</style>