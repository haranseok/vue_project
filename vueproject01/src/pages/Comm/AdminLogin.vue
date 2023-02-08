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
                    v-model="login.id"
                    label="ID"
                    color="#EBDEF0"
                    type="text"
                    :rules="idRule"
                ></v-text-field>
                <v-text-field 
                    v-model="login.pw"
                    label="Password"
                    color="#EBDEF0"
                    type="password"
                    :rules="[pwrules.required, pwrules.min]"
                ></v-text-field>
            </div>
            <v-btn 
            @click="loginSend()"
            color="#cdcdcdf5"
            >login</v-btn>
        </v-card>
    </article>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                login: {
                    id: '',
                    pw: '',
                },
                idRule: [
                    value => !!value || '아이디를 입력해주세요.',
                    value => (value && value.length >= 6) || '6자 이상 입력해주세요.'
                ],
                pwrules: {
                    required: value => !!value || '비밀번호를 입력해주세요.',
                    min: v => v.length >= 8 || '8자 이상 입력해주세요.',
                },
            }
        },
        methods: {
            loginSend(){
                this.$router.push('/home/pinia');
            }
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
    }
}
</style>