<template>
    <div>
        {{seller.score}}
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: {
        seller: {
            type: Object
        }
    },
    created() {
        this.$http.get('/seller').then((response) => {
            console.log(response)            
            response = response.body;
            if(response.errno === ERR_OK){
                this.seller = response.data;
            }
        });
    },
}
</script>