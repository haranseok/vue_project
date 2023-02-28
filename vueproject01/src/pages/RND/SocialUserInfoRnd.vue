<template>
    <div>
        naver userInfo: {{ user_id }}
        <v-btn @click="getNaverUserInfo">인증</v-btn>
        <v-btn @click="getKakaoUserInfo">카카오정보</v-btn>
        <div>
            <p>닉네임: {{ nickName }}</p>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    data(){
        return {
            token:'',
            user_id:'',
            code:'',
            nickName: '',
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
        this.getKakaoToken(this.code)
        },
    methods: {
        async getNaverUserInfo(){
            const res = await Axios.post('http://192.168.0.45:7788/api/getNaverInfo',{token:this.token},{headers:{'Content-Type':'application/json'}})
            this.user_id = res.data.data.response.name   
        },
        async getLoginToken(){
            const res = await Axios.post('http://192.168.0.45:7788/api/setNaverToken',{grantType:"authorization_code",code:this.code},{headers:{'Content-Type':'application/json'}})
            console.log(res)
        },
        async getKakaoToken(code) {
            const kakaoHeader = {
                'Authorization': '929136f8bc395f6a3ce07ad42d4a9713',
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            };
            const data  = {
                grant_type: 'authorization_code',
                client_id: '041576102e9613c9acb57fb766533896',
                redirect_uri: 'http://192.168.0.90:81/user',
                code: code,
            };
            const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
            const result = await Axios.post('https://kauth.kakao.com/oauth/token',queryString, {headers:kakaoHeader} )
            this.token = result.data.access_token
            console.log(this.token)
        },
        async getKakaoUserInfo() {
            const res = await Axios.post('http://192.168.0.45:5001/api/v1/kakao/getUserInfo',{token:this.token},{headers:{'Content-Type':'application/json'}})
            console.log(res)
            this.nickName = res.data.data.properties.nickname
        } 
    }
}
</script>

<style lang="scss" scoped>

</style>