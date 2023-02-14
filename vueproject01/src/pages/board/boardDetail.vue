<template>
    <div class="detail_container">
        <h1>board details</h1>
        <article>
            <section>
                <h3>제목 : {{ title }}</h3>
                <div class="content_box">{{ content }}</div>
            </section>
        </article>
        <v-btn @click="back">목록</v-btn>
    </div>
</template>
<script>
import { useBoardInfoStore } from '@/store/board';
import { boardGetOne } from '@/api/index';

const board = useBoardInfoStore();

    export default {
        data(){
            return {
                board,
                title: '',
                content: '',
            }
        },
        created() {
            this.boardDetail()
        },
        methods: {
            async boardDetail(){
            const res = await boardGetOne({id:this.board.boardContent.id})
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
    section{
        width: 100%;
        padding: 3%;
        background: #fff;
    }
}
</style>