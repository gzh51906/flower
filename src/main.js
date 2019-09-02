// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

// 引入axios
import axios from 'axios'
// 引入store（Vuex）
import store from './store'
// 引入vantUI框架
import vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(vant)

// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
}).$mount('#app')
