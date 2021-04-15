import { createApp } from 'vue'
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router';
import App from './App.vue'
import './assets/less/main.less'
import './assets/less/flex.less'
import { useSession } from "@c/commonComponents/sessionOptions";

const init = () =>{
  let { getSession } = useSession()
  const isLogin = getSession('userInfo')
  if (isLogin) {
    store.commit('setUserInfo', isLogin)
  }
  createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
}

init()

