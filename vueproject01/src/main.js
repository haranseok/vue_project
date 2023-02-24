import { createApp } from 'vue'
import Store from '@/store/index'
import App from './App.vue'
import Router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n from './i18n'
import dayjs from 'dayjs'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)


app.provide("dayjs", dayjs);

app.config.globalProperties.$dayjs = dayjs

loadFonts()
app.use(vue3GoogleLogin, {clientId:'803988286583-8903s8ggtvc7faamh0s84oc9ovniud52.apps.googleusercontent.com'})
app.use(Store)
app.use(Router)
app.use(dayjs)
app.use(vuetify)
app.use(i18n)
app.mount('#app')

window.Kakao.init('7a1b2deeb0903f905ce7396bf9d826ac')
