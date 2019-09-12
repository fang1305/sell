<template>
    <div class="food" v-show="showFlag">
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            showFlag: false
        }
    },
    props:{
        food: {
            type: Object
        }
    },
    methods: {
        show(){
            this.showFlag = true;
        }
    },
}
</script>
<style lang="stylus">
    .food
        position: fixed
        top: 0
        bottom: 96px
        left: 0
        right: 0
        z-index: 30
        width: 100%
        background: #FFF

</style>