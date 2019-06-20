<template>
    <div class="main flex-def">
        <ul class="partType">
            <li v-for="(item,index) in typeList" @click="toggleFun(item,index)" :key='index' :class="{'active':item.active}" v-text='item.name'></li>
        </ul>
        <div class="partList flex-list">

        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    export default{
        name:'goods',
        data() {
            return{
            typeList: [
                {
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                },{
                    name: '主要'
                }
            ]
            }
        },
        methods: {
            toggleFun(item, index) {
    　　　　　　this.$nextTick(function () {
                this.typeList.forEach(function (item) {
    　　　　　　　　　　Vue.set(item,'active',false);
    　　　　　　　　});
    　　　　　　    Vue.set(item,'active',true);
    　　　　　　});
    　　　　}
        }
    }    
</script>
<style scope>
@import "../../../static/css/reset.css";
.main{
    width: 100%;
    background: #FFF;
}
.partType li{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
.partType li.active{
    color: #3699FF;
}
.partType,.partList{
    width: 30%;
    min-width: 10px;
    height: 100%;
    overflow-y: scroll;
    background: #F3F5F8;
}
.partList{
    background: #FFF;
}
</style>
