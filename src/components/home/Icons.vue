<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- 这个循环是用来表示展示多少个滑动页面 -->
            <swiper-slide v-for='(page,index) in pages' :key='index'>
                <!-- 这个循环是用来给滑动页放入icon -->
                <div class="icon" v-for='item in page' :key='item.id'>
                    <div class="icon-img">
                        <img :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    },
    data(){
        return{
            swiperOption: {
                autoplay: false
            }
        }
    },
    computed:{
        // 设置有多少个滑动页 （通过icon 的数量来形成一个二维数组，第一维表示滑动页，第二维表示每一页的icon数据）
        pages(){
            // 定义一个分页数组
            const pages = [];
            this.list.forEach((item,index) => {
                // 重点：利用 index 0~7 除以 8 向下取整数得零，来分页
                const page = Math.floor(index/8)
                // 判断 pages[page] 内是否有数据,无则让 pages[page] 初始化为一个第二维度的数组用于存放icon项
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            });
            return pages
        }
    }
}
</script>

<style lang='less' scoped>
    @import '~styles/varibles.less';
    @import '~styles/mixins.less';

    .icons /deep/ .swiper-container{
        overflow:visible;
        padding-bottom: 50%;
    }
    .icons{
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
        margin-top: 0.1rem;
        // background-color: grey;
        .icon{
            position: relative;;
            float: left;
            overflow: hidden;
            width: 25%;
            padding-bottom: 25%;
            // background-color: #999999;
            .icon-img{
                position: absolute; 
                top: 0;
                left: 0;
                right: 0;
                bottom: 0.44rem;
                box-sizing: border-box;
                padding: 0.1rem;
                img{
                    height: 100%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .icon-desc{
                position: absolute; 
                left: 0;
                right: 0;
                bottom: 0;
                height: 0.44rem;
                margin: 0;
                line-height: 0.44rem;
                text-align: center;
                color: @drakTextColor;
                .ellipsis()
            }
        }
    }
    
</style>