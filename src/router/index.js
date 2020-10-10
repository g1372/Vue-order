import Vue from "vue";
import VueRouter from "vue-router";
import Msite from "../views/Msite/Msite.vue";
import Order from "../views/Order/Order.vue";
import Profile from "../views/Profile/Profile.vue";
import Search from "../views/Search/Search.vue";
import Login from "../pages/Login.vue";
import Shop from "../views/Shop/Shop.vue";
import ShopGoods from "../views/Shop/ShopGoods/ShopGoods.vue";
import ShopRatings from "../views/Shop/ShopRatings/ShopRatings.vue";
import ShopInfo from "../views/Shop/ShopInfo/ShopInfo.vue";

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
