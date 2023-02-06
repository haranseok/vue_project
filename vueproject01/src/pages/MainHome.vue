<template>
  <div class="main_container jcsb">
    <div class="l_container">
        <NavList 
        :menu="menuList"
        @clickEvent="menuClick"
        :isMenu="isMenu" />    
    </div>
    <div class="r_container">
        <Header />
        <router-view />
    </div>
  </div>
</template>
<script>
import Header from '@/components/headerLayout'
import NavList from '@/components/NavList'
export default {
    data() {
        return {
            menuList:['메뉴1','메뉴2','메뉴3'],
            isMenu: 0,
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