<template>
  <div id="app">
    <keep-alive>
      <router-view/>
      <!-- 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。 -->
    </keep-alive>
    <!-- <keep-alive exclude="Detail"> 则Detail组件不会被缓存，每当组件被keep-alive激活时，组件的mounted钩子都会被调用一次 -->
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
