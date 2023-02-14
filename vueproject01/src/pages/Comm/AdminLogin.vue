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
            >login</v-btn>
            <span class="cp" @click="this.isShow = true">회원가입</span>
        </v-card>
        <Popup 
            :isShow="isShow"
            @close="this.isShow = false"/>
    </article>
</template>
<script>
import Popup from '@/components/popup/SignUpPopup';
import { login } from '@/api/index';
import { useUserInfoStore } from '@/store/userInfo';
    
export default {
    setup() {
        const userInfo = useUserInfoStore();
        return {
            userInfo,
            isShow: false,
            password:'',
            idRule: [
                value => !!value || '아이디를 입력해주세요.',
                value => (value && value.length >= 3) || '3자 이상 입력해주세요.'
            ],
            pwrules: {
                required: value => !!value || '비밀번호를 입력해주세요.',
                min: v => v.length >= 8 || '8자 이상 입력해주세요.',
            },
        }
    },
    methods: {
        async loginSend(){
            const res = await login({username:this.userInfo.username, password:this.password})
                if(res.data.code === 200) {
                    this.userInfo.token = {access_token:res.data.data}
                    this.$router.push('/home/pinia')
                }
            }
        },
        components: {
            Popup
        }
    }
</script>
<style lang="scss" scoped>
article{
    position: relative;
    min-height: 100vh;
    background: #384958;
    .v-card{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1.5%;
        .v-card-title{
            color: #cdcdcdf5;
            font-size: 2rem;
            text-transform: capitalize;
        }
        .input_box{
            margin: 3% 0;
        }
        .v-btn{
            width: 100%;
            color: #515151
        }
        span{
            display: block;
            margin-top: 20px;
            color:#d9d9e4;
            text-align: center;
            text-decoration: underline;
        }
    }
}
</style>