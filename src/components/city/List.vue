<template>
    <div class="list" ref='wrapper'>
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for='item in hotCities' :key='item.id'>
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for='(item,key) in cities' :key='key'>
                <div class="title">{{key}}</div>
                <div class="item-list">
                    <div class="item" v-for="innerItem in item" :key='innerItem.id'>
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入 better-scroll 组件
import BScroll from 'better-scroll'

export default {
    name:'Citylist',
    props:{
        hotCities:Array,
        cities:Object
    },
    data(){
        return{
            
            }
    },
    mounted(){
        let wrapper = this.$refs.wrapper;
        let scroll = new BScroll(wrapper)
    }
}
</script>

<style lang="less" scoped>
    @import '~styles/variables.less';
    
    .list{
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        .title{
            line-height: 0.54rem;
            background-color: #eeeeee;
            padding-left: 0.2rem;
            color: #666666;
            font-size: 0.26rem;
            border-bottom: 1px solid #cccccc ;
        }
        .button-list{
            padding: 0.1rem 0.6rem 0.1rem 0.2rem;
            overflow: hidden;

            .button-wrapper{
                width: 33.33%;
                float: left;
                
                .button{
                    padding: 0.1rem 0;
                    text-align: center;
                    margin: 0.1rem;
                    border: 0.02rem solid #ccc;
                    border-radius: 0.06rem;
                }
            }
        }
    }
    
    .item-list{
        
        .item{
            line-height: 0.76rem;
            color:#666666;
            padding-left: 0.2rem;
        }
        .item + .item{
            border-top: 1px solid #ccc;
        }
    }
</style>