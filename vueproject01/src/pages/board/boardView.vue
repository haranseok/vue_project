<template>
    <article>
        <h2>board</h2>
        <button v-for="demos in demo" :key="demos" @click="currentPage = demos">{{ demos }}</button>
        <component :is="currentPage"></component>
    </article>
</template>
<script>
import table from '@/components/layout/boardTable';
import detail from '@/pages/board/boardDetail.vue';
    export default {
        data(){
            return {
                currentPage: 'table',
                demo: ['table','detail']
            }    
        },
        components: {
            table,
            detail
        }       
    }
</script>

<style lang="scss" scoped>
    article{
        padding: 3%;
    }
</style>