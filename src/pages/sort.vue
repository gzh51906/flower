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
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕"
            },
            {
              imgurl: "../../static/img/hot/business.jpg",
              name: "商务鲜花"
            },
            {
              imgurl: "../../static/img/hot/baseket.jpg",
              name: "礼篮"
            },
            {
              imgurl: "../../static/img/hot/chocolate.jpg",
              name: "巧克力"
            },
            {
              imgurl: "../../static/img/hot/gift.jpg",
              name: "特色礼品"
            },
            {
              imgurl: "../../static/img/hot/groupbuy.jpg",
              name: "企业团购"
            },
            {
              imgurl: "../../static/img/hot/plant.jpg",
              name: "绿植花卉"
            },
            {
              imgurl: "../../static/img/hot/sheji.jpg",
              name: "设计师款"
            },
            {
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
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              imgurl: "../../static/img/xianhua/use_aisi.jpg",
              name: "哀思鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_brithday.jpg",
              name: "生日鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_business.jpg",
              name: "商务鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_zuhe.jpg",
              name: "鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_world.jpg",
              name: "祝贺鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_weiwen.jpg",
              name: "慰问鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_wedding.jpg",
              name: "婚庆鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_parent.jpg",
              name: "老师长辈"
            },
            {
              imgurl: "../../static/img/xianhua/use_love.jpg",
              name: "爱情鲜花"
            },
            {
              imgurl: "../../static/img/xianhua/use_firend.jpg",
              name: "友情鲜花"
            },
            {
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
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              imgurl: "../../static/img/yongshenghua/m_category_ppf_feature.jpg",
              name: "特色永生花"
            },
            {
              imgurl: "../../static/img/yongshenghua/m_category_ppf_giantrose.jpg",
              name: "巨型玫瑰"
            },
            {
              imgurl: "../../static/img/yongshenghua/m_category_ppf_ping.jpg",
              name: "永生瓶花"
            },
            {
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
              imgurl: "../../static/img/cake/m_category_cake_21cake.jpg",
              // name: "one"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_bestcake.jpg",
              // name: "two"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_boncake.jpg",
              // name: "three"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_ganso.jpg",
              // name: "four"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_incake.jpg",
              // name: "five"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_lecake.jpg",
              // name: "six"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_mcake.jpg",
              // name: "seven"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_micamika.jpg",
              // name: "eight"
            },
            {
              imgurl: "../../static/img/cake/m_category_cake_vcake.jpg",
              // name: "nine"
            },
            {
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
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              imgurl: "../../static/img/qiaokeli/m_category_chocolate_jinkou.jpg",
              name: "进口Felchi..."
            },
            {
              imgurl: "../../static/img/qiaokeli/m_category_chocolate_qiaokou.jpg",
              name: "巧蔻巧克力"
            },
            {
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
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_gift_music.jpg",
              name: "音乐盒"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_chocolate_jinkou.jpg",
              name: "巧克力"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_gift_crystal.jpg",
              name: "水晶内雕"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_gift_daily_use.png",
              name: "家居生活"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_gift_doll.jpg",
              name: "公仔/睡枕"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_gift_giftcard.jpg",
              name: "礼品卡"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_gift_gilt.jpg",
              name: "金箔花"
            },
            {
              imgurl: "../../static/img/tesegift/m_category_gift_invent.jpg",
              name: "摆件/其他"
            },
            {
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
              imgurl: "../../static/img/xianhua/all.jpg",
              name: "全部"
            },
            {
              imgurl: "../../static/img/greenhua/m_category_flower_hot_plant.jpg",
              name: "盆栽花卉"
            },
            {
              imgurl: "../../static/img/greenhua/m_category_plant_greenplant.jpg",
              name: "绿色植物"
            },
            {
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
    }

  },
  created(){
    // console.log(item)
  }
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
