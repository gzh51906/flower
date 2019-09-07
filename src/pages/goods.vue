<template>
  <div class="goodslist">
    <van-nav-bar title="列表页">
      <div slot="left">
        <!-- 返回上一级 -->
        <van-icon name="arrow-left" @click="goback()"/>
      </div>
      <div slot="right">
        <van-icon name="service-o" />
        <van-icon name="orders-o" style="margin-left:20px;" />
      </div>
    </van-nav-bar>
    <van-tabs type="card" v-model="active" sticky title-active-color="#00FF40" animated>
      <van-tab v-for="(item,index) in goodslist1" :title="item" :key="index">
        <ul
          class="listbox"
          style="display:flex;flex-wrap:wrap; justify-content: space-between;padding:5px;"
        >
          <li
            style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;"
            v-for="item in goodslis" :key="item.ItemCode"
          >
            <img
              src="../../static/img/home/dong/yongsheng/1073033.jpg"
              style="width:170px;height:190px;display:block;"
            />
            <van-tag round type="warning">{{item.des}}</van-tag>
            <div
              style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
            >{{item.Cpmc}}</div>
            <p style="margin:0;">
              <span style="font-size:14px;color:red;">￥{{item.Price}}</span>
              <span style="font-size:10px;color:#ccc;text-decoration:line-through;">￥{{item.LinePrice}}</span>
            </p>
            <p style="margin:0;font-size:12px;color:#ccc;">已销售{{item.sell}}件</p>
            <van-icon
              name="shopping-cart-o"
              size="large"
              style="position:absolute;bottom:25px;right:20px;"
            />
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldurl:'',
      active: 0,
      goodslist1:["综合","销量","价格","新品","送女友","送男友","送朋友","送长辈"],
      goodslis:[{
      "ItemCode": "123",
      "Price": 198,
      "LinePrice": 298,
      "Cpmc": "星期耳钉礼盒",
      "Instro": "s925银个性耳钉",
      "imgurl": "../../static/img/home/dong/gifttuijian/1076062.jpg",
      "des": "人气爆款",
      "sell": "88"
      },
      {
      "ItemCode": "124",
      "Price": 198,
      "LinePrice": 298,
      "Cpmc": "星期耳钉礼盒",
      "Instro": "s925银个性耳钉",
      "imgurl": "../../static/img/home/dong/gifttuijian/1076062.jpg",
      "des": "人气爆款",
      "sell": "88"
      },
      {
      "ItemCode": "125",
      "Price": 198,
      "LinePrice": 298,
      "Cpmc": "星期耳钉礼盒",
      "Instro": "s925银个性耳钉",
      "imgurl": "../../static/img/home/dong/gifttuijian/1076062.jpg",
      "des": "人气爆款",
      "sell": "88"
      },
      {
      "ItemCode": "126",
      "Price": 198,
      "LinePrice": 298,
      "Cpmc": "星期耳钉礼盒",
      "Instro": "s925银个性耳钉",
      "imgurl": "../../static/img/home/dong/gifttuijian/1076062.jpg",
      "des": "人气爆款",
      "sell": "88"
      }]
    };
  },
  created() {
    // console.log(this.$route)
    // console.log("goods", this.$route);
    let {id} = this.$route.params;
    // this.getData(id);
  },
  methods:{
    goback() {
      console.log('this.$route',this.$route)
      // this.$router.push(this.$route.path)
      this.$router.go(-1)
    }
  },
  beforeRouterEnter(to,from,next) {
    console.log(to)
    console.log(from)
    // next(vm =>{
    //   vm.oldurl = from.path
    // })
  },
  mounted() {
    this.$nextTick(()=>{
       // 验证是否获取到了上页的url
       /* eslint-disable no-console */
       console.log('oldurl',this.oldurl)
     })
  }
};
</script>

<style scoped>
.van-nav-bar__left {
  color: #ccc;
}
.van-tabs {
  padding-top: 0px;
}
.listbox {
  background: #f2f2f2;
}
</style>
