<template>
    <nav>
        <ul>
            <li v-for="(menu, i) in menuList" :key="i">{{ menu }}</li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return { 
            menuList: ['status', 'lifeCycle']
        }
    }    
}
</script>
    
<style lang="scss" scoped>
nav{
    ul{
        display: flex;
        list-style: none;
        li{
            padding: 10px;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
}
</style>