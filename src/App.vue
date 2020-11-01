<template>
  <div id="app">
    <keep-alive>
      <!-- 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="less">
html{
  font-size: 50px;
  // 移动端300毫秒延迟的问题
  touch-action: manipulation;
}
body{
  font-size: 0.28rem;
}
*{
  margin: 0;
  padding: 0;
}
*:focus{
  // 选中时无轮廓
  outline: none;
}

</style>
