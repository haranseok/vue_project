<template>
    <nav>
        <div class="logo jcc">admin</div>
            <ul>
                <li v-for="(menu, i) in menuList" :key="i"
                    class="cp"
                    @click="tabClick(menu)">
                    <v-icon>{{ menu.icon }}</v-icon>
                    <span class="name">{{ menu.name }}</span>
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
        menuList: { type: Array, default: () => [] },
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
        li{
            padding: 5% 10%;
            &:hover{
                background: #8297ab;
            }
        }
        .name{
            margin-left: 10%;
            text-transform: capitalize;
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