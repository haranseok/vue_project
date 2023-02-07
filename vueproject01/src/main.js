import { createApp } from 'vue'
import Store from '@/store/index'
import App from './App.vue'
import Router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)

loadFonts()
  app.use(Store)
  app.use(Router)
  app.use(vuetify)
  app.mount('#app')
