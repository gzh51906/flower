<template>
  <div class="sort">
    <div class="sort_top">
      <!-- <van-nav-bar left-arrow @click-left="onClickLeft"/> -->
      <van-search placeholder="请输入搜索关键词" v-model="value"/>
    </div>
    <div class="sort_main">
      <van-sidebar v-model="activeKey" :class="change(activeKey)">
        <van-sidebar-item  :title="item" v-for="(item,index) in fenlei" :key="index"/>
        <div class="sort_main_right">
          <ul>
            <li></li>
          </ul>

        </div>
      </van-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      value: "",
      fenlei:["热门推荐","鲜花","永生花","蛋糕","巧克力","特色礼品","礼篮","绿植花卉"]
    };
  },
  methods: {
    change(activeKey) {

    },
    onClickLeft() {
      Toast("返回");
    }

  }
};
</script>

<style scoped>
body {
  background: #666;
}
/* .van-search{
  position: absolute;
  top:0;
  right:0;
  z-index: 99;
  width:90% ;
} */
/* .van-icon {
  color:#666;
} */
/* .sort_main_right{
  background: #000;
} */
</style>
