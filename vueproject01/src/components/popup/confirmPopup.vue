<template>
    <div v-if="confirm">
        <div class="popup_bg" @click="$emit('close')"></div>
        <v-card>
            <h4>{{ title }}</h4>
            <p v-if="textShow">{{ text }}</p>
            <div class="btnBox">
                <v-btn 
                    variant="plain"
                    @click="btnEvent(0)">{{ btnText }}</v-btn>
                <v-btn
                    @click="btnEvent(1)"
                    v-if="cencleBtn"
                    color="error"
                    variant="plain">삭제</v-btn>
            </div>
        </v-card>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                confirm: false,
                cencleBtn: true,
                textShow: true
            }
        },
        props:{ 
            isConfirm: Boolean,
            isCencle: Boolean,
            isTextShow: Boolean,
            title: String,
            text: String,
            btnText: String,
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
            },
            isCencle(val) {
                this.cencleBtn = val;
            },
            isTextShow(val){
                this.textShow = val
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
    h4{ margin-bottom: 10px;}
    p{
        margin: 15px 0;
        font-size: 0.8rem;
        color: #838383;
    }
    .btnBox{
        width: 100%;
        text-align: right;
        .v-btn{
            font-weight: bold;
        }
    }
}
</style>