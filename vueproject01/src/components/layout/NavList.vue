<template>
    <nav>
        <div class="logo jcc">metakingz admin</div>
            <ul>
                <li v-for="(menu, i) in menuList" :key="i"
                    class="cp"
                    @click="tabClick(menu)">
                    {{ menu }}
                </li>
            </ul>
        <div class="nav_footer jcc">
            secret town
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            current: 0,
        }
    },
    props: { 
        menuList: Array, 
    },
    methods: {
        tabClick(string) {
            this.$emit("clickEvent", string)
        }
    },
}
</script>
    
<style lang="scss" scoped>
nav{
    position: relative;
    height: 100vh;
    color: #fff;
    background: #384958;
    .logo{
        height: 50px;
        font-size: 1.1rem;
        text-transform: capitalize;
        background: #405364;
    }
    ul{
        text-transform: capitalize;
        li{
            padding: 5%;
            &:hover{
                background: #8297ab;
            }
        }
    }
    .nav_footer{
        width: 100%;
        position: absolute;
        bottom:0;
        height: 30px;
        font-size: 10px;
        text-transform: uppercase;
        background: #405364;
    }
}
.active{
    color: rgb(171, 202, 202);
}
</style>