<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <!-- <test></test> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import test from '@/components/home/test.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    test
  }
}
</script>
