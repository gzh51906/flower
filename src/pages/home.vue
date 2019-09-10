<template>
  <div class="home">
    <header class="headerbar">
      <div class="headerbar-left">
        <router-link :to="{path:'/sort'}">
          <van-icon name="apps-o" color="#fff" size="20" />
        </router-link>
      </div>
      <div class="headerbar-logo">
        <img src="../../static/img/home/jing/logo.png" />
      </div>
      <div class="headerbar-right">
        <van-icon name="service-o" color="#fff" size="20" />
      </div>
    </header>
    <van-swipe :autoplay="3000" indicator-color="orange">
      <van-swipe-item>
        <img src="../../static/img/home/jing/lunbo1.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../static/img/home/jing/lunbo2.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../static/img/home/jing/lunbo3.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../static/img/home/jing/lunbo4.jpg" />
      </van-swipe-item>
    </van-swipe>
    <div class="brand">
      <div class="brand_li" v-for="item in brand" :key="item.id">
        <p>
          <i>
            <van-icon name="checked" />
          </i>
          {{item}}
        </p>
      </div>
    </div>
    <div class="prolist">
      <div class="prolist_li" v-for="item in prolist" :key="item.id" @click="gotolist(item.id)">
        <img :src="item.imgurl" />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="teachganen">
      <img src="../../static/img/home/jing/mbanner_0903.png" />
    </div>
    <div class="xuanlibox">
      <div class="xuanli" v-for="item in xuanli" :key="item.id">
        <div class="xuanli_left">
          <p class="festival_name">{{item.name}}</p>
          <p class="festival_dec">{{item.dec}}</p>
          <p class="festival_price">￥{{item.price}}</p>
        </div>
        <div class="xuanli_right">
          <van-image :src="item.imgurl" />
        </div>
      </div>
    </div>
    <div class="jingxuan">
      <div class="one" style="padding:5px;">
        <i>
          <van-icon name="award" />
        </i>
        <span>一秒选花</span>
      </div>
      <div class="scene-list" style="display:flex;">
        <div class="scene-item" v-for="item in scenelist1" :key="item.id">
          <img :src="item.imgurl" />
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="scene-list1" style="display:flex;margin-top:10px;">
        <div class="scene-item1" v-for="item in scenelist2" :key="item.id">
          <img :src="item.imgurl" />
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="scene-list2" style="display:flex;margin-top:10px;">
        <div class="scene-item2" v-for="item in scenelist3" :key="item.id">
          <img :src="item.imgurl" />
          <span>{{item.name}}</span>
          <span>{{item.title}}</span>
          <span>
            <van-tag round type="warning">{{item.tags}}</van-tag>
          </span>
          <p>
            {{item.letta}}
            <span>{{item.oldprice}}</span>
          </p>
          <!-- <p>  // 删除线，，，加到价格上
              <span v-text="`$${item.letta}`"></span>
              <del
                style="margin-left:10px;font-size:14px;color: #ccc;"
                v-text="`$${item.zheprice}`"
              ></del>
          </p>-->
        </div>
      </div>
      <div class="scene-list3" style="display:flex;margin-top:10px;">
        <div class="scene-item3" v-for="item in scenelist4" :key="item.id">
          <img :src="item.imgurl" />
          <div>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>


    <!-- 可以点击跳转传参部分 -->
    <div class="productlist1">
      <h3 style="text-align:center;">送恋人/爱情鲜花</h3>
      <van-card
        style="border:1px solid #fff;border-radius: 5px;margin:20px 10px;box-shadow:0 5px 25px 0 rgba(0,0,0,0.2);"
        :origin-price="item.LinePrice"
        :desc="item.Instro"
        :title="item.Cpmc"
        :thumb="item.imgurl"
        v-for="item in aiqing"
        :key="item.ItemCode"
        @click="gotoxiangqing(item.ItemCode)"
      >
        <div slot="price" style="font-size:16px;">￥{{item.Price}}</div>
        <div slot="bottom">
          <span style="margin-right:30px;">已销售{{item.sell}}万件</span>
          <van-icon name="shopping-cart-o" size="large" />
        </div>
        <div slot="tags" v-if="changeTag(item)">
          <van-tag ref="des" type="danger">{{item.des}}</van-tag>
        </div>
      </van-card>

      <div style="text-align:center;margin-bottom:10px;">
        <van-button plain round size="mini" type="primary">查看更多</van-button>
      </div>
      <div class="btn" style="width:100%;height:10px;background:#F2F2F2;"></div>
    </div>

    <div class="productlist1">
      <h3 style="text-align:center;">送长辈鲜花</h3>
      <van-card
        style="border:1px solid #fff;border-radius: 5px;margin:20px 10px;box-shadow:0 5px 25px 0 rgba(0,0,0,0.2);"
        :origin-price="item.LinePrice"
        :desc="item.Instro"
        :title="item.Cpmc"
        :thumb="item.imgurl"
        v-for="item in zhangbei"
        :key="item.ItemCode"
      >
        <div slot="price" style="font-size:16px;">￥{{item.Price}}</div>
        <div slot="bottom">
          <span style="margin-right:30px;">已销售{{item.sell}}万件</span>
          <van-icon name="shopping-cart-o" size="large" />
        </div>
        <div slot="tags" v-if="changeTag(item)">
          <van-tag ref="des" type="danger">{{item.des}}</van-tag>
        </div>
      </van-card>

      <div style="text-align:center;margin-bottom:10px;">
        <van-button plain round size="mini" type="primary">查看更多</van-button>
      </div>
      <div class="btn" style="width:100%;height:10px;background:#F2F2F2;"></div>
    </div>

    <div class="productlist1">
      <h3 style="text-align:center;">永生花推荐</h3>
      <ul style="display:flex;flex-wrap:wrap; justify-content: space-between;padding:5px;">
        <li
          style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;"
          v-for="item in yongshenghua"
          :key="item.ItemCode"
        >
          <img :src="item.imgurl" style="width:170px;height:190px;display:block;" />
          <van-tag round type="warning" v-if="changeTag(item)">{{item.des}}</van-tag>
          <div
            style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
          >{{item.Cpmc}}</div>
          <p style="margin:0;">
            <span style="font-size:14px;color:red;">￥{{item.Price}}</span>
            <span
              style="font-size:10px;color:#ccc;text-decoration:line-through;"
            >￥{{item.LinePrice}}</span>
          </p>
          <p style="margin:0;font-size:12px;color:#ccc;">已销售{{item.sell}}万件</p>
          <van-icon
            name="shopping-cart-o"
            size="large"
            style="position:absolute;bottom:25px;right:20px;"
          />
        </li>
      </ul>
      <div style="text-align:center;margin-bottom:10px;">
        <van-button plain round size="mini" type="primary">查看更多</van-button>
      </div>
      <div class="btn" style="width:100%;height:10px;background:#F2F2F2;"></div>
    </div>

    <div class="productlist1">
      <h3 style="text-align:center;">蛋糕推荐</h3>
      <ul style="display:flex;flex-wrap:wrap; justify-content: space-between;padding:5px;">
        <li
          style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;"
          v-for="item in cake"
          :key="item.ItemCode"
        >
          <img :src="item.imgurl" style="width:170px;height:190px;display:block;" />
          <van-tag round type="warning" v-if="changeTag(item)">{{item.des}}</van-tag>
          <div
            style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
          >{{item.Cpmc}}</div>
          <p style="margin:0;">
            <span style="font-size:14px;color:red;">￥{{item.Price}}</span>
            <span
              style="font-size:10px;color:#ccc;text-decoration:line-through;"
            >￥{{item.LinePrice}}</span>
          </p>
          <p style="margin:0;font-size:12px;color:#ccc;">已销售{{item.sell}}万件</p>
          <van-icon
            name="shopping-cart-o"
            size="large"
            style="position:absolute;bottom:25px;right:20px;"
          />
        </li>
      </ul>
      <div style="text-align:center;margin-bottom:10px;">
        <van-button plain round size="mini" type="primary">查看更多</van-button>
      </div>
      <div class="btn" style="width:100%;height:10px;background:#F2F2F2;"></div>
    </div>

    <div class="productlist1">
      <h3 style="text-align:center;">礼品推荐</h3>
      <ul style="display:flex;flex-wrap:wrap; justify-content: space-between;padding:5px;">
        <li
          style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;"
          v-for="item in gift"
          :key="item.ItemCode"
        >
          <img :src="item.imgurl" style="width:170px;height:190px;display:block;" />
          <van-tag round type="warning" v-if="changeTag(item)">{{item.des}}</van-tag>
          <div
            style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
          >{{item.Cpmc}}</div>
          <p style="margin:0;">
            <span style="font-size:14px;color:red;">￥{{item.Price}}</span>
            <span
              style="font-size:10px;color:#ccc;text-decoration:line-through;"
            >￥{{item.LinePrice}}</span>
          </p>
          <p style="margin:0;font-size:12px;color:#ccc;">已销售{{item.sell}}万件</p>
          <van-icon
            name="shopping-cart-o"
            size="large"
            style="position:absolute;bottom:25px;right:20px;"
          />
        </li>
      </ul>
      <div style="text-align:center;margin-bottom:10px;">
        <van-button plain round size="mini" type="primary">查看更多</van-button>
      </div>
      <div class="btn" style="width:100%;height:10px;background:#F2F2F2;"></div>
    </div>

    <div class="productlist1">
      <h3 style="text-align:center;">巧克力推荐</h3>
      <ul style="display:flex;flex-wrap:wrap; justify-content: space-between;padding:5px;">
        <li
          style="width:170px;height:300px;border:1px solid #ccc;margin:10px 0px;border-radius:5px;position:relative;"
          v-for="item in qiaokli"
          :key="item.ItemCode"
        >
          <img :src="item.imgurl" style="width:170px;height:190px;display:block;" />
          <van-tag round type="warning" v-if="changeTag(item)">{{item.des}}</van-tag>
          <div
            style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;font-size:14px;font-weight:300;margin:5px 0px;"
          >{{item.Cpmc}}</div>
          <p style="margin:0;">
            <span style="font-size:14px;color:red;">￥{{item.Price}}</span>
            <span
              style="font-size:10px;color:#ccc;text-decoration:line-through;"
            >￥{{item.LinePrice}}</span>
          </p>
          <p style="margin:0;font-size:12px;color:#ccc;">已销售{{item.sell}}万件</p>
          <van-icon
            name="shopping-cart-o"
            size="large"
            style="position:absolute;bottom:25px;right:20px;"
          />
        </li>
      </ul>
      <div style="text-align:center;margin-bottom:10px;">
        <van-button plain round size="mini" type="primary">查看更多</van-button>
      </div>
      <div class="btn" style="width:100%;height:10px;background:#F2F2F2;"></div>
    </div>

    <div class="kongbai" style="width:100%;height:40px;"></div>
    <van-icon
      @click="backTop"
      ref="btn"
      v-if="isShow"
      name="upgrade"
      size="37"
      style="position:fixed;bottom:80px;right:10px;background:#fff;border-radius:20px;"
    />
  </div>
