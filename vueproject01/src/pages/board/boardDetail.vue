<template>
    <div class="detail_container">
        <h1>board details</h1>
        <article>
            <section>
                <input type="text" v-model="title">
                <textarea v-model="content"></textarea>
            </section>
        </article>
        <v-btn @click="back">목록</v-btn>
    </div>
</template>
<script>
import { useBoardInfoStore } from '@/store/board';
import { useUserInfoStore } from '@/store/userInfo';

const token = useUserInfoStore();
const board = useBoardInfoStore();
let apiUrl = process.env.VUE_APP_API_URL;

    export default {
        data(){
            return {
                board,
                title: '',
                content: '',
            }
        },
        created() {
            this.change()
        },
        methods: {
            async change(){
            const res = await this.axios.get(`${apiUrl}/board/get_one`,
                  { params:{id:this.board.boardContent.id}, 
                    headers:token.token
                  })
                  this.title = res.data.data.title;
                  this.content = res.data.data.content;
        },


            back(){
                this.$emit('backBoard', 'table')
            }
        }
    }
</script>

<style lang="scss" scoped>
.detail_container{
    padding: 3%;    
    h1{
        text-transform: capitalize;
    }
}
article{
    margin: 5% 0;
}
</style>