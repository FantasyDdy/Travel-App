<template>
  <div class="detail">
      <detail-header></detail-header>
      <detail-banner :sightName='sightName' :bannerImg='bannerImg' :galleryImgs='galleryImgs'></detail-banner>
      <div class="height">
        <detail-list :categoryList='categoryList'></detail-list>
      </div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner.vue'
import DetailHeader from '@/components/detail/Header.vue'
import DetailList from '@/components/detail/List.vue'
import axios from 'axios'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data(){
        return{
            sightName:'', 
            bannerImg:'', 
            galleryImgs:[],
            categoryList:[],
            // 记录上一次浏览的id 判断是否需要重新发送新的ajax请求
            lastId:''
        }
    },
    methods:{
        getDetailInfo(){
            // 真实场景中ajax需要根据不同的url发送不同的请求数据
            axios.get('/api/detail.json',{
                // 获取动态路由的id，将它带给后端
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res){
            const resData = res.data;
            if(resData.ret && resData.data){
                const data = resData.data
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.galleryImgs = data.galleryImgs;
                this.categoryList = data.categoryList;
            }
        }
    },
    mounted(){
        this.getDetailInfo();
        this.lastId = this.$route.params.id
    },
    // 同样因为有了keep-alive缓存，detail页面mounted钩子只会执行一次，后面的detail页面展示不会重新请求ajax，我们需要用到activated钩子
    activated(){
        // 也同样判断前后浏览的id是否相同来决定是否重新请求ajax
        if(this.$route.params.id !== this.lastId){
            this.getDetailInfo();
            this.lastId = this.$route.params.id
        }
    }
}
</script>

<style lang="less" scoped>
    .height{
        height: 50rem;
    }
</style>