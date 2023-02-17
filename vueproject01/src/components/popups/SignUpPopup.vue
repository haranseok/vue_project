<template>
    <div v-if="show">
        <div class="popup_bg" @click="$emit('close')"></div>
        <v-card>
            <h3>sign up</h3>
            <v-text-field
                v-model="userInfo.username"
                type="text"
                label="사용할 아이디를 입력해주세요"
                color="#00425A"></v-text-field>
            <v-text-field
                v-model="userInfo.password"
                type="password"
                label="비밀번호를 입력해주세요"
                color="#00425A"></v-text-field>

            <v-btn @click="$emit('close')" variant="plain">취소</v-btn>
            <v-btn @click="signUp" variant="plain" color="#346751">가입하기</v-btn>
        </v-card>
    </div>
</template>
<script>
import { LoginService } from '@/services/LoginService';

export default {
    data() {
        return {
            show: false,
            userInfo: {
                username: '',
                password: ''
            }
        }
    },
    props: { isShow: Boolean },
    created() {
        this.show = this.isShow;
    },
    watch: {
        isShow(val) {
            this.show = val
        }
    },
    methods: {
        async signUp() {
            const res = await LoginService.doSignUp(this.userInfo)
            if (res.data.code === 200) {
                alert('회원가입을 축하합니다.')
                this.show = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.popup_bg {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}
.v-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 1.5%;
    h3 {
        font-size: 2rem;
        margin-bottom: 20px;
        color: #102e2a;
        text-transform: capitalize;
    }
    .v-field__field {
        font-size: 14px;
    }
    .v-btn {
        width: 45%;
        margin: 0 2%;
        font-weight: bold;
    }
    .signBtn {
        background: #102e2a;
        color: #bababa;
    }
}

</style>