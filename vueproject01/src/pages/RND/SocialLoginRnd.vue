<template>
    <div class="container">
        <div id="naver_id_login"></div>
        <v-btn id="custom-login-btn" color="#FEE500" @click="doKakaoLogin()" prepend-icon="mdi-chat">카카오톡 로그인</v-btn>
        <v-btn @click="googleLogin">google login</v-btn>
        <v-btn @click="facebookLogin">facebook login</v-btn>
    </div>
</template>
<script>
import { googleTokenLogin } from "vue3-google-login"
export default {
    created(){
        window.fbAsyncInit = function() {
            window.FB.init({
            appId : '968088867934488',
            cookie : true,
            xfbml : true,
            version : 'v9.0'
            });
            window.FB.AppEvents.logPageView();         
        };
    },
  mounted(){
    // naver
    
    const naver_id_login = new window.naver_id_login("5mAAvwV9lZE3kQ82t5AF", "http://192.168.0.90:81/naver");
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2,40); // 버튼 설정
    naver_id_login.setState(state);
    // naver_id_login.setPopup(); // popup 설정을 위한 코드
    naver_id_login.init_naver_id_login();
    console.log(naver_id_login)
    if(naver_id_login.getAccessToken() !== undefined){
        console.log('access_token',naver_id_login.getAccessToken())
        localStorage.setItem('access_token',naver_id_login.getAccessToken());
        location.href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=5mAAvwV9lZE3kQ82t5AF&redirect_uri=http://192.168.0.90:81/user&state=1234'

        this.$router.push('/user')    
    }else{
        this.$router.push('/naver')
    }
  },
    methods: {
        doKakaoLogin() {
            const params = {
                redirectUri: "http://192.168.0.90:81/user",
            };
            window.Kakao.Auth.authorize(params);
        },
        // google http://localhost:81/ ip주소로 등록이 안되서 로컬호스트 url등록
        googleLogin(){
            googleTokenLogin().then((response)=>{
                console.log(response)
            })
        },
        facebookLogin() {
            window.FB.login(function(response) {
                console.log('access_token:'+ response.authResponse.accessToken)
        if (response.status === 'connected') {
          window.FB.api('/me', 'get', {fields: 'name,email'}, function(r) {

            const facebook_email = r.email;
            const facebook_name = r.name;

            console.log(facebook_email);
            console.log(facebook_name);

          })
        }
      }, {scope: 'public_profile,email'})
        }
        
    }

}
</script>
<style lang="scss" scoped>
.container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>