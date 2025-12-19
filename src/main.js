import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/commons.css'

// 初始加载时设置 viewport（首页使用默认设置）
const initialPath = window.location.hash.replace('#', '') || '/index';
if (initialPath === '/index' || initialPath === '/' || initialPath === '/channel') {
  let meta = document.querySelector('meta[name="viewport"]');
  if (meta) {
    meta.content = "width=device-width, initial-scale=1.0";
  }
}

const app = createApp(App)
app.use(router)
app.mount('#app')
