

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './common.css'
import globaleComponent from '@/components/globalComponents.js';
import '@/assets/flexible.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus);
app.use(globaleComponent);
app.mount('#app')
