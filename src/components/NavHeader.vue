<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="/#/index/">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">天星科技</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">小爱开放平台</a>
          <a href="javascript:;">企业团购</a>
          <a href="javascript:;">资质证照</a>
          <a href="javascript:;">协议规则</a>
          <a href="javascript:;">下载app</a>
          <a href="javascript:;">智能生活</a>
          <a href="javascript:;">Select &nbsp; Location</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">欢迎您：{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录&nbsp;&nbsp;/&nbsp;&nbsp;注册</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart" v-if="username">
            <span class="icon-cart"></span>购物车({{ cartCount }})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index/"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>平板</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>路由器</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <div class="children" style="display: block">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <a class="clj" href="javascript:;">服务</a>
          </div>
          <div class="item-menu">
            <a class="clj" href="javascript:;">社区</a>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "NavHeader",
  data() {
    return {
      phoneList: []
    }
  },
  computed: {
    ...mapState(["username", "cartCount"])
  },
  // 过滤
  filters: {
    currency(val) {
      if (!val) return '0.00';
      return '￥' + val.toFixed(2) + '元';
    }
  },
  mounted() {
    this.getProductList();
    let params = this.$route.parmas;
    if (params && params.from == 'login') {
      this.getCartCount();
    }
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    getProductList() {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then((res) => {
        this.phoneList = res.list;
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res);
      });
    },
    logout() {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('账号已成功退出！');
        this.$cookie.set('userId', '', {expires: '-1'});
        this.$store.dispatch('saveUserName', '');
        this.$store.dispatch('saveCartCount', '0');
      })
    },
    goToCart() {
      this.$router.push('/cart');
    }
  },

};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.nav-topbar {
  height: 39px;
  line-height: 39px;
  background-color: $colorB;
  color: #b0b0b0;

  .container {
    @include flex();

    a {
      display: inline-block;
      color: #b0b0b0;
      margin-right: 17px;

      &:hover {
        color: $colorA;
      }
    }

    .my-cart {
      margin-right: 0px;
      width: 110px;
      background-color: $colorH;
      text-align: center;
      color: $colorA;
      font-size: 14px;
      font-weight: bolder;

      .icon-cart {
        @include bgImg(18px, 16px, './../../public/imgs/icon-cart.png');
        margin-right: 4px;
      }

      &:hover {
        background-color: $colorA;
        color: $colorG;

        .icon-cart {
          @include bgImg(18px, 16px, './../../public/imgs/icon-cart-hover.png');
        }
      }
    }
  }
}

.nav-header {
  position: relative;

  .container {
    height: 112px;
    @include flex();

    .header-menu {
      display: inline-block;

      .item-menu {
        display: inline-block;
        color: $colorB;
        font-weight: bold;
        font-size: 16px;
        line-height: 112px;
        margin-right: 20px;

        .clj {
          color: $colorB;
        }

        span {
          cursor: pointer;
        }

        &:hover {
          color: $colorA;

          .children {
            height: 220px;
            opacity: 1;
          }
        }

        .children {
          height: 220px;
          position: absolute;
          top: 112px;
          left: 0;
          width: 100%;
          z-index: 10;
          opacity: 0;
          height: 0;
          overflow: hidden;
          transition: height .5s;
          background: $colorG;
          border-top: 1px solid $colorH;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);

          .product {
            position: relative;
            float: left;
            width: 16.6%;
            font-size: 12px;
            line-height: 12px;
            text-align: center;

            img {
              height: 111px;
              width: auto;
              margin-top: 20px;
            }

            a {
              display: inline-block;
            }

            .pro-img {
              height: 137px;
            }

            .pro-name {
              font-weight: bolder;
              margin-top: 19px;
              margin-bottom: 8px;
              color: $colorB;
            }

            .pro-price {
              color: $colorA;
            }

            &:before {
              content: ' ';
              position: absolute;
              top: 28px;
              right: 0;
              border-left: 1px solid $colorF;
              height: 100px;
              width: 1px;
            }

            &:last-child:before {
              display: none;
            }
          }
        }
      }
    }

    .header-search {
      width: 319px;

      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;

        input {
          //display: none;
          box-sizing: border-box;
          width: 264px;
          height: 50px;
          border: none;
          padding-left: 14px;
          border-right: 1px solid #d3d3d3
        }

        a {
          @include bgImg(50px, 18px, './../../public/imgs/icon-search.png');
        }
      }
    }
  }
}
</style>
