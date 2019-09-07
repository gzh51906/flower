import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import sort from '../pages/sort.vue'
import cart from '../pages/cart.vue'
import mine from '../pages/mine.vue'
import goods from '../pages/goods.vue'
import showcart from '../pages/showcart.vue'
import xiangqing from '../pages/xiangqing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        footShow: true // true显示，false隐藏
      }
    },
    {
      path: '/goods/:id', // 动态传参
      name: 'goods',
      component: goods,
      meta: {
        footShow: false // true显示，false隐藏
      }
      // beforeEnter(to,from,next){
      //   console.log(to)
      // }
    },
    {
      path: '/xiangqing/:id',
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
    }
  ]
})
