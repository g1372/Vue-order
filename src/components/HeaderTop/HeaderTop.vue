<!--  -->
<template>
  <header class="msite_header">
    <!-- 引入字体图标 --搜索-- -->
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2085780_ncj58pfpkrc.css" />
    <!-- 首页左侧的部件 -->
    <slot name="left"></slot>
    <a class="header_title">
      <span class="header_title_text">{{title}}</span>
    </a>
    <!-- 首页右侧的部件 -->
    <slot name="right"></slot>
  </header>
</template>

<script>
// title为传过来的值
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped lang='stylus'>
@import '../../assets/stylus/mixins.styl';

.msite_header {
  background-color: $dColor;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_search {
    position: absolute;
    left: 15px;
    top: 55%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .icon-sousuo {
      font-size: 18px;
      color: #fff;
    }
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;

    .header_title_text {
      font-size: 18px;
      color: #fff;
      display: block;
    }
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

    .header_login_text {
      color: #fff;
    }
  }
}

.header { // 头部公共css
  background-color: $dColor;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .iconfont {
      font-size: 22px;
      color: #fff;
    }
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
}
</style>