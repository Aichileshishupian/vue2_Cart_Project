// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 👇 全局引入 Vant
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant) // 注册所有 Vant 组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
