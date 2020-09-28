/*
vuex 的 mutations 模块
*/
import {
    RECEIVE_ADDRESS
  } from './mutation-types'
  // [方法名](state,{param}){}————实现更改state
  export default {
    [RECEIVE_ADDRESS](state, { address }) {//调度地址信息
      state.address = address
    },
  }