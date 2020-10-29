<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="img in imgs" :key='img.id'>
                <img :src="img.imgUrl">
            </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return {
            imgs: [{
                    "id": "0001",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
                },{
                    "id": "0002",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
                },{
                    "id": "0003",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
                },{
                    "id": "0004",
                    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
                }],

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