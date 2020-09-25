import Vue from "vue";
import VueRouter from "vue-router";
import Msite from "../views/Msite/Msite.vue";
import Order from "../views/Order/Order.vue";
import Profile from "../views/Profile/Profile.vue";
import Search from "../views/Search/Search.vue";
import Login from "../pages/Login.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
