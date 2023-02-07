import { createApp } from 'vue'
import Store from '@/store/index'
import App from './App.vue'
import Router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n from './i18n'

const app = createApp(App)

loadFonts()
app.use(Store)
app.use(Router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
