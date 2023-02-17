<template>
    <div>
        <div id="naver_id_login"></div>
        <div id="custom-login-btn" @click="doKakaoLogin()">카카오 로그인</div>
    </div>
</template>
<script>
export default {
  mounted(){
    // naver
    
    const naver_id_login = new window.naver_id_login("5mAAvwV9lZE3kQ82t5AF", "http://192.168.0.90:81/naver");
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2,40); // 버튼 설정
    naver_id_login.setState(state);
    // naver_id_login.setPopup(); // popup 설정을 위한 코드
    naver_id_login.init_naver_id_login();
    console.log(naver_id_login.getAccessToken())
    if(naver_id_login.getAccessToken() !== undefined){
        console.log('access_token',naver_id_login.getAccessToken())
        localStorage.setItem('access_token',naver_id_login.getAccessToken());
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
    },
}
</script>

<style lang="scss" scoped>

</style>