<template>
    <div class="header" v-text="seller.item">
        通讯录s
    </div>
</template>
<script>
export default {
    name: 'Header',
    data(){
        return {
            
        }
    },
    props:{
        seller: Object
    }
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 88px;
        line-height: 88px;
        text-align: center;
        background: #FFF;
        bottom: 1px solid #f3f5f8;
    }
</style>
