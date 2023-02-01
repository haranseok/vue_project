<template>
  <div class="main_container">
    <NavList />
    <router-view />
  </div>
</template>
<script>
import NavList from '@/pages/Comm/NavList';
export default {
    components: {
        NavList
    }
}
</script>

<style lang="scss">
.main_container{
    padding: 0 5%;
}
</style>