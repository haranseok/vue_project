<template>
    <article>
        <h2>locale</h2>
        <section>
            <div class="text_box">
                <h3>{{ $t('title') }}</h3>
                <p>{{ $t('message') }}</p>
            </div>
            <button @click="$i18n.locale='ko'">한국어</button>
            <button @click="$i18n.locale='en'">english</button>
        </section>
    </article>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    article{
        width: 80%;
        margin: 0 auto;
        padding: 3%
    }
    section{
        margin: 20px 0;
    }
    button{
         padding: 5px 10px;
         margin: 0 5px;
         border-radius: 3px;
         background: rgb(0, 77, 95);
         color: #eee;
         text-transform: capitalize;   
        }

</style>