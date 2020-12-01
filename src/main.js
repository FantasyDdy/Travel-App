import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 normalize.css
import 'normalize.css'
// 引入 vue-awesome-swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// 引入 阿里图标库
import 'styles/iconfont.css'

Vue.config.productionTip = false

//安装 vue-awesome-swiper 插件
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
