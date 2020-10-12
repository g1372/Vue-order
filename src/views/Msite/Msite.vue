<!--  -->
<template>
  <div>
    <section class="msite">
      <!-- 头部组件 -->

      <!-- title传回一个值 -->
      <headerTop :title="address.name">
        <!-- 左边的部件 -->
        <template v-slot:left>
          <span class="header_search">
            <i class="iconfont icon-iconfontsearch"></i>
          </span>
        </template>
        <!-- 右边的部件 -->
        <template v-slot:right>
          <router-link
            class="header_login"
            slot="right"
            :to="userInfo._id ? '/userinfo' : '/login'"
          >
            <span class="header_login_text" v-if="!userInfo._id">
              登录|注册
            </span>
            <!--如果已经登录则显示一个icon-->
            <span class="header_login_text" v-else>
              <i class="iconfont icon-denglu"></i>
            </span>
          </router-link>
        </template>
      </headerTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(categorys, index) in categorysArr" :key="index">
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(item, index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl + item.image_url" />
              </div>
              <span>{{ item.title }}</span>
            </a>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </nav>

      <!--首页附近商家-->
      <ShopList></ShopList>
    </section>
  </div>
</template>

<script>
// 导入组件

import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
// 导入轮播插件Swiper
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
//1.导入mapState 辅助函数
import { mapState } from "vuex";

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
        loop: true,
        autoplay: true,
      },
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },
  // 注册到components
  components: {
    HeaderTop,
    ShopList,
    // 注册轮播
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState(["address", "categorys"]), //映射 this.address 为 store.state.address
    ...mapState(["userInfo"]),
    categorysArr() {
      let arr = [];
      // 遍历categorys16条
      // 添加到第二维的数组
      let minarr = [];
      this.categorys.forEach((element) => {
        // 如果当前的小数组满八条，我们将它存进大数组
        // 逐条存入到小的数组
        if (minarr.length == 8) {
          minarr = [];
          arr.push(minarr);
        }
        if (minarr.length == 0) {
          arr.push(minarr);
        }
        // console.log(arr)
        minarr.push(element);
      });

      return arr;
    },
  },
};
</script>

<style lang='stylus' scoped>
@import '../../assets/stylus/mixins.styl';
@import '../../assets/stylus/reset.styl';

&.msite { // 首页
  width: 100%;

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

      .icon-iconfontsearch {
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

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: $dColor;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }

    .shop_container {
      margin-bottom: 50px;

      .shop_list {
        .shop_li {
          bottom-border-1px(#f1f1f1);
          width: 100%;

          >a {
            clearFix();
            display: block;
            box-sizing: border-box;
            padding: 15px 8px;
            width: 100%;

            .shop_left {
              float: left;
              box-sizing: border-box;
              width: 23%;
              height: 50px;
              padding-right: 10px;
              border-radius: 6px;

              .shop_img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }

            .shop_right {
              float: right;
              width: 77%;

              .shop_detail_header {
                clearFix();
                width: 100%;

                .shop_title {
                  float: left;
                  width: 200px;
                  color: #333;
                  font-size: 16px;
                  line-height: 16px;
                  font-weight: 700;

                  &::before {
                    content: '品牌';
                    display: inline-block;
                    font-size: 11px;
                    line-height: 11px;
                    color: #333;
                    background-color: #ffd930;
                    padding: 2px 2px;
                    border-radius: 2px;
                    margin-right: 5px;
                  }
                }

                .shop_detail_ul {
                  float: right;
                  margin-top: 3px;

                  .supports {
                    float: left;
                    font-size: 10px;
                    color: #999;
                    border: 1px solid #f1f1f1;
                    padding: 0 2px;
                    border-radius: 2px;
                  }
                }
              }

              .shop_rating_order {
                clearFix();
                width: 100%;
                margin-top: 18px;
                margin-bottom: 8px;

                .shop_rating_order_left {
                  float: left;
                  color: #ff9a0d;

                  .star { // 2x图 3x图
                    float: left;
                    font-size: 0;

                    .star-item {
                      display: inline-block;
                      background-repeat: no-repeat;
                    }

                    &.star-48 {
                      .star-item {
                        width: 20px;
                        height: 20px;
                        margin-right: 22px;
                        background-size: 20px 20px;

                        &:last-child {
                          margin-right: 0;
                        }
                      }
                    }

                    &.star-36 {
                      .star-item {
                        width: 15px;
                        height: 15px;
                        margin-right: 6px;
                        background-size: 15px 15px;

                        &:last-child {
                          margin-right: 0;
                        }
                      }
                    }

                    &.star-24 {
                      .star-item {
                        width: 10px;
                        height: 10px;
                        margin-right: 3px;
                        background-size: 10px 10px;

                        &:last-child {
                          margin-right: 0;
                        }
                      }
                    }
                  }

                  .rating_section {
                    float: left;
                    font-size: 10px;
                    color: #ff6000;
                    margin-left: 4px;
                  }

                  .order_section {
                    float: left;
                    font-size: 10px;
                    color: #666;
                    transform: scale(0.8);
                  }
                }

                .shop_rating_order_right {
                  float: right;
                  font-size: 0;

                  .delivery_style {
                    transform-origin: 35px 0;
                    transform: scale(0.7);
                    display: inline-block;
                    font-size: 12px;
                    padding: 1px;
                    border-radius: 2px;
                  }

                  .delivery_left {
                    color: #fff;
                    margin-right: -10px;
                    background-color: $dColor;
                    border: 1px solid $dColor;
                  }

                  .delivery_right {
                    color: $dColor;
                    border: 1px solid $dColor;
                  }
                }
              }

              .shop_distance {
                clearFix();
                width: 100%;
                font-size: 12px;

                .shop_delivery_msg {
                  float: left;
                  transform-origin: 0;
                  transform: scale(0.9);
                  color: #666;
                }

                .segmentation {
                  color: #ccc;
                }
              }
            }
          }
        }
      }
    }
  }
}

.swiper-container {
  --swiper-theme-color: #ff6600;
  --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
</style>