<template>
    <div>
        상세보기
        <v-btn @click="back">목록</v-btn>
    </div>
</template>
<script>
    export default {
        methods: {
            back(){
                this.$emit('backBoard', 'table')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>