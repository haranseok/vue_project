<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    components: {},

    data: () => ({
        //
    }),
    mounted() {
        //TODO
        //로컬스토리지에 토큰정보가 있으면..
        //서비스 레이어를 통해서 API통신을 하고
        // 그 통신에 username등을 스토어에 담는다.
        // alert('1')
    }
}
</script>

<style lang="scss">

</style>
