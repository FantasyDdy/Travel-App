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
    data(){
        return{
            iconList: [{
                  id: "0001",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                  desc: "景点门票"
                }, {
                  id: "0002",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
                  desc: "滑雪季"
                }, {
                  id: "0003",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
                  desc: "泡温泉"
                }, {
                  id: "0004",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
                  desc: "动植园"
                }, {
                  id: "0005",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
                  desc: "游乐园"
                }, {
                  id: "0006",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
                  desc: "必游榜单"
                }, {
                  id: "0007",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
                  desc: "演出"
                }, {
                  id: "0008",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
                  desc: "城市观光"
                }, {
                  id: "0009",
                  imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
                  desc: "一日游"
                }],
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
            this.iconList.forEach((item,index) => {
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