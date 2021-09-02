import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'

import themeType from './assets/js/theme'

const app = createApp(App)
app.config.globalProperties.$themeType = themeType
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
