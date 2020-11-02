<template>
  <div class="list">
      <div class="item" v-for="(item,index) in list" :key="index">

            <span class="item-icon"></span>
            {{item.title}}

            <!-- 递归组件，组件可以调用自身 -->
            <!-- 根据数据‘children’判断它是否为多级菜单 -->
            <div v-if='item.children'>
                <!-- 类似于父组件调用它，将item.children传递给递归组件 -->
                <detail-list :list='item.children'></detail-list>
            </div>

      </div>
  </div>
</template>

<script>
export default {
    name:'DetailList',  // name: 递归组件用到它比较多
    props:{
        list:Array
    },
}
</script>

<style lang="less" scoped>
    .item{
        line-height: 0.8rem;
        font-size: 0.32rem;
        padding: 0 0.2rem;

        .item-icon{
            position: relative;
            left: 0.06rem;
            top: 0.07rem;
            display: inline-block;
            width: 0.36rem;
            height: 0.36rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat;
            margin-right: 0.1rem;
            background-size: 0.4rem 3rem;
        }
    }
    .item:not(last-children){
        border-top: 1px solid #eeeeee;
    }
</style>