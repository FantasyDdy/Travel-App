<template>
    <!-- wrapper 用于撑开页面，防止页面的抖动 -->
    <div class="wrapper">
        <swiper :options="swiperOption" v-if='showSwiper'>
            <swiper-slide v-for="img in list" :key='img.id'>
                <img :src="img.imgUrl">
            </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
        list:Array
    },
    data(){
        return {
            swiperOption: {
                // 显示分页器
                pagination: '.swiper-pagination',
                // 可以点击分页器
                paginationClickable:true,
                // 可以循环切换
                loop:true,
                // 自动切换
                // autoplay: 3000,
            },
        }
    },
    computed:{
        // swiper 一开始是根据空数组创建的，等父组件ajax获取值后又重新渲染了一遍，导致默认幻灯片展示最后一页，此处做修复。
        showSwiper(){
                return this.list.length;
        }
    }
}
</script>

<style lang='less' scoped>
    // 穿透scoped 语法： 外层 /deep/ 第三方组件{css...} (stylus 用 “>>>”)
    .wrapper /deep/ .swiper-pagination-bullet-active{
            background-color: white !important;
    }
    .wrapper{
        // 设置图片宽高比例自适应 （用于当网速不快时，CSS可以撑开轮播图区域）
        width: 100%; 
        height: 0;
        padding-bottom: 31.25%;
        background-color: #eeeeee;
        // 或者也可也这样写：(考虑兼容性，才去上面的写法)
        /* width: 100%;
        height: 31.25vw;
        background-color: #eeeeee; */
        /* 
        重要知识点：
            当margin/padding取形式为百分比的值时，无论是left/right，还是top/bottom，都是以父元素的width为参照物的 
        why?
            W3C规范：
            请注意，在水平流中，“margin top”和“margin bottom”上的百分比是相对于包含块的宽度，
            而不是高度（在垂直流中，“margin left”和“margin right”是相对于高度，而不是宽度）。
            请注意，“padding top”和“padding bottom”上的百分比是相对于包含块的宽度，
            而不是高度（至少在水平流中；在垂直流中，它们是相对于高度的）。
        */
        
        .swiper-slide{
            img{
                width: 100%; 
            }
        }
    }
</style>