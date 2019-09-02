import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import sort from '../pages/sort.vue'
import cart from '../pages/cart.vue'
import mine from '../pages/mine.vue'

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
      component: home
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
