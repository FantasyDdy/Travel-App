<template>
  <div class="detail">
      <detail-header></detail-header>
      <detail-banner></detail-banner>
      <div class="height"></div>
  </div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner.vue'
import DetailHeader from '@/components/detail/Header.vue'

export default {
    name:'Detail',
    data(){
        return{

        }
    },
    components:{
        DetailBanner,
        DetailHeader,
    }
}
</script>

<style lang="less" scoped>
    .height{
        height: 50rem;
    }
</style>