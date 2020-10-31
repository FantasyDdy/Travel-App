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
            <div class="area" 
            v-for='(item,key) in cities' 
            :key='key'
            :ref='key'
            >
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
        cities:Object,
        letter:String,
    },
    mounted(){
        // 初始化 better-scroll组件
        // 给组件创建一个scroll 实例属性
        this.scroll = new BScroll(this.$refs.wrapper,{click: true});
    },
    // 监听到 letter 改变时，调用better-scoll 插件提供了 scrollToElement 方法达到滚动到对应字母城市的效果
    watch:{
        letter(){
            if(this.letter){
                // console.log(this.$refs[this.letter])
                // Vue官方ref: 当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。
                // 所以通过v-for 渲染出的ref都将以数组的形式注册引用信息

                const element = this.$refs[this.letter][0];
                // 引用信息数组是包含了对应DOM元素以及长度的二维数组，DOM元素位于这个二维数组的第零项
    
                // better-scoll 插件提供了 scrollToElement 方法
                this.scroll.scrollToElement(element)
            }
        }
    },
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