/*
 *Action:通过操作mutation间接更新state的多个方法的对象
 *Action 可以包含任意异步操作。
 */

// 注意要引入api接口函数
import { reqAddress } from '../api'
import {
  RECEIVE_ADDRESS
} from './mutation-types'
export default {
  // 1.异步获取地址
  async getAddress({ commit, state }) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
    const geohash = state.latitude + ',' + state.longitude
    // 1. 发送异步ajax请求
    const result = await reqAddress(geohash)
    // 2. 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },
  // 2.异步获取食品分类列表
  // 3.异步获取商家列表
}
