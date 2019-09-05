<template>
  <div class="goodslist">
    <van-nav-bar title="列表页" left-arrow>
      <div slot="right">
        <van-icon name="service-o" />
        <van-icon name="orders-o" style="margin-left:20px;" />
      </div>
    </van-nav-bar>
    <van-tabs v-model="active" sticky line-height="0" title-active-color="orange">
      <van-tab v-for="(item,index) in goodslist1" :title="item" :key="index"></van-tab>
    </van-tabs>
    <van-tabs type="card" >
      <van-tab v-for="item in goodslist2" :key="item" :title="item">{{item}}</van-tab>
    </van-tabs>

      <ul style="display:flex;flex-wrap:wrap; justify-content: space-between;padding:5px;">
        <li style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;">
          <img
            src="../../static/img/home/dong/yongsheng/1073033.jpg"
            style="width:170px;height:190px;display:block;"
          />
          <van-tag round type="warning">热卖推荐</van-tag>
          <div
            style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
          >一生一世，井口借记卡啦啦啦，双色永生之花工商联康利达时间了</div>
          <p style="margin:0;" >
            <span style="font-size:14px;color:red;">￥398</span>
            <span style="font-size:10px;color:#ccc;text-decoration:line-through;">￥598</span>
          </p>
          <p style="margin:0;font-size:12px;color:#ccc;">已销售一万件</p>
          <van-icon name="shopping-cart-o" size="large" style="position:absolute;bottom:25px;right:20px;"/>
        </li>
        <li style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;">
          <img
            src="../../static/img/home/dong/yongsheng/1073033.jpg"
            style="width:170px;height:190px;display:block;"
          />
          <van-tag round type="warning">热卖推荐</van-tag>
          <div
            style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
          >一生一世，井口借记卡啦啦啦，双色永生之花工商联康利达时间了</div>
          <p style="margin:0;" >
            <span style="font-size:14px;color:red;">￥398</span>
            <span style="font-size:10px;color:#ccc;text-decoration:line-through;">￥598</span>
          </p>
          <p style="margin:0;font-size:12px;color:#ccc;">已销售一万件</p>
          <van-icon name="shopping-cart-o" size="large" style="position:absolute;bottom:25px;right:20px;"/>
        </li>
        <li style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;">
          <img
            src="../../static/img/home/dong/yongsheng/1073033.jpg"
            style="width:170px;height:190px;display:block;"
          />
          <van-tag round type="warning">热卖推荐</van-tag>
          <div
            style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
          >一生一世，井口借记卡啦啦啦，双色永生之花工商联康利达时间了</div>
          <p style="margin:0;" >
            <span style="font-size:14px;color:red;">￥398</span>
            <span style="font-size:10px;color:#ccc;text-decoration:line-through;">￥598</span>
          </p>
          <p style="margin:0;font-size:12px;color:#ccc;">已销售一万件</p>
          <van-icon name="shopping-cart-o" size="large" style="position:absolute;bottom:25px;right:20px;"/>
        </li>
      </ul>

    <div style="width:100%;height:1400px;background:greenyellow"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      goodslist1:["综合","销量","价格","新品"],
      goodslist2:["送女友","送男友","送朋友","送长辈"]
    };
  },
  created() {
    console.log("goods", this.$route);
  }
};
</script>

<style scoped>
.van-nav-bar__left {
  color: #ccc;
}
.van-tabs {
  padding-top:0px;
  /* border-top:1px solid #ccc; */
}
</style>
