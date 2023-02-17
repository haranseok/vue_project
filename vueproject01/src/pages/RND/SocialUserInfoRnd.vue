<template>
    <div>
        {{ token }}
        <button @click="getNaver">정보</button>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    data(){
        return {
            token:''
        }
    },
    created(){
       this.token = localStorage.getItem('access_token')
    },
    methods: {
        async getNaver(){
            const res = await Axios.post('https://nid.naver.com/oauth2.0/authorize',{headers:{access_token:this.token}})   
            console.log(res)     
        }
    }
}
</script>

<style lang="scss" scoped>

</style>