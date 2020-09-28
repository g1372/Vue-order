import Vue from "vue";
import Vuex from "vuex";

//导入四个模块文件
import state from './state'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
