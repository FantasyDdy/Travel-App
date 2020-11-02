<template>
    <div>
        <!-- 圆点返回按钮 -->
        <div class="header-ads" v-show="showAbs">
            <router-link to="/" tag='div'>
                <div class="iconfont header-ads-back">&#xe685;</div>
            </router-link>
        </div>

        <!-- header -->
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/" tag="div">
                <div class="iconfont header-fixed-back">&#xe685;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return{
          showAbs:true,
          opacityStyle:{
              opacity: 0
          }
        }
    },
    methods:{
        // 当滚动页面时执行此事件
        handleScroll(){
            // 获取当前滚动的距离
            const top = document.documentElement.scrollTop;

            // 如果滚动距离大于50 则隐藏圆点返回按钮显示banner
            if(top > 50){
                // opacity的值随着高度变化而变化。当滚动距离达到140后，opacity的值恒为1，则banner一直显示
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;

                // 动态的给元素绑定css样式
                this.opacityStyle = {
                    // opacity:opacity,
                    opacity
                }
                this.showAbs = false;
            }else{
                this.showAbs = true;
            }
            // console.log('scroll')
        }
    },
    // 因为Detail组件也是通过被<keep-alive>组件包裹的<router-view>组件渲染出来的，所以Detail组件的页面一被渲染就会执行activated钩子
    // 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
    activated(){
        // 每一次渲染都会监听scroll事件
        window.addEventListener('scroll',this.handleScroll);
    },
    // 对全局事件的解绑
    // 因为在activated钩子中绑定的是一个window全局对象，当执行过这条语句后，其他页面滚动也会触发此监听语句。
    deactivated(){  //被 keep-alive 缓存的组件停用时调用改钩子
        // 当keep-alive停用此组件时，解绑全局事件
        window.removeEventListener('scroll',this.handleScroll);
    }
}
</script>

<style lang="less" scoped>
    @import url('~styles/variables.less');

    .header-ads{
        z-index: 2;
        position: absolute;
        left: 0.3rem;
        top: 0.2rem;
        width: 0.8rem;
        line-height: 0.8rem;
        border-radius: 0.4rem;
        background-color: rgba(0, 0, 0, 0.5);
        text-align: center;

        .header-ads-back{
            // position: absolute;
            color: white;
            top: 0;
            left: 0;
            // width: 0.64rem;
            font-size: 0.4rem;
        }
    }

    .header-fixed{
        z-index: 2;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: @headerHeight;
        line-height: @headerHeight;
        text-align: center;
        color: white;
        background-color: @bgcolor;
        font-size: 0.32rem;
        
        .header-fixed-back{
            position: absolute;
            top: 0;
            left: 0;
            width: 0.64rem;
            font-size: 0.4rem;
        }
    }
</style>