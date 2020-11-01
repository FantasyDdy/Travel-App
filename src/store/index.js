import Vue from 'vue'
import Vuex from 'vuex'
// 引入state，mutations 模块
import state from "./state";
import mutations from "./mutations";

Vue.use(Vuex)



export default new Vuex.Store({
  /* state: {
    
  }, */
  // 为了提高可维护性将index.js文件模块化
  // state:state,
  // Es6 键值名一样可以省略写：
  state,

  /* mutations: {
    
  }, */
  // 同样将mutations也模块化
  mutations,

  actions: {
  },
  modules: {
  }
})
