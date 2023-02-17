<template>
    <div class="detail_container">
        <h1>board details</h1>
        <article>
            <section>
                <div class="boardTop">
                    <p>no. {{ number }}</p>
                </div>
                <h3>{{ title }}</h3>
                <span class="userId">작성자 : {{ user_id }}</span>
                <div class="content_box">{{ content }}</div>
            </section>
        </article>
        <v-btn class="listBackbtn" @click="back" color="#395B64">목록</v-btn>
    </div>
</template>
<script>
import { useBoardInfoStore } from '@/store/board';
import { getOneById } from '@/services/BoardService';

const board = useBoardInfoStore();

export default {
    data() {
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
        async boardDetail() {
            const detailsData = await getOneById({ id: this.board.boardContent.id })
            this.title = detailsData.data.data.title;
            this.content = detailsData.data.data.content;
            this.number = detailsData.data.data.id;
        },
        back() {
            this.$emit('backBoard', 'table')
        }
    }
}
</script>

<style lang="scss" scoped>
.detail_container {
    h1 {
        text-transform: capitalize;
    }
}
article {
    margin: 5% 0;
    section {
        width: 100%;
        padding: 3%;
        background: #fff;
        .boardTop {
            padding: 3px 10px;
            text-transform: uppercase;
            text-align: right;
            font-weight: bold;
        }
        .userId {
            display: block;
            text-align: right;
        }
        .content_box {
            border: 1px solid #e1e1e1;
            border-radius: 3px;
            margin: 2% 0;
            padding: 10px;
        }
    }
    .v-btn {
        float: right;
        color: #ddd;
    }
}
</style>