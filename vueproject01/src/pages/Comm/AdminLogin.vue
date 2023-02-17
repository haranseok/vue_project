<template>
    <article>
        <v-card
            width="400"
            elevation="3"
            color="rgba(255,255,255,0.1)"
            shaped>
            <v-card-title>sign in</v-card-title>
            <div class="input_box">
                <v-text-field
                    v-model="userInfo.username"
                    label="ID"
                    color="#EBDEF0"
                    type="text"
                    :rules="idRule"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    color="#EBDEF0"
                    type="password"
                    :rules="[pwrules.required, pwrules.min]"
                    @keyup.enter="loginSend()"
                ></v-text-field>
            </div>
            <v-btn
                @click="loginSend()"
                color="#cdcdcdf5"
            >login
            </v-btn>
            <span class="cp" @click="this.isShow = true">회원가입</span>
        </v-card>
        <SignUp
            :isShow="isShow"
            @close="this.isShow = false" />
        <ConfirmPopup 
            :title="title"
            :text="text"
            :btnText="btnText"
            :isCencle="isCencle"
            :isConfirm="isConfirm"
            :isTextShow="isTextShow"
            @close="isConfirm = false"
            @confirmBtn="confirmBtn"/>
    </article>
</template>
<script>
import { ref } from 'vue';
import SignUp from '@/components/popups/SignUpPopup';
import { LoginService } from '@/services/LoginService';
import { GlobalStore } from '@/store/GlobalStore';
import ConfirmPopup from '@/components/popups/ConfirmPopup';
import { useRouter } from 'vue-router'

export default {
    setup() {
        
        const router = useRouter() // this.router
        // const route = useRoute() // 쿼리...파람...?
        let userInfo = GlobalStore();
        let isShow = ref();
        let password = ref();
        let isConfirm = ref(false)
        let isTextShow = ref(true)
        let isCencle = ref()
        let title = ref("")
        let text = ref("")
        let btnText = ref("")
        
        let idRule = [
            value => !!value || '아이디를 입력해주세요.',
            value => (value && value.length >= 3) || '3자 이상 입력해주세요.'
        ];
        let pwrules = {
            required: value => !!value || '비밀번호를 입력해주세요.',
            min: v => v.length >= 8 || '8자 이상 입력해주세요.',
        };
        
        let loginSend = async () =>{
            
            try {
                
              const login = await LoginService.doLogin({ username: userInfo.username, password: password.value })
                if (login.data.code === 200) {
                    userInfo.token = { access_token: login.data.data }
                    router.push('/home/pinia')
                }
            } catch (err) {
                if(err.response.data.code === 5002){
                    isConfirm.value = true
                    isTextShow.value = true
                    isCencle.value = false
                    title.value = '로그인 오류'
                    text.value = '아이디와 비밀번호를 확인하고 다시 시도해주세요.'
                    btnText.value = '확인'
                }
            }
        }
        
        return { userInfo, password, isShow,
                 isConfirm, isTextShow, title, text, btnText, idRule, pwrules, 
                 isCencle, loginSend }
    },
    methods:{
        confirmBtn(e){
            if(e === 0){ this.isConfirm = false }
        }
    },
    components: {
        SignUp,
        ConfirmPopup
    }
}
</script>
<style lang="scss" scoped>
article {
    position: relative;
    min-height: 100vh;
    background: #384958;
    .v-card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1.5%;
        .v-card-title {
            color: #cdcdcdf5;
            font-size: 2rem;
            text-transform: capitalize;
        }
        .input_box {
            margin: 3% 0;
        }
        .v-btn {
            width: 100%;
            color: #515151
        }
        span {
            display: block;
            margin-top: 20px;
            color: #d9d9e4;
            text-align: center;
            text-decoration: underline;
        }
    }
}
</style>