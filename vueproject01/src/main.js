import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const app = createApp(App)

loadFonts()
  app.use(Router)
  app.use(vuetify)
  .mount('#app')
