<template>
    <div class="ratingselect">
        <div class='rating-type'>
            <span class="block" @click="changeTab(index)" :class="[index,{'active':selectType === index}]" v-for="(list,index) in desc" :key="index">
                {{list}}
                <span class="count">{{positives.length}}</span>
            </span>
        </div>
        <div class="switch" :class="{'on':onlyContent}" @click="toggleContent">
            <span class="icon-check_circle">选</span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>
<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
    data(){
        return {

        }
    },
    props:{
        ratings: {
            type: Array,
            default(){
                return []
            }
        },
        selectType: {
            type: String,
            default: ALL
        },
        onlyContent:{
            type: Boolean,
            default: false,
        },
        desc: {
            type: Object,
            default(){
                return {
                    all: '全部',
                    positive: '满意',
                    nagative: '不满意'
                }
            }
        },
    },
    computed: {
        positives(type){
            return this.ratings.filter((rating)=>{
                return rating.rateType === POSITIVE;
            })
        },
        nagatives(){
            console.log(this.ratings)
            return this.ratings.filter((rating)=>{
                return rating.rateType === NEGATIVE;
            })
        }
    },
    methods: {
        changeTab(key){
            this.selectType = key;
            this.$emit('selectEvt',key)
        },
        toggleContent(event){
            this.onlyContent = !this.onlyContent;
            this.$emit('onlyContentEvt',this.onlyContent)
        }
    },
}
</script>
<style lang="stylus">
    .ratingselect
        .rating-type
            font-size 28px;  
            padding: 36px;
            margin: 0 32px;
            border-bottom 1px solid rgba(7,17,27,0.1)
            font-size 0;
            .block
                display: inline-block
                padding: 16px 24px;
                border-radius 2px;
                margin-right: 16px;
                margin-bottom: 4px;
                font-size: 24px
                color rgb(77,85,93)              
                line-height 32px;
                &.active
                    color: #FFF;
                .count
                    font-size 16px;
                    margin-left: 4px;  
                &.positive,&.all
                    background: rgba(0,160,220,0.2)
                    &.active
                        background: rgba(0,160,220,1)
                &.negative
                    background rgba(77,85,93,0.2)
                    &.active
                        background rgba(77,85,93,1)
        .switch
            padding: 24px 36px;
            line-height 48px;
            border-bottom 1px solid rgba(7,17,27,0.1);
            color: rgb(147,153,159)
            font-size 0
            &.on
                .icon-check_circle
                    color: green
            .icon-check_circle
                margin-right 8px
                font-size 48px;
            .text
                font-size 24px;
                display: inline-block
                vertical-align top

</style>