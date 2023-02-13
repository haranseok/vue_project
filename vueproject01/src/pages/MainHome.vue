<template>
  <div class="main_container jcsb">
    <div class="l_container">
        <NavList
        @clickEvent="menuClick"/>    
    </div>
    <div class="r_container">
        <Header 
        :breadcrumbs="breadcrumbs"/>
        <router-view />
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/headerLayout'
import NavList from '@/components/layout/NavList'

export default {
    data(){
        return {
            breadcrumbs:['home',]
        }
    },
    components: {
        Header,
        NavList,
    },
    watch: {
        $route(route){this.breadcrumbs.push(route.name)}
    },
    methods: {
        menuClick(option){
         console.log(option)
            if(option === 'Pinia'){
                this.$router.push('/home/pinia')
            }else if(option === 'Locale'){
                this.$router.push('/home/locale')
            }else if(option === 'Board'){
                this.$router.push('/home/board')
            }else{
                this.$router.push('/home/chatting')
            }
        }
    }
}
</script>

<style lang="scss">
.main_container{
    background: #f6f8f7;
    .l_container{
        width: 15%;
        height: 100%;
    }
    .r_container{
        width: 85%;
    }
}
</style>