<template>
    <article>
        pinia counter
        <p>name: {{ counter.name }}</p>
        <p>count: {{ counter.count }}</p>
        <p>doubleCount: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">increment</button>
    </article>
</template>
<script>
import { useCounterStore } from '@/store/counter';

export default {
    setup() {
        const counter = useCounterStore()
        return {
            counter
        }
    },
    
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