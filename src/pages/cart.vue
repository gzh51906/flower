<template>
  <div>
    <van-nav-bar title="购物车"  id="qwe">
      <van-icon name="arrow-left" slot="left" @click="goback()"/>
    </van-nav-bar>
    <div class="emptycart">
      <img src="/static/img/mine/m_emptycart.png" alt="">
      <p>这里什么都没有呀...</p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    // 返回上一级
    goback() {
      this.$router.go(-1);
    },
  }

};
</script>

<style  lang="less" scoped>
#qwe {
  height:  50px;
  line-height:  50px;
  font-size:  18px;
}
.emptycart {
  text-align: center;
  width: 100%;
  padding-top: 44px;
  padding-bottom: 20px;
  font-size: 14px;
  border-bottom: 10px solid #e9ecf0;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
