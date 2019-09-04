<template>
    <div>
        ratings
    </div>
</template>
<script>
/* eslint-disable */
const userCom = {template: "<div>dsbh</div>"};
const routes = new Router({
    routes: [
        {
            path: 'name',
            name: 'user',
            component: userCom,
            children: [
                {path: '',component: userCom}
            ]
        }
    ]
})
export default {
    
}
</script>