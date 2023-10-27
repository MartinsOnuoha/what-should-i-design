
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vClickOutside from "click-outside-vue3"
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'

const app = createApp(App)

app.use(vClickOutside)
app.use(createPinia())
app.use(router)

app.mount('#app')

console.info('🛠️CONTRIBUTE ON GITHUB: https://github.com/MartinsOnuoha/what-should-i-design')
