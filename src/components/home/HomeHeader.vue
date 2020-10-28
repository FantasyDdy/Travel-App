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
            城市
            <span class="iconfont arrow-icon">&#xe688;</span>
        </div>
  </div>
</template>

<script>    
export default {
    name:'HomeHeader'
}
</script>

<style lang='less' scoped>
    // 在css中想用别名前面需要加上 “~”
    // @import '~@/assets/styles/varibles.less';
    @import '~styles/varibles.less';
    
    .header{
        display: flex;
        height: 0.86rem;
        line-height: 0.86rem;
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
        }

        #header-right{
            width: 1.24rem;
            float: right;
            text-align: center;
        }

        .arrow-icon{
            margin-top: 2rem;
            margin-left: -0.05rem;
        }
    }
</style>