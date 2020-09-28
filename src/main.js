import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"; //1. 导入store

Vue.config.productionTip = false;

new Vue({
  router,
  store, //2. 把 store 对象提供给 “store” 选项
  render: (h) => h(App),
}).$mount("#app");
