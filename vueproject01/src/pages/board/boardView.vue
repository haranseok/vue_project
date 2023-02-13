<template>
    <article>
        <component :is="currentPage" 
            @backBoard="back"
            @detailPage="detailPage"
            @boardHome="boardHome"></component>
    </article>
</template>
<script>
import table from '@/pages/board/boardTable';
import detail from '@/pages/board/boardDetail';
    export default {
        data(){
            return {
                currentPage: 'table',
                id: null
            }    
        },
        components: {
            table,
            detail,
        },
        methods:{
            back(val){
                this.currentPage = val
            },
            detailPage(pageView){
                this.currentPage = pageView
            },
            boardHome(view) {
                this.currentPage = view
            }
        }       
    }
</script>

<style lang="scss" scoped>
    article{
        padding: 3%;
    }
</style>