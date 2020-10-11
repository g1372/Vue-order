import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"; //1. 导入store
import { Button } from "mint-ui";
// 在main.js文件中引入并注册插件
import VueLazyload from "vue-lazyload";
import loading from "./assets/images/loading.gif";
Vue.use(VueLazyload, {
  // 内部自定义一个指令lazy
  loading,
});
import "./mock/mockServer.js"; // 加载mockServer即可
Vue.config.productionTip = false;
// 在main.js文件中引入注册的过滤器
// import "./filters";

// 注册全局组件标签
Vue.component(Button.name, Button); // <mt-button>

new Vue({
  router,
  store, //2. 把 store 对象提供给 “store” 选项
  render: (h) => h(App),
}).$mount("#app");
