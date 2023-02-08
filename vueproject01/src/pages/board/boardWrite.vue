<template>
    <div>
        <h2>게시글 작성</h2>
        <div class="write_box">
            
        </div>
        <v-btn>작성</v-btn><v-btn @click="cancel">취소</v-btn>
    </div>
</template>
<script>
export default {
    methods: {
        cancel(){
            this.$emit('backBoard','table')
        }
    }        
}
</script>

<style lang="scss" scoped>
div{
    margin: 5% 0;
    text-align: center;
    .write_box{
        width: 100%;
        height: 100px;
        background: lightblue;
    }
}
</style>