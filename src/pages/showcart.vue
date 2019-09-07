<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar>
      <van-icon name="arrow-left" color="#000" size="25px" slot="left" @click="goback()" />
      <!-- <van-image
        slot="title"
        class-prefix="nav-img"
        width="150px"
        height="20px"
        src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
      />-->
      <div slot="title">购物车</div>
      <van-icon name="wap-nav" color="#000" size="25px" slot="right" @click="showNav()" />
    </van-nav-bar>
    <!-- 二级导航 -->
    <van-col span="5" class="hidden-nav" v-if="navShow">
      <van-row type="flex" justify="space-around" align="center">
        <router-link :to="{path:'/home'}">
          <van-icon name="wap-home"></van-icon>首页
        </router-link>
      </van-row>
      <van-row type="flex" justify="space-around" align="center">
        <router-link :to="{path:'/sort'}">
          <van-icon name="search"></van-icon>分类
        </router-link>
      </van-row>
      <van-row type="flex" justify="space-around" align="center">
        <router-link :to="{path:'/cart'}">
          <van-icon name="shopping-cart-o"></van-icon>购物车
        </router-link>
      </van-row>
      <van-row type="flex" justify="space-around" align="center">
        <router-link :to="{path:'/mine'}">
          <van-icon name="smile-o"></van-icon>我的
        </router-link>
      </van-row>
    </van-col>

    <!-- 商品列表 -->
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <!-- 勾选框 -->
      <van-checkbox
        checked-color="#FF734C"
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <!-- 商品信息 -->
        <van-card
          :title="item.title"
          :desc="item.desc"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
        <!-- 商品数量 -->
        <div class="stepper" v-on:click.stop>
          数量
          <van-stepper v-model="item.num" step="1" button-size="22" />
        </div>
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      button-type="warning"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navShow: false,
      // 已勾选的商品的ID
      checkedGoods: ["1", "2"],
      goods: [
        {
          id: "10",
          title: "商品名字",
          desc: "快递信息,没有就为空",
          price: 3333333,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "1",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "2",
          title: "陕西蜜梨",
          desc: "约600g",
          price: 690,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
        },
        {
          id: "3",
          title: "美国伽力果",
          desc: "约680g/3个",
          price: 2680,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
        }
      ]
    };
  },
  computed: {
    // 结算按钮商品数量
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    // 购物车总价
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          // console.log(total),
          total +
          (this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * item.num
            : 0),
        0
      );
    }
  },
  methods: {
    // 二级导航显示隐藏
    showNav() {
      this.navShow = !this.navShow;
      console.log(this.navShow);
    },
    // 返回上一级
    goback() {
      this.$router.go(-1);
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast("点击结算");
    }
  }
};
</script>

<style lang="less" scoped>
.hidden-nav {
  position: absolute;
  right: 10px;
  top: 46px;
  z-index: 2;
  background: #fff;
  border-radius: 5px;
  .van-row {
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin: 10px 0px;
  }
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
  // 步进器
  .stepper {
    position: absolute;
    display: inline-block;
    font-size: 14px;
    width: 100px;
    right: 30px;
    bottom: 20px;
    // z-index: 2;
    .van-stepper {
      position: absolute;
      right: -20px;
      top: 0px;
      // background: red;
    }
  }
}
</style>
