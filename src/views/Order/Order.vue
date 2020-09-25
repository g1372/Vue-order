<!--  -->
<template>
  <div>
    <section class="order">
      <!-- 头部组件 -->
      <headerTop title="订单"></headerTop>
      <section class="order_no_login">
        <img src="../../assets/images/order/person.png" />
        <h3>登录后查看外卖订单</h3>
        <button>立即登陆</button>
      </section>
    </section>
  </div>
</template>

<script>
// 引入HeaderTop
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue";

export default {
  // 注册到components
  components: {
    HeaderTop,
  },
};
</script>

<style scoped lang='stylus'>
@import '../../assets/stylus/mixins.styl';

.order { // 订单
  width: 100%;

  .order_no_login {
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
    text-align: center;

    >img {
      display: block;
      width: 100%;
      height: 30%;
    }

    >h3 {
      padding: 10px 0;
      font-size: 17px;
      color: #6a6a6a;
    }

    >button {
      display: inline-block;
      background: $dColor;
      font-size: 14px;
      color: #fff;
      border: 0;
      outline: none;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
</style>