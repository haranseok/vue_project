<template>
    <div class="container">
        <h2>게시글 작성</h2>
        <input class="date" type="text" v-model="today">
        <div class="write_box">
            <input class="text" type="text" v-model="title" placeholder="제목">
            <input class="text" type="text" v-model="writer" disabled>
            <textarea v-model="content" placeholder="내용을 입력해주세요."></textarea>
        </div>
        <v-btn @click="update" color="#395B64" class="writeBtn">작성</v-btn>
        <v-btn @click="cancel">취소</v-btn>
    </div>
</template>
<script>
import data from '@/data/board';

export default {
    data(){
        return {
            no:'',
            today: '',
            title: '',
            writer: '',
            content: '',
        }
    },
    created(){
        this.writer = JSON.parse(sessionStorage.getItem('userInfo')).username
        let date = new Date;
        this.today = date.getFullYear() + '-' + '0'+(date.getMonth()+1) + '-' + '0'+date.getDate()
    },
    methods: {
        cancel(){
            this.$emit('backBoard','table')
        },
        update(){
            this.no = data.length+1
            data.push({
                no: this.no,
                writer: this.writer,
                date: this.today,
                title: this.title,
                content: this.content
            })
            this.$emit('update','table')
        }
    }        
}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    margin: 5% 0;
    text-align: center;
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
}
.v-btn{
    width: 100px;
    margin: 0 10px;
}
.writeBtn{
    color: #dddddd;
}
</style>