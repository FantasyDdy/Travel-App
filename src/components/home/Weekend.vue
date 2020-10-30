<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="(item) in list" :key="item.id">
                <div class="item-img-warpper">
                    <img :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
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
    @import '~styles/varibles.less';
    @import "~styles/mixins.less";
    .weekend-title{
        line-height: 0.8rem;
        text-indent: 0.2rem;
        background-color: #eeeeee;
    }
    ul{
        padding-inline-start:0;
        margin: 0;
        .item{
            .item-img-warpper{
                height: 0;
                padding-bottom: 37.09%;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .item-info{
                padding: 0.1rem;
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
            }
        }
    }
    li+li{
        border-top: 0.02rem solid #eeeeee;
    }
</style>