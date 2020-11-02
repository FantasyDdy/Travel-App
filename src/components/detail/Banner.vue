<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                    <div class="banner-title">{{this.sightName}}</div>
                    <div class="banner-number">
                        <span class="iconfont banner-icon">&#xe61b;</span>
                        {{this.galleryImgs.length}}
                    </div>
            </div>
        </div>
        <!-- 使用复用的过渡组件效果，将需要过度动画的组件作为其插槽 -->
        <fade-animation>
            <detail-gallery :galleryImgs='galleryImgs' v-show="showGallery" @close='closeGallery'></detail-gallery>
        </fade-animation>
    </div>
</template>

<script>
import DetailGallery from '../gallery/Gallery'
// 引入可复用的过渡动画组件
import FadeAnimation from '../fade/FadeAnimation'

export default {
    name:'DetailBanner',
    props:{
        sightName:String, 
        bannerImg:String, 
        galleryImgs:Array,
    },
    data(){
        return{
            showGallery:false,
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallery = true;
        },
        closeGallery(){
            this.showGallery = false;
        }
    },
    components:{
        DetailGallery,
        FadeAnimation
    }
}
</script>

<style lang="less" scoped>
    .banner{
        // 为了防止加载图片慢而引起页面抖动，同样加了如下代码：用css样式设置宽高比提前撑开区域
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        position: relative;

        .banner-img{
            width: 100%;
        }

        .banner-info{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display:flex;
            line-height: 0.6rem;
            color: white;
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
            
            .banner-title{
                flex: 1;
                font-size: 0.32rem;
                padding: 0 0.2rem;
            }

            .banner-number{
                height: 0.32rem;
                line-height: 0.32rem;
                padding: 0 0.4rem;
                margin-top: 0.14rem;
                border-radius: 0.2rem;
                background: rgba(0, 0, 0, 0.8);
                font-size: 0.24rem;

                .banner-icon{
                    font-size: 0.24rem;
                }
            }
        }
    }
</style>