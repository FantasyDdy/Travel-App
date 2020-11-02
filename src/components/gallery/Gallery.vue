<template>
  <div class="container" @click="handleGalleryClick">
      <div class="wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in galleryImgs" :key="index">
                <img class="gallery-img" :src="item">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailGallery',
    props:{
        galleryImgs:{
            type:Array,
            default (){
                return []
            }
        }
    },
    data(){
        return{
            swiperOption: {
                // 显示分页器
                pagination: '.swiper-pagination',
                // 分页器样式类型为分式
                paginationType: 'fraction',
                autoplay: false,
                loop:true,

                // 因为一开始swiper是隐藏的，当再次显示的时候 swiper计算宽度会有问题，可以用如下方法是解决：
                // observer 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                observer:true,
                // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
                observeParents:true,
            }
        }
    },
    methods:{
        handleGalleryClick(){
            // 点击画廊周围背景触发关闭函数
            this.$emit('close');
        }
    }
}
</script>

<style lang="less" scoped>
    // 穿透swiper组件样式，设置显示超出的分页
    .container /deep/ .swiper-container{
        overflow: inherit;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        z-index: 2;

        .wrapper{
            // overflow: hidden;
            background: #fff;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            background-color: gray;

            .gallery-img{
                width: 100%;
            }

            .swiper-pagination{
                color: white;
                bottom: -1rem;
            }
        }
    }
</style>