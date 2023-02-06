<template>
    <nav>
        <div class="logo flex">metakingz admin</div>
        <ul>
            <li v-for="(tab, i) in menu" :key="i"
                :class="{active: current === i}"
                @click="tabClick(current = i)">
                {{ tab }}
            </li>
        </ul>
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
        menu: Object, 
        isMenu: { type: Number } 
    },
    methods: {
        tabClick(option) {
            this.$emit("clickEvent", option)
        }
    },
    created() {
        this.current = this.isMenu;
    },
    watch: {
        isMenu(val) {
            this.current = val; 
        }
    }
}
</script>
    
<style lang="scss" scoped>
nav{
    height: 100vh;
    color: #fff;
    background: #4c6378;
    .logo{
        height: 50px;
        font-size: 1.1rem;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        background: #405364;
    }
    ul{
        padding: 5% 0;
        li{
            padding: 5%;
        }
    }
}
.active{
    color: rgb(171, 202, 202);
}
</style>