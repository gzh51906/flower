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

    <!-- 轮播图 -->
    <van-swipe class="goods-swipe" @change="onChange">
      <van-swipe-item v-for="(item,index) in goodslis.childimg" :key="index">
        <img :src="item" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>

    <!-- 商品介绍 -->
    <van-cell-group class="proinfo">
      <!-- 商品名称 -->
      <van-cell class="proinfo-head">
        <van-cell class="goods-name">
          <div class="goods-title">
            {{goodslis.Cpmc}}
            <span class="text-orange">{{goodslis.des}}</span>
          </div>
        </van-cell>
        <!-- 收藏按钮 -->
        <van-icon name="star-o" size="30" class="goods-collect" />
      </van-cell>

      <van-cell class="proinfo-body">
        <!-- 价格 -->
        <div class="goods-price">￥{{ goodslis.Price }}</div>
        <s>￥{{ goodslis.LinePrice }}</s>
        <div class="goods-sales">已售{{goodslis.sell}}件</div>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">材料</div>
        <div class="detailsinfo-item-desc">{{goodslis.Instro}}</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">配送</div>
        <div class="detailsinfo-item-desc">全国</div>
      </div>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" >客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" >加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" >立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      navShow: false,
      goodslis:{}
    };
  },
  //
  created() {
    // 创建阶段获取商品传来的id，以便使用axios请求数据
    let {id} = this.$route.params
    this.getData(id)


  },
  methods: {
    onClickCart() {
      console.log(this.$route)
      this.$router.push('cart');
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    onChange(index) { // 图片滑动轮播
      this.current = index;
    },
      // 以上均为组件自带方法


    // 二级导航显示隐藏
    showNav() {
      this.navShow = !this.navShow;
      // console.log(this.navShow)
    },
    // 返回上一级
    goback() {
      this.$router.go(-1);
    },

    // 接收商品传来的id并请求数据以及渲染到详情页
    async getData(id) {
      let goods = await this.$axios.post("https://www.easy-mock.com/mock/5d6a724b081c747c411d450d/home")
      .then(({ data: { Datas: { ProductPrices } } }) => {
        return ProductPrices;
      })
      // console.log('goods',goods)   state.cartlist = state.cartlist.filter(item=>item.goods_id!=id);
      let goodsli = goods.filter((item,index,goods)=>item.ItemCode === id)[0]

      this.goodslis = {
        Cpmc: goodsli.Cpmc,
        Instro: goodsli.Instro,
        ItemCode: goodsli.ItemCode,
        LinePrice: goodsli.LinePrice,
        Price: goodsli.Price,
        childimg: goodsli.childimg,
        des: goodsli.des,
        sell: goodsli.sell
      }



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
