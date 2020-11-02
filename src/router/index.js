import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/City.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // vue-router 滚动行为
  // 这段代码表示：对于所有路由导航，简单地让页面滚动到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
