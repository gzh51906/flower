<template>
  <div class="goods">
    <!-- 导航栏 -->
    <van-nav-bar>
      <van-icon name="arrow-left" color="#000" size="25px" slot="left" @click="goback()" />
      <van-image
        slot="title"
        class-prefix="nav-img"
        width="150px"
        height="20px"
        src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
      />
      <van-icon name="wap-nav" color="#000" size="25px" slot="right" @click="showNav()"/>
    </van-nav-bar>
    <!-- 二级导航 -->
    <van-col span="5" class="hidden-nav" v-if="navShow">
      <van-row type="flex" justify="space-around" align="center" >
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

    <!-- 轮播图 -->
    <van-swipe class="goods-swipe" @change="onChange">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>

    <!-- 商品介绍 -->
    <van-cell-group class="proinfo">
      <!-- 商品名称 -->
      <van-cell class="proinfo-head">
        <van-cell class="goods-name">
          <div class="goods-title">
            {{ goods.title }}
            <span class="text-orange">{{goods.text_orange}}</span>
          </div>
        </van-cell>
        <!-- 收藏按钮 -->
        <van-icon name="star-o" size="30" class="goods-collect" />
      </van-cell>

      <van-cell class="proinfo-body">
        <!-- 价格 -->
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        <s>{{ formatPrice(goods.fake_price) }}</s>
        <div class="goods-sales">已售{{goods.sold}}件</div>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">材料</div>
        <div class="detailsinfo-item-desc">{{goods.materials}}</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">配送</div>
        <div class="detailsinfo-item-desc">全国</div>
      </div>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      navShow: false,
      goods: {
        title: "-------------白字标题------------",
        text_orange: "----------------橙字标题---------------",
        price: 333333,
        fake_price: 444444,
        sold: 123123,
        materials: "这束花由什么花组成",
        thumb: [
          "/static/img/XiangQingTest/ff6b30c34870db5bfc65c5e39576c14.jpg",
          "/static/img/XiangQingTest/09e79a46c9517c166615f5ae5e74800.jpg",
          "/static/img/XiangQingTest/58c766263ba947d031bbbc4f34e0e42.jpg",
          "/static/img/XiangQingTest/6269989226fd414e950ec65ccad0bd1.jpg"
        ]
      }
    };
  },
  methods: {
    formatPrice(index) {
      return "¥" + (index / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    onChange(index) {
      this.current = index;
    },
    // 二级导航显示隐藏
    showNav() {
      this.navShow = !this.navShow;
      console.log(this.navShow)
    },
    // 返回上一级
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

 <style lang="less" scoped >
.van-nav-bar {
  .van-image {
    position: relative;
    top: 5px;
  }
}

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
// 轮播
.custom-indicator {
  border-radius: 10%;
  position: absolute;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  opacity: 0.8;
  right: 10px;
  bottom: 10px;
  width: 40px;
  text-align: center;
  background: #aaa;
}
.goods {
  padding-bottom: 50px;
  background: #f3f3f3;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}

.proinfo {
  margin-bottom: 5px;
  .proinfo-head {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    height: 70px;
    .goods-name {
      width: 80%;
      padding: 0;
      flex: 1;
      display: flex;
      display: inline-block;
      .goods-title {
        flex: 1;
        .text-orange {
          color: #ff734c;
        }
      }
    }
    .goods-collect {
      display: inline-block;
      position: relative;
      width: 14%;
      height: 100%;
      top: 25%;
      left: 2%;
      float: right;
    }
  }
  .proinfo-body {
    s {
      color: #bbb;
    }
    .goods-price {
      font-size: 1.42857143rem;
      color: #ff734c;
      font-weight: 600;
      display: inline-block;
    }
    .goods-sales {
      display: inline-block;
      position: relative;
      float: right;
      bottom: 0px;
      font-size: 12px;
      // right: 10px;
    }
  }
}
// 详细组成
.detailsinfo-item {
  font-size: 0.75714286rem;
  display: flex;
  height: 30px;
  line-height: 30px;
  &-title {
    text-align: center;
    color: red;
    flex: 0.2;
  }
  &-desc {
    flex: 0.8;
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>
