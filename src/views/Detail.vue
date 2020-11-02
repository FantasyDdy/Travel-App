<template>
  <div class="detail">
      <detail-header></detail-header>
      <detail-banner></detail-banner>
      <div class="height">
        <detail-list :list='list'></detail-list>
      </div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner.vue'
import DetailHeader from '@/components/detail/Header.vue'
import DetailList from '@/components/detail/List.vue'

export default {
    name:'Detail',
    data(){
        return{
            list:[{
                title:'成人票',
                // 二级列表
                children:[{
                    title:'成人三馆联票',
                    // 三级列表 
                    children:[{
                        title:'成人三馆联票 - 杭州店'
                    },{
                        title:'成人三馆联票 - 上海店'
                    }]
                },{
                    title:'成人五馆联票'
                },]
            },{
                title:'学生票',
                children:[{
                    title:'成人三馆联票'
                },{
                    title:'成人五馆联票'
                },]
            },{
                title:'儿童票'
            },{
                title:'特惠票'
            }]
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
    }
}
</script>

<style lang="less" scoped>
    .height{
        height: 50rem;
    }
</style>