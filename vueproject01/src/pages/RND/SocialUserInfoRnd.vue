<template>
    <div>
        naver userInfo: {{ user_id }}
        <v-btn @click="getLoginToken">인증</v-btn>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    data(){
        return {
            token:'',
            user_id:'',
            code:''
        }
    },
    created(){
       this.token = localStorage.getItem('access_token');
       this.getNaverUserInfo()
       let code = location.search;
           code = code.split('=')
           code = code[1].split('&')
           code = code[0]
        this.code = code
        },
    methods: {
        async getNaverUserInfo(){
            const res = await Axios.post('http://192.168.0.45:7788/api/getNaverInfo',{token:this.token},{headers:{'Content-Type':'application/json'}})
            this.user_id = res.data.data.response.name   
        },
        async getLoginToken(){
            const res = await Axios.post('http://192.168.0.45:7788/api/setNaverToken',{grantType:"authorization_code",code:this.code},{headers:{'Content-Type':'application/json'}})
            console.log(res)
        } 
    }
}
</script>

<style lang="scss" scoped>

</style>