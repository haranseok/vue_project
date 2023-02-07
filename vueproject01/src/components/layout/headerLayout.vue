<template>
    <header>
        <div class="h_container">
            <div class="right">
                <span><v-icon>mdi-home-account</v-icon></span>
            </div>
        </div>
    </header>
</template>
<script>
</script>
<style lang="scss" scoped>
    header{
        width: 100%;
        height: 50px;
        background: #f2f2f2;
        .h_container{
            width: 90%;
            height: 50px;
            margin: 0 auto;
            display: flex;
            justify-content: end;
            align-items: center;
            text-transform: capitalize;
            font-weight: bold;
        }
    }
</style>