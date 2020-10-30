<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icons :list='iconList'></home-icons>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='weekendList'></home-weekend>
    
    <!-- <test></test> -->
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

// import test from '@/components/home/test.vue'

export default {
  name: 'Home',
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
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
  methods:{
    getHomeInfo(){
        axios.get('/api/index.json').then(res=>{
          this.getHomeInfoSucc(res)
        })
    },
    /* getHomeInfo(){
        axios.get('/mock/detail.json').then(this.getHomeInfoSucc)
    }, */
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
    this.getHomeInfo();
    // this.getName();
  }
}
</script>
