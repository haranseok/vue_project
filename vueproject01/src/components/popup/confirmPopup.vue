<template>
    <div v-if="confirm">
        <div class="popup_bg" @click="$emit('close')"></div>
        <v-card>
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
            <div class="btnBox">
                <v-btn @click="btnEvent(0)">취소</v-btn>
                <v-btn
                    @click="btnEvent(1)"
                    color="#006064">삭제</v-btn>
            </div>
        </v-card>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                confirm: false,
            }
        },
        props:{ 
            isConfirm: Boolean,
            title: String,
            text: String,
            },
        created(){
            this.confirm = this.isConfirm;
        },
        methods:{
            btnEvent(option){
                this.$emit('confirmBtn', option)
            }
        },
        watch:{
            isConfirm(val){
                this.confirm = val;
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.popup_bg{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
}
.v-card{
    padding: 1.5%;
    position: absolute;
    top:50%;
    left: 55%;
    transform: translate(-50%, -50%);
    text-align: center;
    p{
        margin: 15px 0;
        font-size: 0.9rem;
        color: #838383;
    }
    .btnBox{
        width: 100%;
        padding: 10px 0;
        text-align: center;
        .v-btn{
            &:nth-child(2){
                margin-left: 15px;
                color:#e5e4e4;
            }
        }
    }
}
</style>