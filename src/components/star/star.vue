<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" track-by="$index">

        </span>
    </div>
</template>
<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';

    export default {
        props:{
            size:[Number],
            score:[Number]
        },
        data(){
            return {
                
            }
        },computed:{
            starType() {
                return "star-"+this.size;
            },
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score * 2)/2;
                let hasDecimal = score % 1 !==0;
                let integer = Math.floor(score);
                console.log(score)
                console.log(hasDecimal)
                console.log(integer)
                for(let i=0;i<integer;i++){
                    result.push(CLS_ON);
                }
                if(hasDecimal){
                    result.push(CLS_HALF);
                }
                while (result.length<LENGTH) {
                    result.push(CLS_OFF)
                }
                console.log(result)
                return result;
            }
        }
    }
</script>
<style scoped>
.star-48 .star-item{
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
}
.star-36 .star-item{
    width: 15px;
    height: 15px;
    margin-right: 22px;
    background-size: 15px 15px;
}
.star-24 .star-item{
    width: 10px;
    height: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
}
.star .on{
    background-image: url('star24_on@3x.png');

}
.star .half{
    background-image: url('star24_half@3x.png')
}
.star .off{
    background-image: url('star24_off@3x.png')
}
.star .star-item{
    display: inline-block;
    background-repeat: no-repeat;
}
</style>
