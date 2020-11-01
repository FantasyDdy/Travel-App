<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
            <div class="banner-info">
                    <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
                    <div class="banner-number">
                        <span class="iconfont banner-icon">&#xe61b;</span>
                        39
                    </div>
            </div>
        </div>
        <detail-gallery :imgs='imgs' v-show="showGallery" @close='closeGallery'></detail-gallery>
    </div>
</template>

<script>
import DetailGallery from '../gallery/Gallery'

export default {
    name:'DetailBanner',
    data(){
        return{
            showGallery:false,
            imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
                "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
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