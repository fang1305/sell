<template>
    <div class="ratingselect">
        <div class='rating-type'>
            <span v-for="(list,index) in desc" :key="index">{{list}}</span>
        </div>
        <div class="switch">
            <span class="icon-check_circle">选</span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>
<script>
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
            type: Number,
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
    }
}
</script>
<style lang="stylus">
    
</style>