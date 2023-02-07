<template>
    <article>
        <v-card
            width="400" 
            elevation="3"
            color="rgba(255,255,255,0.1)"
            shaped>
            <v-card-title>sign in</v-card-title>
            <div class="input_box">
                <v-text-field
                    v-model="userID"
                    label="ID"
                    color="#EBDEF0"
                    type="text"
                ></v-text-field>
                <v-text-field 
                    v-model="userPW"
                    label="password"
                    color="#EBDEF0"
                    type="password"
                ></v-text-field>
            </div>
            <v-btn 
            @click="login()"
            color="#cdcdcdf5"
            >login</v-btn>
        </v-card>
    </article>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                userPW: '',
            }
        },
        methods: {
            login(){
                // this.$router.push('/home/pinia');
                console.log(this.userPW)
            }
        }
    }
</script>
<style lang="scss" scoped>
article{
    position: relative;
    min-height: 100vh;
    background: #384958;
    .v-card{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1.5%;
        .v-card-title{
            color: #cdcdcdf5;
            font-size: 2rem;
            text-transform: capitalize;
        }
        .input_box{
            margin: 3% 0;
        }
        .v-btn{
            width: 100%;
            color: #515151
        }
    }
}
</style>