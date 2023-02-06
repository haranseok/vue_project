<template>
    <div>
        <button @click="test()">버튼</button>
    </div>
</template>
<script>

let arrBox = [[0, 1, 2, 3, 4, 5, 6, 7, 8],[11, 12, 13, 14,15, 16, 17, 18,19],[21, 22, 23, 24, 25, 26, 27, 28, 29]]; 

export default {
    data(){
        return {
            arr:[],
        }
    },
    methods:{
        test(){
            let date = []
            for(let a = 0; a < 9; a++){
                let dates = [];
                for(let b = 0; b < arrBox.length; b++){
                    dates.push(arrBox[b][a])
                }
                date.push(dates)
            }
            console.log(date)   
        }
    }
}
</script>

<style>

</style>