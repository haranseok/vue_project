<template>
    <article>
        <component :is="currentPage" 
            @boardDetail="trData"
            @backBoard="back"
            @update="update"
            @writeCencel="cencel"></component>
    </article>
</template>
<script>
import table from '@/components/layout/boardTable';
import detail from '@/pages/board/boardDetail';
import write from '@/pages/board/boardWrite'
    export default {
        data(){
            return {
                currentPage: 'table',
            }    
        },
        components: {
            table,
            detail,
            write
        },
        methods:{
            trData(val){
                this.currentPage = 'detail'
                console.log(val)
            },
            back(val){
                this.currentPage = val
            },
            update(val){
                this.currentPage = val
            },
            cencel(){
                this.currentPage = 'table'
            }
        }       
    }
</script>

<style lang="scss" scoped>
    article{
        padding: 3%;
    }
</style>