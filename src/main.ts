import { createApp } from 'vue'
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router';
import App from './App.vue'
import './assets/less/main.less'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
