<template>
    <div  class="main">
        <div class="itemBox" @click="getDetail(item.circle_id)" v-for="(item,index) in itemData" >
            <div class="flex-def flex-cCenter">
                <img class="circleImg" :src="item.image_url" />
                <span v-text="item.title" class="circleTitle"></span>
            </div>
            <!-- <p v-text="getLength(item.circle_topic_info.image_json)"></p> -->
            <div v-if="getLength(item.circle_topic_info.image_json).length>0">
                <p>{{item.circle_topic_info.content}}{{JSON.parse(item.circle_topic_info.image_json).length}}</p>
                <div v-for="(items,indexs) in JSON.parse(item.circle_topic_info.image_json)">
                    <img v-if="getLength(item.circle_topic_info.image_json).length == 1" :src="items" class="active detailImg"  />
                    <img v-else :src="items" :class='[indexs%3 == 2?"more":"","detailImg"]'>
                </div>
            </div>
            <div v-else>
                <p>{{item.circle_topic_info.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'find0',
    data(){
        return {
            msg: '你好啊',
            itemData: [{
                das: 's'
            }]
        }
    },computed: {
        
    },created() {
        let self = this;
        this.$axios({
            method: 'POST',
            withCredentials: false,
            url: '/api/circle/index2',
            data: {
                token: localStorage.getItem('token'),
                type: 1
            }
        })
        .then(function(res){
            if (res.data.code === 200) {
                console.log(JSON.stringify(res.data.data, null, 4))
                self.itemData = res.data.data.list;
                self.message({
                    message: '成功',
                    type: 'success'
                })
            } else {
                self.message.error(res.data.msg);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    },mounted() {
        
    },methods: {
        requireData(){
            console.log('价值啊数据')
        },
        getLength(data){
            if(data){
                return JSON.parse(data)
            }else{
                return [];
            }
        },
        getDetail(id) {
            console.log(id)
        },
        sendMsg(){
            this.$emit('sendMsg',this.msg)
        }
    },
}
</script>
<style scope>
    .main p{
        line-height: 88px;
        font-size: 32px;
    }
    .itemBox{
        padding: 30px;
        clear: both;
    }
    .itemBox img.circleImg{
        width: 80px;
        height: 80px;
        border-radius: 80px;
    }
    .itemBox img.detailImg{
        width: 220px;
        height: 220px;
        float: left;
        margin-right: 14px;
        margin-top: 14px;
    }
    .itemBox img.detailImg.more{
        margin-right: 0px;
    }
    .itemBox img.detailImg.active{
        margin-right: 0;
        width: 360px;
        height: 360px;
    }

    .itemBox .circleTitle{
        font-size: 32px;
        margin-left: 16px;
        font-weight: bold;
    }
</style>