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
          v-for="(item,index) in imghot"
          :key="item.name"
          v-show="index===activeIdx"
        >
          <ul>
            <img :src="item.imgUrl" style="width:100%;height:88px;" />

            <li
              v-for="item in item.smimg"
              :key="item.name"
              style="display:block;float:left;margin:10px 20px;"
            >
            <router-link :to="{path:'/home'}">
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
      imghot: [
        {
          imgUrl: "../../static/img/hot/teacher.jpg",
          name: "推荐",
          smimg: [
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花1"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕1"
            },
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花2"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕2"
            },
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花3"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕3"
            },
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花4"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕4"
            },
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花5"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕5"
            },
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花6"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕6"
            },
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花7"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕7"
            },
            {
              imgurl: "../../static/img/hot/flower.jpg",
              name: "鲜花8"
            },
            {
              imgurl: "../../static/img/hot/cake.jpg",
              name: "蛋糕8"
            },
          ]
        },
        {
          imgUrl: "../../static/img/xianhua/flower1.jpg",
          name: "鲜花"
        }
      ],

      imglist: []
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
  }
};
</script>

<style scoped>
body {
  background: #666;
}
.sort_main_right {
  position: fixed;
  left: 86px;
  top: 54px;
  width: 100%;
  height:560px;
  overflow-y:auto
}
a {
    text-decoraction:none;
}
.router-link-active {
    text-decoration:none;
}
</style>
