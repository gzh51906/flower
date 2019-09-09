<template>
  <div class="sort">
    <div class="sort_top">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div class="sort_main">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item"
          v-for="(item,index) in fenlei"
          :key="index"
          :class="{active:index===activeIdx}"
          @click="changeIdx(index)"
        />
        <div
          class="sort_main_right"
          v-for="(item,index) in sortimg"
          :key="item.name"
          v-show="index===activeIdx"
        >

          <ul>
            <img :src="item.imgUrl" style="width:95%;height:88px;" />
            <li
              v-for="item in item.sming"
              :key="item.name"
              style="display:block;float:left;margin:10px 20px;"
              @click="gotolist(item.id)"
            >
            <router-link :to="{path:'/goods'}">
              <img
                :src="item.imgurl"
                style="display:inline-block;width:56px;height:56px;text-align:center;"
              />
              <p
                style="font-size: 0.85714286rem;
                font-weight: 300;
                line-height: 1.33333333;
                max-width: 6em;
                margin: 0.3rem auto 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align:center;"
              >{{item.name}}</p>
              </router-link>
            </li>
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
      activeIdx: 0,
      activeKey: 0,
      value: "",
      fenlei: [
        "热门推荐",
        "鲜花",
        "永生花",
        "蛋糕",
        "巧克力",
        "特色礼品",
        "礼篮",
        "绿植花卉"
      ],
      sortimg: [
        // 热门推荐
        {
          imgUrl: "../../static/img/hot/teacher.jpg",
          name: "热门推荐",
          sming: [
            {
              id:1,
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花"
            },
            {
              id:2,
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕"
            },
            {
              id:3,
              imgurl: "../../static/img/hot/business.jpg",
              name: "商务鲜花"
            },
            {
              id:4,
              imgurl: "../../static/img/hot/baseket.jpg",
              name: "礼篮"
            },
            {
              id:5,
              imgurl: "../../static/img/hot/chocolate.jpg",
              name: "巧克力"
            },
            {
              id:6,
              imgurl: "../../static/img/hot/gift.jpg",
              name: "特色礼品"
            },
            {
              id:7,
              imgurl: "../../static/img/hot/groupbuy.jpg",
              name: "企业团购"
            },
            {
              id:8,
              imgurl: "../../static/img/hot/plant.jpg",
              name: "绿植花卉"
            },
            {
              id:9,
              imgurl: "../../static/img/hot/sheji.jpg",
              name: "设计师款"
            },
            {
              id:10,
              imgurl: "../../static/img/hot/yongsheng.jpg",
              name: "永生花"
            }
          ]
        },
        // 鲜花
        {
          imgUrl: "../../static/img/xianhua/flower1.jpg",
          name: "鲜花",
          sming:[
            {
              id:11,
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              id:12,
              imgurl: "../../static/img/xianhua/use_aisi.jpg",
              name: "哀思鲜花"
            },
            {
              id:13,
              imgurl: "../../static/img/xianhua/use_brithday.jpg",
              name: "生日鲜花"
            },
            {
              id:14,
              imgurl: "../../static/img/xianhua/use_business.jpg",
              name: "商务鲜花"
            },
            {
              id:15,
              imgurl: "../../static/img/xianhua/use_zuhe.jpg",
              name: "鲜花"
            },
            {
              id:16,
              imgurl: "../../static/img/xianhua/use_world.jpg",
              name: "祝贺鲜花"
            },
            {
              id:17,
              imgurl: "../../static/img/xianhua/use_weiwen.jpg",
              name: "慰问鲜花"
            },
            {
              id:18,
              imgurl: "../../static/img/xianhua/use_wedding.jpg",
              name: "婚庆鲜花"
            },
            {
              id:19,
              imgurl: "../../static/img/xianhua/use_parent.jpg",
              name: "老师长辈"
            },
            {
              id:20,
              imgurl: "../../static/img/xianhua/use_love.jpg",
              name: "爱情鲜花"
            },
            {
              id:21,
              imgurl: "../../static/img/xianhua/use_firend.jpg",
              name: "友情鲜花"
            },
            {
              id:22,
              imgurl: "../../static/img/xianhua/use_daoqian.jpg",
              name: "道歉鲜花"
            }
          ]
        },
        //永生花
        {
          imgUrl: "../../static/img/yongshenghua/m_category_banner_ppf.jpg",
          name: "永生花",
          sming:[
            {
              id:23,
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              id:24,
              imgurl: "../../static/img/yongshenghua/m_category_ppf_feature.jpg",
              name: "特色永生花"
            },
            {
              id:25,
              imgurl: "../../static/img/yongshenghua/m_category_ppf_giantrose.jpg",
              name: "巨型玫瑰"
            },
            {
              id:27,
              imgurl: "../../static/img/yongshenghua/m_category_ppf_ping.jpg",
              name: "永生瓶花"
            },
            {
              id:28,
              imgurl: "../../static/img/yongshenghua/m_category_ppf_box.jpg",
              name: "经典花盒"
            }
          ]
        },
        // 蛋糕
        {
          imgUrl: "../../static/img/cake/m_category_banner_cake.jpg",
          name: "蛋糕",
          sming:[
            {
              id:29,
              imgurl: "../../static/img/cake/m_category_cake_21cake.jpg",
              // name: "one"
            },
            {
              id:30,
              imgurl: "../../static/img/cake/m_category_cake_bestcake.jpg",
              // name: "two"
            },
            {
              id:31,
              imgurl: "../../static/img/cake/m_category_cake_boncake.jpg",
              // name: "three"
            },
            {
              id:32,
              imgurl: "../../static/img/cake/m_category_cake_ganso.jpg",
              // name: "four"
            },
            {
              id:33,
              imgurl: "../../static/img/cake/m_category_cake_incake.jpg",
              // name: "five"
            },
            {
              id:34,
              imgurl: "../../static/img/cake/m_category_cake_lecake.jpg",
              // name: "six"
            },
            {
              id:35,
              imgurl: "../../static/img/cake/m_category_cake_mcake.jpg",
              // name: "seven"
            },
            {
              id:36,
              imgurl: "../../static/img/cake/m_category_cake_micamika.jpg",
              // name: "eight"
            },
            {
              id:37,
              imgurl: "../../static/img/cake/m_category_cake_vcake.jpg",
              // name: "nine"
            },
            {
              id:38,
              imgurl: "../../static/img/cake/m_category_cake_xfxb.jpg",
              // name: "ten"
            }
          ]
        },
        // 巧克力
        {
          imgUrl: "../../static/img/qiaokeli/m_category_banner_chocolate2.jpg",
          name: "巧克力",
          sming:[
            {
              id:39,
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              id:40,
              imgurl: "../../static/img/qiaokeli/m_category_chocolate_jinkou.jpg",
              name: "进口Felchi..."
            },
            {
              id:41,
              imgurl: "../../static/img/qiaokeli/m_category_chocolate_qiaokou.jpg",
              name: "巧蔻巧克力"
            },
            {
              id:42,
              imgurl: "../../static/img/qiaokeli/m_category_chocolate_qiaoluo.jpg",
              name: "巧罗巧克力"
            }
          ]
        },
        // 特色礼品
        {
          imgUrl: "../../static/img/tesegift/m_category_banner_gift.jpg",
          name: "特色礼品",
          sming:[
            {
              id:43,
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              id:44,
              imgurl: "../../static/img/tesegift/m_category_gift_music.jpg",
              name: "音乐盒"
            },
            {
              id:45,
              imgurl: "../../static/img/tesegift/m_category_chocolate_jinkou.jpg",
              name: "巧克力"
            },
            {
              id:46,
              imgurl: "../../static/img/tesegift/m_category_gift_crystal.jpg",
              name: "水晶内雕"
            },
            {
              id:47,
              imgurl: "../../static/img/tesegift/m_category_gift_daily_use.png",
              name: "家居生活"
            },
            {
              id:48,
              imgurl: "../../static/img/tesegift/m_category_gift_doll.jpg",
              name: "公仔/睡枕"
            },
            {
              id:49,
              imgurl: "../../static/img/tesegift/m_category_gift_giftcard.jpg",
              name: "礼品卡"
            },
            {
              id:50,
              imgurl: "../../static/img/tesegift/m_category_gift_gilt.jpg",
              name: "金箔花"
            },
            {
              id:51,
              imgurl: "../../static/img/tesegift/m_category_gift_invent.jpg",
              name: "摆件/其他"
            },
            {
              id:52,
              imgurl: "../../static/img/tesegift/m_category_gift_jewelry.jpg",
              name: "首饰/美妆"
            },
          ]
        },
        // 礼篮
        {
          imgUrl: "../../static/img/lilan/m_category_banner_baseket.jpg",
          name: "礼篮",
          sming:[
            {
              id:53,
              imgurl: "../../static/img/lilan/m_category_basket_basket.jpg",
              name: "礼篮"
            }
          ]
        },
        // 绿植花卉
        {
          imgUrl: "../../static/img/greenhua/m_category_banner_plant.jpg",
          name: "绿植花卉",
          sming:[
            {
              id:54,
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              id:55,
              imgurl: "../../static/img/greenhua/m_category_flower_hot_plant.jpg",
              name: "盆栽花卉"
            },
            {
              id:56,
              imgurl: "../../static/img/greenhua/m_category_plant_greenplant.jpg",
              name: "绿色植物"
            },
            {
              id:57,
              imgurl: "../../static/img/greenhua/m_category_plant_succulent.jpg",
              name: "多肉盆栽"
            }
          ]
        },

      ],

    };
  },
  methods: {
    changeIdx(index) {
      // console.log(index)
      this.activeIdx = index;
    },
    onClickLeft() {
      Toast("返回");
    },
    gotolist(id) {
      this.$router.replace({ name: "goods", params: { id } });
    },

  },
  created(){
    // console.log(this.$route)
    // console.log(item)
  },

};
</script>

<style scoped>
.sort_main_right {
  position: fixed;
  left: 86px;
  top: 54px;
  width: 100%;
  height:560px;
  overflow-y:auto
}
</style>
