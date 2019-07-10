<template>
    <div class="chat">
        <div class="main" @click="submitFun()">
            聊天页面聊天页面聊天页面聊天页面
        </div>
    </div>
</template>
<script>
export default {
    name: 'chat',
    data(){
        return {

        }
    },
    beforeCreate() {
        
    },created() {
        // 创建
    },methods: {
        submitFun(){
            alert(1);
        }
    }
}
</script>
<style scoped>
.main{
    
}
</style>
