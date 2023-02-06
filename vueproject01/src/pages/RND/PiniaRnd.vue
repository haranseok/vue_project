<template>
    <article>
        pinia
        {{ counter.count }}
        <button @click="counter.increment">plus</button>
    </article>
</template>
<script>
import useCounterStore from '@/store/counter.js'

export default {
    setup () {
        const counter = useCounterStore;
        
        return { 
            counter
        }
    }
}
</script>

<style lang="scss" scoped>
    article {
        padding: 3%;
        button{
            padding:10px;
            background: lightblue;
        }
    }
</style>