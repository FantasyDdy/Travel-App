<template>
  <ul class="list">
      <li class="item" 
      v-for="item in letters" 
      :key="item"
      :ref='item'
      @click="handleLetterClick"
      @touchstart.prevent='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
      >
      <!-- Vue.js 为 v-on 提供了事件修饰符，.prevent 阻止'touchstart'的默认行为，在移动端浏览时就不会发送页面跟着拖动的效果 -->
        {{item}}
      </li>
  </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
      cities:Object
    },
    data(){
      return{
        // 是否执行了Touch事件flag
        touchStatus:false,
        // 有无在16毫秒内执行touchmove事件 flag
        timer:null,
      }
    },
    computed:{
      // 从cities中提取英文字母存储为数组
      letters(){
        const letters = [];
        for(let i in this.cities){
            letters.push(i)
        }
        return letters
      }
    },
    methods:{
      // 点击相应的字母触发change事件，给父组件传递所点击的字母
      handleLetterClick(e){
        // console.log(e.target.innerText)
        this.$emit('change',e.target.innerText)
      },

      // 通过H5的touchmove事件和计算高度来达到获取当前手指滑动到的字母项
      handleTouchStart(){
        this.touchStatus = true;
      },
      handleTouchMove(e){
        /* 
        if(this.touchStatus){
          // 计算A元素与页面顶部的距离
          const startY = this.$refs['A'][0].offsetTop;

          // 计算手指滑动位置相对于页面顶部的距离 减去 页面banner的距离
          const touchY = e.touches[0].clientY -79;  // touches是touchmove事件的属性

          // 手指的位置减去A字母的位置再除以每个字母的高度
          const index = Math.floor((touchY - startY ) / 20);
          // console.log(index)  // 0,1,2,3.... 刚好是letters的下标

          // 通过下标对应的字母给父组件传递正确的字母项
          if(index >= 0 && index<this.letters.length){
            this.$emit('change',this.letters[index])
          }
        } */
        
        // 对touchMove事件优化性能
        // touchMove事件的执行频率很好高，做一个setTimeOut 来节流
        if(this.touchStatus){

          // 如果当前（上一次运算的16毫秒内）已经有TouchMove事件在执行，则结束当前TouchMove事件，执行本次TouchMove事件
          if(this.timer){
            clearTimeout(this.timer)  // clearTimeout() 方法可取消由 setTimeout() 方法设置的 timeout。
          }

          // 对TouchMove事件做一个8毫秒的节流
          this.timer = setTimeout(() => {
            const startY = this.$refs['A'][0].offsetTop;
            const touchY = e.touches[0].clientY -79;
            const index = Math.floor((touchY - startY ) / 20);

            if(index >= 0 && index<this.letters.length){
              this.$emit('change',this.letters[index])
            }
            
            // 16毫秒后还原timer flag，相当于本来实时计算，改成16ms计算一次，降低消耗
            this.timer = null;
          }, 16);
        }
      },
      handleTouchEnd(){
        this.touchStatus = false;
      }
    },
}
</script>

<style lang="less" scoped>
  @import url('~styles/variables.less');

  .list{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;
    
    .item{
      line-height: 0.4rem;
      text-align: center;
      color: @bgcolor;
    }
  }
</style>