<template>
    <div class="main">
        <div class="userInfo flex-def flex-zBetween flex-cCenter">
            <img :src="userlogo" class="userlogo" alt="">
            <div class='userMain flex-item'>
                <h3 v-text="nickname"></h3>
                <p v-if="username">微我号: {{username}}</p>
            </div>
            <img class="iconEWM" src="../../image/icon_my/icon_er.png" />
            <span class="iconMore"></span>
        </div>
        <div class="navBar flex-def">
            <router-link v-for="(key,index) in navList" :key="index" :class="['navList'+index,'navList','flex-item']" :to="key.url">
                <p v-text="key.name"></p>
            </router-link>
        </div>
        <div class="moreList">
            <router-link v-for="(key,index) in lineList" :key="index" :class="['moreList'+index,'flex-cCenter iconMore lineList flex-def']" :to="key.url">
                <img :src="key.img" alt="">
                <p v-text="key.name"></p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username: '',
            nickname: '',
            userlogo: localStorage.getItem('userlogo'),
            navList:[
                {
                    name: '供应',
                    img: '/src/image/icon_my/icon_nav1.png',
                    url: 'supply'
                },{
                    name: '需求',
                    img: '../../image/icon_my/icon_nav2.png',
                    url: 'ask'
                },{
                    name:'圈子',
                    img: '../../image/icon_my/icon_nav3.png',
                    url: 'cricle'
                },{
                    name: '广场',
                    img: '../../image/icon_my/icon_nav4.png',
                    url: 'gc'
                },{
                    name: '朋友圈',
                    img: '../../image/icon_my/icon_base5.png',
                    url: 'friend'
                }
            ],
            lineList:[
                {
                    name: '图片',
                    img: require("../../image/icon_my/icon_list1.png"),
                    url: 'user_img'
                },
                {
                    name: '收藏',
                    img: require("../../image/icon_my/icon_list2.png"),
                    url: 'user_img'
                },
                {
                    name: '评论',
                    img: require("../../image/icon_my/icon_list3.png"),
                    url: 'user_img'
                },{
                    name: '赞',
                    img: require("../../image/icon_my/icon_list4.png"),
                    url: 'user_img'
                },{
                    name: '公司',
                    img: require("../../image/icon_my/icon_list5.png"),
                    url: 'user_img'
                },{
                    name: '设置',
                    img: require("../../image/icon_my/icon_list6.png"),
                    url: 'user_img'
                }
            ]
        }
    },created() {
        this.username = localStorage.getItem('username');
        this.nickname = localStorage.getItem('nickname');
    },
}
</script>
<style scoped>
.userInfo{
    padding: .48rem .3rem;
    box-sizing: border-box;
    border-bottom: 1px solid #F3F5F8;
}
    .userlogo{
        width: 156px;
        border-radius: 156px;
        margin-right: 16px;
    }
    .userMain h3{
        font-size: 40px;
        line-height: 56px;
        font-weight: 600;
        margin-bottom: 14px;
    }
    .userMain p{
        color: #666;
        font-size: 28px;
        line-height: 40px;
    }
    .iconEWM{
        width: 38px;
        height: 38px;
        padding-right: 60px;
    }
    .navBar{
        padding-bottom: 20px;
        border-bottom: 20px solid #F3F5F8;
    }
    .navList{
        padding-top: 108px;
        text-align: center;
        font-size: 28px;
        line-height: 40px;
        color: #333;
    }
    .navList0{
        background: url('../../image/icon_my/icon_nav1.png') no-repeat;
        background-size: 70px auto;
        background-position: center 28px;
    }
    .navList1{
        background: url('../../image/icon_my/icon_nav2.png') no-repeat;
        background-size: 68px auto;
        background-position: center 34px;
    }
    .navList2{
        background: url('../../image/icon_my/icon_nav3.png') no-repeat;
        background-size: 62px auto;
        background-position: center 28px;
    }
    .navList3{
        background: url('../../image/icon_my/icon_nav4.png') no-repeat;
        background-size: 76px auto;
        background-position: center 32px;
    }
    .navList4{
        background: url('../../image/icon_my/icon_nav5.png') no-repeat;
        background-size: 60px auto;
        background-position: center 28px;
    }
    .lineList{
        width: 100%;
        height: 120px;
        padding-left: 30px;
        box-sizing: border-box;
        font-size: 32px;
        border-bottom: 1px solid #F3F5F8;
        color: #333;
    }
    .lineList img{
        height: 44px;
        margin-right: 30px;
    }
    .moreList3{
        border-bottom: 20px solid #F3F5F8;
    }
</style>