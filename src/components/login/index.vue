<template>
    <div class="main">
        <h3>微我,欢迎<span v-text="username"></span></h3>
        <div class="flex-def listLine">
            <span>微我号</span>
            <input class="flex-list" type="text" placeholder="请输入" v-model="username">
        </div>
        <div class="flex-def listLine">
            <span>密码</span>
            <input class="flex-list" type="password" placeholder="请输入" v-model="password">
        </div>
        <div class="submitBtn" @click="loginFun()" :class="username.length>0?'active':''">登录</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username: '',
            password: ''
        }
    },methods: {
        loginFun(){
            let self = this;
            this.$axios({
                method: 'POST',
                withCredentials: false,
                url: '/api/login/doLogin',
                data: {
                    mobile: self.username,
                    password: self.password
                }
            })
            .then(function(res){
                    console.log(JSON.stringify(res, null, 4))
                if (res.data.code === 200) {
                    // self.message({
                    //     message: '成功',
                    //     type: 'success'
                    // })
                    localStorage.setItem('token',res.data.data.token);
                    self.$router.push('/')
                } else {
                }
            })
            .catch(function(err){
                console.log(err);
            });
            console.log(this.$data.username);
        }
    },
}
</script>
<style scoped>
.main{
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
}
h3{
    width: 100%;
    font-size: 44px;
    margin: 150px auto 55px;
    display: block;
    line-height: 88px;
    text-align: center;
}
.listLine{
    padding-top: 20px;
    font-size: 30px;
    line-height: 78px;
    border-bottom: 1px solid #DDD;
}
.listLine input{
    font-size: 30px;
}
.listLine span{
    font-weight: 400;
    width: 160px;
    border-right: 1px solid #DDD;
    font-size: 32px;
    color: #333;
    margin-right: 40px;
}
.submitBtn{
    text-align: center;
    font-size: 36px;
    color: #FFF;
    width: 680px;
    margin: 55px auto 0;
    background: #83bbfa;
    line-height: 86px;
    border-radius: 8px;
}
.submitBtn.active{
    background: #3699FF;
}
</style>
