<template>
  <div class="main_container jcsb">
    <div class="l_container">
        <NavList 
        :menuList="menuList"
        @clickEvent="menuClick"/>    
    </div>
    <div class="r_container">
        <Header />
        <router-view />
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/headerLayout'
import NavList from '@/components/layout/NavList'

export default {
    data() {
        return {
            menuList: [
                { name:'pinia', icon:'mdi-fruit-pineapple' },
                { name:'locale', icon:'mdi-translate' }
            ],
        }
    },
    components: {
        Header,
        NavList,
    },
    created() {
    },
    methods: {
        menuClick(option){
            console.log(option)
            if(option.name === 'pinia'){
                this.$router.push('/home/pinia')
            }else if(option.name === 'locale'){
                this.$router.push('/home/locale')
            }
        }
    }
}
</script>

<style lang="scss">
.main_container{
    .l_container{
        width: 15%;
        height: 100%;
    }
    .r_container{
        width: 85%;
    }
}
</style>