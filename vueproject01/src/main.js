import { createApp } from 'vue'
import { createPinia  } from 'pinia'
import App from './App.vue'
import Router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const pinia = createPinia()
const app = createApp(App)

loadFonts()
  app.use(pinia)
  app.use(Router)
  app.use(vuetify)
  app.mount('#app')
