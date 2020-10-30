<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="(item) in list" :key="item.id">
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
    props:{
        list:Array
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang='less' scoped>
    @import '~styles/variables.less';
    @import "~styles/mixins.less";
    .recommend-title{
        line-height: 0.8rem;
        text-indent: 0.2rem;
        background-color: #eeeeee;
        margin-top: 0.2rem;
    }
    ul{
        padding-inline-start:0;
        margin: 0;
        .item{
            display: flex;
            height: 1.9rem;
            // background-color: red;
            overflow: hidden;
            img{
                width: 1.7rem;
                height: 1.7rem;
                padding: 0.1rem;
            }
            .item-info{
                flex:1;
                padding: 0.1rem;
                // 在一个flex布局中，对于一个设置了flex属性设置为1的div容器，再对其设置min-width：0，保证内容不超出外层容器
                min-width: 0;
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