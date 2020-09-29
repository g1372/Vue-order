import Vue from "vue";
import Vuex from "vuex";

//导入四个模块文件
import state from './state'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);
// state相当于真实存放的位置货物
// mutitions相当取货的运输员
// actions相当于安排取货的管理
export default new Vuex.Store({
  state,
  mutations,
  actions,
});
