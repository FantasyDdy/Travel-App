<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icons :list='iconList'></home-icons>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecommend from '@/components/home/Recommend.vue'
import HomeWeekend from '@/components/home/Weekend.vue'
import axios from 'axios'
import { mapState } from "vuex";

export default {
  name: 'Home',
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
      lastCity:''
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    
    // test
  },
  computed:{
    // 通过辅助函数获取vuex状态中的city属性
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      // 发送ajax请求时后面要加上city 因为一般页面是要根据城市的不同而重新加载的
      // 同时我们使用了keep-alive所以我们需要在 activated 生命周期钩子中调用这个ajax方法
        axios.get('/api/index.json?city=' + this.city).then(res=>{
          this.getHomeInfoSucc(res)
        })
    },
    getHomeInfoSucc(res){
      const resData = res.data;
      if(resData.ret && resData.data){
        const data = resData.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    } 
  },
  mounted(){
    // 当页面加载完毕后发送ajax请求
    this.getHomeInfo();

    // 当页面挂载完成后获取当前的城市
    this.lastCity = this.city
  },
  // activated 生命周期钩子被 keep-alive 缓存的组件激活时调用。
  activated(){
    // 当重新加载Home组件时判断当前城市是否于上一个城市不同
    if(this.lastCity !== this.city){
      // 改变则重新执行发送ajax请求的方法
      this.getHomeInfo();
      // 同时更新lastCity
      this.lastCity = this.city
    }
  }
}
</script>
