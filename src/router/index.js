import Vue from "vue";
import VueRouter from "vue-router";

// import Msite from "../views/Msite/Msite.vue";
// import Order from "../views/Order/Order.vue";
// import Profile from "../views/Profile/Profile.vue";
// import Search from "../views/Search/Search.vue";
// router/index.js文件中 改变引入方式 实现路由组件懒加载
const Msite = () => import("../views/Msite/Msite.vue");
const Search = () => import("../views/Search/Search.vue");
const Order = () => import("../views/Order/Order.vue");
const Profile = () => import("../views/Profile/Profile.vue");

// 此时的Msite等都是返回路由组件的函数，只有请求对应的路由路径时(第一次)才会执行此函数并加载路由组件

import Login from "../pages/Login.vue";
import Shop from "../views/Shop/Shop.vue";
import ShopGoods from "../views/Shop/ShopGoods/ShopGoods.vue";
import ShopRatings from "../views/Shop/ShopRatings/ShopRatings.vue";
import ShopInfo from "../views/Shop/ShopInfo/ShopInfo.vue";

// 声明使用插件
Vue.use(VueRouter);

const routes = [
  {
    //重定向
    path: "/",
    redirect: "/msite",
  },
  {
    path: "/msite",
    component: Msite,
    meta: { isnotlogin: true },
  },
  {
    path: "/order",
    component: Order,
    meta: { isnotlogin: true },
  },
  {
    path: "/profile",
    component: Profile,
    meta: { isnotlogin: true },
  },
  {
    path: "/search",
    component: Search,
    meta: { isnotlogin: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { isnotlogin: false },
  },
  {
    path: "/shop",
    component: Shop,
    children: [
      {
        path: "/shop/goods",
        component: ShopGoods,
      },
      {
        path: "/shop/ratings",
        component: ShopRatings,
      },
      {
        path: "/shop/info",
        component: ShopInfo,
      },
      {
        path: "",
        redirect: "/shop/goods",
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch((err) => err);
};

export default router;
