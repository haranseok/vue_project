<template>
    <nav>
        <v-list-item class="logo"
            prepend-icon="mdi-shield-crown"
            title="Admin"
            subtitle="manager">
        </v-list-item>
        <v-divider></v-divider>
            <v-list v-model:opened="open" class="list">
                <v-list-item prepend-icon="mdi-bulletin-board" 
                    title="DashBoard"></v-list-item>
                <v-list-item
                    v-for="([title, icon], i) in menu"
                        :key="i"
                        :title="title"
                        :prepend-icon="icon"
                        :value="title"
                        active-color="#579BB1"
                        @click="tabClick(title)">
                </v-list-item>
                <v-list-group value="Rnd">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-developer-board"
                        title="Rnd"
                    ></v-list-item>
                    </template>
                    <v-list-item
                        v-for="([title, icon], i) in rnd"
                        :key="i"
                        :title="title"
                        :prepend-icon="icon"
                        :value="title"
                        active-color="#579BB1"
                        @click="tabClick(title)"
                    ></v-list-item>
                </v-list-group>
            </v-list>
        <div class="nav_footer jcc">
            secret town
        </div>
    </nav>
</template>
<script>
export default {
    data(){
        return {
            open: ['Rnd'],
            rnd: [
                ['Pinia', 'mdi-fruit-pineapple'],
                ['Locale', 'mdi-translate'],
            ],
            menu: [
                ['Board', 'mdi-table'],
                ['Chatting', 'mdi-wechat']
            ]
        }
    },
    methods: {
        tabClick(string) {
            this.$emit("clickEvent", string)
        }
    },
}
</script>
    
<style lang="scss" scoped>
nav{
    position: relative;
    height: 100vh;
    min-width: 200px;
    color: #cecece;
    background: #12334f;
    box-shadow: 1px 0px 15px 1px rgba(0, 0, 0, 0.2);
    .logo{
        display: flex;
        align-items: center;
        height: 60px;
        padding: 5%;
        font-size: 1.1rem;
        text-transform: capitalize;
        span{
            margin-left: 20px;
        }
    }
    .list{
    background: #12334f;
    }
    .v-list-item{
        color: #cecece;
    }
    .nav_footer{
        width: 100%;
        position: absolute;
        bottom:0;
        height: 30px;
        font-size: 10px;
        text-transform: uppercase;
        background: #162a3b;
    }
}
</style>