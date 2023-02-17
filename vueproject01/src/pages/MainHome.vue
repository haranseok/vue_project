<template>
  <div class="main_container">
    <v-navigation-drawer v-model="drawer">
        <NavList
        @clickEvent="menuClick"/>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <Header
        :breadcrumbs="breadcrumbs"/>
    </v-app-bar>
    <v-container v-resize="onResize">
        <router-view :style="{'min-height': `${ windowSize.y }px`}"/>
    </v-container>
  </div>
</template>
<script>
import Header from '@/components/layouts/HeaderLayout'
import NavList from '@/components/layouts/NavList'

export default {
    data(){
        return {
            breadcrumbs:['home'],
            drawer: null,
            windowSize: {
                y: 0
            }
        }
    },
    mounted() {
        this.onResize()
        this.windowSize.y = this.windowSize.y - 100
    },
    components: {
        Header,
        NavList,
    },
    methods: {
        onResize() {
            this.windowSize = { y: window.innerHeight }
        },
        menuClick(option){
            if(option === 'Pinia'){
                this.$router.push('/home/pinia')
            }else if(option === 'Locale'){
                this.$router.push('/home/locale')
            }else if(option === 'Board'){
                this.$router.push('/board')
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
}
</style>