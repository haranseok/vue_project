<template>
    <div v-if="updateWrite">
        <div class="back_bg" @click="$emit('close')"></div>
        <v-card>
            <h2>게시글 작성</h2>
            <input class="date" type="text" v-model="today">
            <div class="write_box">
                <input class="text" type="text" v-model="boardData.title" placeholder="제목">
                <input class="text" type="text" v-model="userInfo.username" disabled>
                <textarea v-model="boardData.content" placeholder="내용을 입력해주세요."></textarea>
            </div>
            <v-btn @click="updateBtn(0)">취소</v-btn>
            <v-btn @click="updateBtn(1)" color="#006064" class="writeBtn">{{ sendBtnText }}</v-btn>
        </v-card>
    </div>
</template>
<script>
import { useUserInfoStore } from '@/store/userInfo';

const userInfo = useUserInfoStore();
export default {
    data(){
        return {
            no:'',
            today: '',
            boardData:{
                title: '',
                content: '',
            },
            updateWrite: false,
            userInfo
        }
    },
    props: {
        isUpdate : Boolean,
        sendBtnText: String
    },
    created(){
        let date = new Date;
        this.today = date.getFullYear() + '-' + '0'+(date.getMonth()+1) + '-' +date.getDate();
        this.updateWrite = this.isUpdate
    },
    methods: {
        updateBtn(option){
            this.$emit('updateWrite', option, this.boardData)
            if(option === 1){this.boardData = {}}
        }
    },
    watch: {
        isUpdate(val){
            this.updateWrite = val
        }
    }        
}
</script>

<style lang="scss" scoped>
.back_bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
}

.v-card{
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    padding: 20px;
    text-align: center;
    h2{
        margin-bottom: 20px;
    }
    .date{
        float: right;
        margin-bottom: 20px;
    }
    .write_box{
        clear: both;
        width: 100%;
        margin: 20px 0;
    }
    .text, textarea{
        width: 80%;
        margin: 10px auto;
        padding: 10px;
        font-size: 0.8rem;
        border-radius: 3px;
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.2);
        resize: none;
    }
    textarea{
        height: 150px;
    }
}
.v-btn{
    width: 100px;
    margin: 0 10px;
}
.writeBtn{
    color: #dddddd;
}
</style>