</template>

<script>
// let timer = null
export default {
  data() {
    return {
      brand: ["认证龙头企业", "14年品牌", "3小时送花", "最近300000条好评"],
      prolist: [
        {
          id: "0",
          name: "鲜花",
          imgurl: "../../static/img/home/jing/home_prolist_flower.png"
        },
        {
          id: "1",
          name: "永生花",
          imgurl: "../../static/img/home/jing/home_prolist_ppf.png"
        },
        {
          id: "2",
          name: "蛋糕",
          imgurl: "../../static/img/home/jing/home_prolist_cake.png"
        },
        {
          id: "3",
          name: "礼品",
          imgurl: "../../static/img/home/jing/home_prolist_gift.png"
        },
        {
          id: "4",
          name: "巧克力",
          imgurl: "../../static/img/home/jing/home_prolist_chocolate.png"
        }
      ],
      xuanli: [
        {
          id: "5",
          name: "送礼佳品",
          dec: "最佳教师节礼物",
          price: "298",
          imgurl: "../../static/img/home/jing/1061019.jpg"
        },
        {
          id: "6",
          name: "唯美永生花",
          dec: "进口绿色康乃馨",
          price: "198",
          imgurl: "../../static/img/home/jing/1073039.jpg"
        },
        {
          id: "7",
          name: "感恩花束",
          dec: "精选昆明花材",
          price: "168",
          imgurl: "../../static/img/home/jing/9012189.jpg"
        },
        {
          id: "8",
          name: "精美花篮",
          dec: "清晰淡雅田园风",
          price: "239",
          imgurl: "../../static/img/home/jing/9012332.jpg"
        }
      ],
      scenelist1: [
        {
          id: "9",
          name: "送恋人",
          imgurl: "../../static/img/home/jing/m_home_use_lover.png"
        },
        {
          id: "10",
          name: "送长辈",
          imgurl: "../../static/img/home/jing/m_home_use_elder.png"
        },
        {
          id: "11",
          name: "送朋友",
          imgurl: "../../static/img/home/jing/m_home_use_friends.png"
        }
      ],
      scenelist2: [
        {
          id: "12",
          name: "生日祝福",
          imgurl: "../../static/img/home/jing/m_home_use_birthday.png"
        },
        {
          id: "13",
          name: "表白求婚",
          imgurl: "../../static/img/home/jing/m_home_use_profess.png"
        },
        {
          id: "14",
          name: "开业商务",
          imgurl: "../../static/img/home/jing/m_home_use_business.png"
        },
        {
          id: "15",
          name: "周年纪念",
          imgurl: "../../static/img/home/jing/m_home_use_anniversary.png"
        }
      ],
      scenelist3: [
        {
          id: "16",
          name: "热销榜",
          title: "集万千宠爱",
          tags: "大家都在看",
          letta: "热销10.5万束",
          oldprice: "",
          imgurl: "../../static/img/home/jing/m_home_ranklist.png"
        },
        {
          id: "17",
          name: "特价专区",
          title: "超值好货",
          tags: "限时直降",
          letta: "￥132",
          oldprice: "￥188",
          imgurl: "../../static/img/home/jing/m_home_special.png"
        }
      ],
      scenelist4: [
        {
          id: "18",
          name: "新品来袭",
          imgurl: "../../static/img/home/jing/m_home_category_new.png"
        },
        {
          id: "19",
          name: "品位之选",
          imgurl: "../../static/img/home/jing/m_home_category_quality.png"
        },
        {
          id: "20",
          name: "设计师臻选",
          imgurl: "../../static/img/home/jing/m_home_category_you.png"
        }
      ],
      shouye: "",
      aiqing: "",
      zhangbei: "",
      yongshenghua: "",
      cake: "",
      gift: "",
      qiaokli: "",

      isShow: false
    };
  },

  mounted() {
    // 监听页面滚动距离
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    // 实例销毁时，移出监听滚动距离事件
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    // 判断鲜花的火爆标签
    changeTag(item) {
      if (!item.des == "") {
        return (this.$refs.des = true);
      } else {
        return (this.$refs.des = false);
      }
    },
    // 返回顶部方法
    backTop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed;
        if (this.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (this.scrollTop > 60) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
     // 写死（无数据），，，跳转到写死的列表页（虽然传参）
    gotolist(id) {
      this.$router.push({ name: "goods", params: { id } });
    },

    // 跳转详情页（带传参）
    gotoxiangqing(id) {
      // console.log(id)
      this.$router.push({ name: "xiangqing", params: { id } });
    }
  },

  // 请求数据
  async created() {
    let shuju = await this.$axios
      .get("http://localhost:1991/goods")
      .then(({data:{data}}) => {
        return data;
      });
      let shouye = shuju[0].Datas.ProductPrices;
      // console.log(shouye)
    this.aiqing = shouye.slice(0, 8);
    this.zhangbei = shouye.slice(8, 14);
    this.yongshenghua = shouye.slice(14, 18);
    this.cake = shouye.slice(18, 22);
    this.gift = shouye.slice(22, 26);
    this.qiaokli = shouye.slice(26, 30);
  }
};
</script>

<style scoped>
.headerbar {
  display: flex;
  background: #435448;
}
.headerbar-left {
  width: 62px;
  height: 48px;
  text-align: center;
  line-height: 48px;
}
.headerbar-right {
  width: 62px;
  height: 48px;
  text-align: center;
  line-height: 48px;
}
.headerbar-logo {
  flex-grow: 4;
  line-height: 48px;
}
.headerbar-logo img {
  display: inline-block;
  width: 250px;
  height: 20px;
}
.van-swipe-item img {
  display: block;
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
}
.brand {
  display: flex;
  /* margin-top:10px; */
}
.brand_li p {
  font-size: 0.75rem;
  text-align: center;
  margin: 0px 4px;
}
.prolist {
  display: flex;
  margin: 8px 0px;
}
.prolist_li {
  flex-grow: 1;
  text-align: center;
}
.prolist_li img {
  display: inline-block;
  width: 36px;
  height: 36px;
}
.prolist_li p {
  text-align: center;
  font-size: 0.85714286rem;
  margin: 0px 4px;
}
.teachganen img {
  display: block;
  width: 100%;
  height: 118px;
}
.xuanlibox {
  background: #fadbaf;
  padding: 2px 2px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.xuanli {
  display: flex;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid coral;
  background: #fff;
  margin: 5px 12px;
}
.xuanli_left {
  width: 90px;
}
.xuanli_right {
  width: 60px;
  height: 87px;
}
.xuanli .xuanli_left p {
  margin: 0px 0px;
}
.xuanli_right .van-image {
  height: 87px;
}
.xuanli .xuanli_left .festival_name {
  font-weight: 400;
  padding: 0.85714286rem 0 0 0.5rem;
}
.xuanli .xuanli_left .festival_dec {
  font-weight: 300;
  font-size: 0.7rem;
  color: #71797f;
  padding-left: 0.5rem;
}
.xuanli .xuanli_left .festival_price {
  font-weight: 500;
  padding-top: 0.85714286rem;
  color: #ff734c;
  padding-left: 0.5rem;
}
.scene-item {
  position: relative;
  margin: 0 4px;
}
.scene-item img {
  display: block;
  width: 117px;
  height: 130px;
}
.scene-item span {
  position: absolute;
  bottom: 3px;
  left: 33px;
  color: #fff;
}
.scene-item1 {
  position: relative;
  margin: 0 4px;
}
.scene-item1 img {
  display: block;
  width: 86px;
  height: 95px;
}
.scene-item1 span {
  position: absolute;
  top: 10px;
  left: 18px;
  font-size: 14px;
}
.scene-item2 {
  position: relative;
  margin: 0 10px;
  flex-grow: 1;
  border: 1px solid #ccc;
}
.scene-item2 img {
  display: block;
  width: 160px;
  height: 140px;
}
.scene-item2 span:nth-child(2) {
  position: absolute;
  top: 0px;
  left: 18px;
  font-size: 14px;
}
.scene-item2 span:nth-child(3) {
  position: absolute;
  top: 20px;
  left: 18px;
  font-size: 10px;
  color: #ccc;
}
.scene-item2 span:nth-child(4) {
  position: absolute;
  bottom: 15px;
  left: 18px;
  font-size: 14px;
}
.scene-item2 p {
  margin: 0;
  position: absolute;
  bottom: 15px;
  right: 18px;
  font-size: 10px;
}
.scene-item2 p > span {
  text-decoration: line-through;
  color: #ccc;
}
.scene-item3 {
  position: relative;
  margin: 0 4px;
}
.scene-item3 img {
  display: block;
  width: 117px;
  height: 130px;
}
.scene-item3 div {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  text-align: center;
  color: #fff;
  background: rgba(35, 38, 40, 0.8);
}
</style>
