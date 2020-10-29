<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="(item,index) in recommendList" :key="index">
                <img :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button>查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data(){
        return{
            recommendList: [{
                  id: "0001",
                  imgUrl: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
                  title: "故宫",
                  desc: "东方宫殿建筑代表，世界宫殿建筑典范"
                }, {
                  id: "0002",
                  imgUrl: "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
                  title: "南山滑雪场",
                  desc: "北京专业级滑雪圣地"
                }, {
                  id: "0003",
                  imgUrl: "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
                  title: "天安门广场",
                  desc: "我爱北京天安门，天安门上太阳升"
                }, {
                  id: "0004",
                  imgUrl: "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
                  title: "水立方",
                  desc: "中国的荣耀，阳光下的晶莹水滴"
                }, {
                  id: "0005",
                  imgUrl: "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
                  title: "温都水城养生馆",
                  desc: "各种亚热带植物掩映其间仿佛置身热带雨林"
            }],
        }
    }
}
</script>

<style lang='less' scoped>
    @import '~styles/varibles.less';
    @import "~styles/mixins.less";
    .recommend-title{
        line-height: 0.8rem;
        text-indent: 0.2rem;
        background-color: #eeeeee;
        margin-top: 0.1rem;
    }
    ul{
        padding-inline-start:0;
        margin: 0;
        .item{
            display: flex;
            height: 1.9rem;
            // background-color: red;
            overflow: hidden;
            .item-img{
                width: 1.7rem;
                height: 1.7rem;
                padding: 0.1rem;
            }
            img{
                width: 1.7rem;
                height: 1.7rem;
                padding: 0.1rem;
            }
            .item-info{
                flex:1;
                padding: 0.1rem;
                min-width: 0;
                // 在一个flex布局中，对于一个设置了flex属性设置为1的div容器，再对其设置min-width：0，保证内容不超出外层容器
                .item-title{
                    color: @drakTextColor;
                    line-height: 0.54rem;
                    font-size: 0.32rem;
                    .ellipsis()
                }
                .item-desc{
                    line-height: 0.4rem;
                    color: #cccccc;
                    .ellipsis()
                }
                button{
                    line-height: 0.44rem;
                    background-color: #ff9300;
                    padding: 0.02rem 0.1rem;
                    border-radius: 0.06rem;
                    border: none;
                    color: white;
                    margin-top: 0.2rem;                    
                }
            }
        }
    }
    li+li{
        border-top: 0.02rem solid #eeeeee;
    }
    
</style>