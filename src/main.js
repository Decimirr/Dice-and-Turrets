import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import FontAwesomeIcon from './fontawesome'
import './assets/tailwind.css'


createApp(App)
.component('f-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
