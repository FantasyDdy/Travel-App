<template>
  <div class="header">
      <router-link to="/">
          <div class="iconfont header-back">&#xe685;</div>
      </router-link>
      城市选择
  </div>
</template>

<script>
export default {
    name:'CityHeader',
    data(){
        return{

        }
    },
}
</script>

<style lang="less" scoped>
    @import '~styles/variables';

    .header{
        overflow: hidden;
        height: @headerHeight;
        line-height: @headerHeight;
        text-align: center;
        color: white;
        background-color: @bgcolor;
        font-size: 0.32rem;
        position: relative;;
        
        a{
            color: white;
            text-decoration: none;
        }
        .header-back{
            position: absolute;
            top: 0;
            left: 0;
            width: 0.64rem;
            font-size: 0.4rem;
        }
    }
</style>