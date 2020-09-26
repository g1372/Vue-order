<template>
  <div id="app">
    <div id="nav">
      <!-- 上面的内容 -->
      <router-view></router-view>
      <!-- 底部导航 -->
      <FooterNav v-show="$route.meta.isnotlogin"></FooterNav>
    </div>
  </div>
</template>
<script>
// 组建引用
import FooterNav from "@/components/FooterNav/FooterNavss.vue";
import axios from "axios";
export default {
  // 注册到components
  components: {
    FooterNav,
  },
  async mounted() {
    console.log(123);
    const result = await axios.get("/api/index_category");
    console.log(result.data.data);
  },
};
</script>
<style lang="stylus">
@import url('./assets/stylus/reset.styl');
</style>
