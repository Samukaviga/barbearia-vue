import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import FontAwesomeIcon from './plugins/fontawesome'

import App from './App.vue'
import router from './router'

import 'flowbite/dist/flowbite.css'       // CSS do Flowbite
import 'flowbite'                          // JS principal do Flowbite
import 'flowbite-datepicker'


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
