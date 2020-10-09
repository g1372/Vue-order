/*
vuex 的 mutations 模块
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
} from "./mutation-types";
// [方法名](state,{param}){}————实现更改state
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    //调度地址信息
    state.address = address;
  },
  [RECEIVE_SHOPS](state, { shoplist }) {
    //调度商品列表信息
    state.shoplist = shoplist;
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    //调度食品列表信息
    state.categorys = categorys;
  },
  //先import引入RECEIVE_USER_INFO
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
};
