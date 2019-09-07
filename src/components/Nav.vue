<template>
  <div class="nav">
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" route active-color="#FFA500" inactive-color="#000" v-if="this.$route.meta.footShow">
      <van-tabbar-item name="home"  to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item name="search"  to="/sort" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item name="setting"  to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="mine"  to="/mine" icon="smile-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style scoped>
/* .goods /deep/ .van-goods-action {
  z-index: 99;
}
.goods::-webkit-scrollbar {
        display:none;
    } */
</style>
