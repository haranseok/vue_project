<template>
    <header>
        <div class="h_container">
            <div class="right">
                <span><v-icon>mdi-account-heart</v-icon></span>
                <span @click="this.locale = !this.locale" class="locale"><v-icon>mdi-web</v-icon></span>
                <ul v-if="locale">
                    <li @click="$i18n.locale='ko'">한국어</li>
                    <li  @click="$i18n.locale='en'">english</li>
                </ul>
            </div>
            <!-- <div class="breadCrumbs">
                <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
            </div> -->
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            locale: false
        }
    },
    // props: { breadcrumbs : { type:Array, defualt: () => [] } }
}
</script>
<style lang="scss" scoped>
    header{
        width: 100%;
        background: #fffefe;
        box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.2);
        .h_container{
            width: 90%;
            height: 60px;
            margin: 0 auto;
            align-items: center;
            text-transform: capitalize;
            font-weight: bold;
            display: flex;
            justify-content: end;
                align-items: center;
            .right{
                span{
                    margin: 0 5px;
                    cursor: pointer;
                }
                ul{
                    position:absolute;
                    border-radius: 3px;
                    background: #bdcfd1;
                    text-transform: capitalize;
                    li{
                        font-size: 14px;
                        padding: 8px 5px;
                        cursor: pointer;
                        &:hover{
                            transition: 0.2s;
                            color: #dadada;
                            background: rgba(69, 81, 82, 0.5);
                        }
                    }
                }
            }
            .breadCrumbs{
                padding: 20px 0;
            }
        }
    }
</style>