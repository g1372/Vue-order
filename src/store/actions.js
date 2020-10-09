/*
 *Action:通过操作mutation间接更新state的多个方法的对象
 *Action 可以包含任意异步操作。
 */

// 注意要引入api接口函数
import { reqAddress, reqShops, reqCategorys } from "../api";
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_USER_INFO,
} from "./mutation-types";

export default {
  // 1.异步获取地址
  async getAddress({ commit, state }) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
    const geohash = state.latitude + "," + state.longitude;
    // 1. 发送异步ajax请求
    const result = await reqAddress(geohash);
    // 2. 提交一个mutation
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {
        address,
      });
    }
    // 2.异步获取食品分类列表
    // 3.异步获取商家列表
  },
  async getShops({ commit, state }) {
    // 1. 发送异步ajax请求
    const result = await reqShops(state.latitude, state.longitude);
    // 2. 提交一个mutation
    if (result.code === 0) {
      const shoplist = result.data;
      commit(RECEIVE_SHOPS, {
        shoplist,
      });
    }
  },
  async getCategorys({ commit }) {
    // 1. 发送异步ajax请求
    const result = await reqCategorys();
    // 2. 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {
        categorys,
      });
    }
  },
  async setDemoValue({ commit }, demoValue) {
    // console.log(demoValue);
    
      commit(RECEIVE_USER_INFO, {
        userInfo: demoValue,
      });
    
  },
};
