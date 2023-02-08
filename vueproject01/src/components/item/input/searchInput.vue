<template>
    <div class="search_box jcsb">
        <input type="text" 
            v-model="search"
            placeholder="검색어를 입력해주세요.">
        <v-icon @click="searchEnter">mdi-magnify</v-icon>
    </div>
</template>
<script>
export default {
    data(){
        return{
            search: '',
        }
    },
    methods: {
        searchEnter(){
            this.$emit('searchEvent', this.search)
        }
    }
}
</script>

<style lang="scss" scoped>
.search_box{
    width: 230px;
    padding:5px 8px;
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
    input{
        width: 200px;
        overflow:hidden ;
        border-radius: 3px;
        &::placeholder{
            font-size: 14px;
            color: #cecccc;
        }
    }
    .v-icon{
        color: #aaaaaa;
        padding: 5px;
        cursor: pointer;
    }
}

</style>