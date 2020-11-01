<template>
  <div class="header">
        <div id="header-left">
            <div class="iconfont back-icon">
                &#xe685;
            </div>
        </div>
        <div id="header-input">
            <span class="iconfont">&#xe67d;</span>
            输入城市/景点/游玩主题
        </div>
        <div id="header-right">
            <router-link to='/city'>
                <!-- {{this.$store.state.city}} -->
                <!-- 使用辅助函数简化写法 -->
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe688;</span>
            </router-link>
        </div>
  </div>
</template>

<script>
// 使用vuex的辅助函数简化对状态的写法   
import {mapState} from 'vuex'


export default {
    name:'HomeHeader',
    computed:{
        // mapState 函数返回的是一个对象,需要用对象展开运算符将它展开放入computed和本地computed混用
        ...mapState(['city']),
    }
}
</script>

<style lang='less' scoped>
    // 在css中想用别名前面需要加上 “~”
    // @import '~@/assets/styles/varibles.less';
    @import '~styles/variables.less';
    @import '~styles/mixins.less';

    .header{
        display: flex;
        height: @headerHeight;
        line-height: @headerHeight;
        background-color: @bgcolor;
        color: #fff;

        #header-left{
            width: 0.64rem;
            float: left;

            .back-icon{
                font-size: 0.4rem;
                text-align: center;
            }
        }

        #header-input{
            flex: 1;
            background-color: #fff;
            border-radius: 0.1rem;
            margin-top: 0.11rem;
            margin-left: 0.2rem;
            height: 0.63rem;
            color:#ccc;
            line-height: 0.64rem;
            padding-left: 0.2rem;
            .ellipsis()
        }

        #header-right{
            min-width: 1.04rem;
            padding: 0 0.1rem;
            float: right;
            text-align: center;
            a{
                color:white;
                text-decoration: none;
            }
        }

        .arrow-icon{
            margin-top: 2rem;
            margin-left: -0.05rem;
        }
    }
</style>