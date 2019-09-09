import Vue from 'vue'

import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)

// 完整的Vuex的配置
// 实例化Vuex并配置参数
let store = new Vuex.Store({
  state: {
    // 请求头初始为空
    authorization: ''
  },
  getters: {

  },
  mutatons: {
    // 登录状态，请求头放到localStorage里面，方便确认状态（例如七天免登陆等应用场景）
    login (state, authorization) {
      localStorage.setItem('Authorization', authorization)
      state.authorization = authorization
    },
    // 退出登录状态，清除请求头
    logout (state) {
      state.authorization = ''
      localStorage.removeItem('Authorization')
    }

  }

})

export default store
