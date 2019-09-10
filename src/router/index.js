import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import sort from '../pages/sort.vue'
import cart from '../pages/cart.vue'
import mine from '../pages/mine.vue'
import goods from '../pages/goods.vue'
import showcart from '../pages/showcart.vue'
import xiangqing from '../pages/xiangqing.vue'
import login from '../pages/login.vue'
import reg from '../pages/reg.vue'
import pay from '../pages/pay.vue'

import axios from 'axios'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    // 重定向
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      footShow: true // true显示，false隐藏 底部导航栏
    }
  },
  {
    path: '/sort',
    name: 'sort',
    component: sort,
    meta: {
      footShow: true // true显示，false隐藏
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
    meta: {
      footShow: true // true显示，false隐藏
      // requiresAuth: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      footShow: true // true显示，false隐藏
      // requiresAuth: true
    }
  },
  {
    path: '/goods/:id', // 动态传参
    name: 'goods',
    component: goods,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: '/xiangqing',
    name: 'xiangqing',
    component: xiangqing,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: '/showcart',
    name: 'showcart',
    component: showcart,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: '/reg',
    name: 'reg',
    component: reg,
    meta: {
      footShow: false // true显示，false隐藏
    }
  },
  {
    path: '/pay',
    name: 'pay',
    component: pay,
    meta: {
      footShow: false // true显示，false隐藏
    }
  }
  ]
})

// 路由拦截
router.beforeEach(function (to, from, next) {
  // 判断目标路由是否需要登录权限
  if (to.matched.some(item => item.meta.requiresAuth)) {
    // 判断是否已登录
    let authorization = localStorage.getItem('Authorization')
    if (authorization) {
      // 发起校验,判断token是否过期或者被伪造
      axios.get('http://47.104.78.143:1991/verify', {
        headers: {
          Authorization: authorization
        }
      }).then(res => {
        window.console.log('then', res)
      })
      next()
    } else {
      // 判断token过期，，跳到的登录页面，
      // 顺便把此时的地址传过去，登录成功返回此页面
      next({
        path: '/login',
        query: {
          targetUrl: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

// 响应拦截
axios.interceptors.response.use(function (res) {
  if (res.data.data.authorization === false) {
    router.push('/login')
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default router
