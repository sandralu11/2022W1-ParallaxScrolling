import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/main.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
