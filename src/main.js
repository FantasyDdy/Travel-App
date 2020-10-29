import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 vue-awesome-swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入 normalize.css
import 'normalize.css'
// 引入 阿里图标库
import 'styles/iconfont.css'
// 引入 vue-awesome-swiper 插件 Css
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

//安装 vue-awesome-swiper 插件
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
