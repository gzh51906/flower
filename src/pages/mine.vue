<template>
  <div id="box">
    <div>
      <van-nav-bar title="个人中心">
        <van-icon name="arrow-left" slot="left" />
      </van-nav-bar>
    </div>
    <!-- main部分 -->
    <section class="main">
      <!-- 登陆/注册按钮 -->
      <div class="userinformation">
        <div class="userinformation-notlogin">
          <p class="userinformation-notlogin-hi">Hi,欢迎来到花礼网</p>
          <p class="userinformation-notlogin-gologin">
            <!-- 登陆/注册 -->
            <van-button round size="large" type="default">登陆/注册</van-button>
          </p>
        </div>
      </div>

      <!-- 订单状态 -->
      <van-cell-group class="user-order">
        <van-cell value="全部订单" is-link class="my-order">
          <template slot="title">
            <span class="custom-title">我的订单</span>
          </template>
        </van-cell>
        <div class="order-button">
          <span class="order-button-one">
            <van-icon name="balance-pay" size="35px" info="0" />
            <p>待付款</p>
          </span>
          <span class="order-button-one">
            <van-icon name="logistics" size="35px" />
            <p>今日配送</p>
          </span>
          <span class="order-button-one">
            <van-icon name="records" size="35px" />
            <p>待评价</p>
          </span>
        </div>
      </van-cell-group>

      <!-- 用户面板 -->
      <van-cell-group class="user-panel">
        <van-call class="link-box">
          <span class="order-button-one">
            <van-icon name="paid" size="35px" info="0" />
            <p>优惠券</p>
          </span>
          <span class="order-button-one">
            <van-icon name="vip-card-o" size="35px" />
            <p>权益卡</p>
          </span>
          <span class="order-button-one">
            <van-icon name="balance-o" size="35px" />
            <p>余额</p>
          </span>
          <span class="order-button-one">
            <van-icon name="diamond-o" size="35px" />
            <p>会员积分</p>
          </span>
        </van-call>

        <!-- 第二栏 -->
        <van-call class="link-box">
          <span class="order-button-one">
            <van-icon name="location-o" size="35px" />
            <p>收货地址</p>
          </span>
          <span class="order-button-one">
            <van-icon name="birthday-cake-o" size="35px" />
            <p>生日纪念提醒</p>
          </span>
          <span class="order-button-one">
            <van-icon name="star-o" size="35px" />
            <p>待评价</p>
          </span>
          <span class="order-button-one">
            <van-icon name="underway-o" size="35px" />
            <p>浏览记录</p>
          </span>
        </van-call>
      </van-cell-group>

      <!-- 微信客服 -->
      <van-cell-group class="user-panel">
        <div class="kefu-body">
          <div class="kefu-left">
            <div class="kefu-img">
              <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <span>专属秘书|喜棠</span>
            </div>
            <div class="kefu-cont">
              Hi~，我是您的专属秘书喜棠，截图
              <img
                class="wxguanjia-finger"
                src="//img02.hua.com/m/images/finger-right.png"
              />
              右侧二维码添加我微信，帮您催单，有问题或需求时，1对1帮您走绿色通道处理。
            </div>
          </div>
          <div class="kefu-right">
            <img class="wxguanjia-code" src="https://img02.hua.com/wx_dl_qrcode/MyInfoWxQrcode.jpg" />
          </div>
        </div>
      </van-cell-group>

      <!-- 帮助/设置 -->
      <van-cell-group class="user-panel">
        <van-call class="link-box">
          <span class="order-button-one">
            <van-icon name="service-o" size="35px" />
            <p>联系客服</p>
          </span>
          <span class="order-button-one">
            <van-icon name="question-o" size="35px" />
            <p>帮助中心</p>
          </span>
          <span class="order-button-one">
            <van-icon name="info-o" size="35px" />
            <p>关于礼花</p>
          </span>
          <span class="order-button-one">
            <van-icon name="setting-o" size="35px" />
            <p>设置</p>
          </span>
        </van-call>
      </van-cell-group>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// p {
//   display: block;
//   margin-block-start: 1em;
//   margin-block-end: 1em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;
// }
#box{
  background: #f2f2f2;
}
.margin-LR {
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
}

.user {
  &-order {
    font-size: 15px;
    margin-top: -10px;
    width: auto;
    .margin-LR();
    .my-order {
      border-bottom: 1px solid #ccc;
    }
  }
  &-panel {
    margin-bottom: 15px;
    .margin-LR();
    .link-box {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #ccc;
      padding: 20px 0px;
      p {
        margin: 0px;
        font-size: 12px;
      }
    }
    // 客服
    .kefu-body {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
      padding: 0.71428571rem 0.5rem;
      font-size: 0;
      .kefu-left {
        flex: 1;
        padding-right: 0.28571429rem;
        .kefu-img {
          padding-left: 0.28571429rem;
          display: flex;
          align-self: center;
          span {
            font-size: 1rem;
            color: #232628;
            line-height: 2.28571429rem;
            margin-left: 0.64285714rem;
            vertical-align: top;
          }
        }
        .kefu-cont {
          position: relative;
          background-color: #a0e75a;
          margin-top: 0.42857143rem;
          padding: 0.42857143rem 0.42857143rem;
          font-size: 0.85714286rem;
          line-height: 1.28571429rem;
          color: #232628;
          border-radius: 0.28571429rem;
        }
      }
      .kefu-right {
        // flex: 1;
        width: 7.14285714rem;
        height: 7.14285714rem;
        .wxguanjia-code {
          width: 100%;
        }
      }
    }
  }
}
.main {
  background-image: url(/static/img/mine/backgroundv3.png);
  width: 100%;
  min-height: 9.28571429rem;
  background-repeat: no-repeat;
  background-size: 100% 9.42857143rem;
  background-position: top center;
  padding-bottom: 2.14285714rem;
  overflow: hidden;
}
.userinformation {
  height: 8rem;
}
.userinformation-notlogin {
  // width: 135px;
  margin: auto auto;
}
.userinformation-notlogin-hi {
  color: #fff;
  text-align: center;
}
.userinformation-notlogin-gologin {
//   // margin-top: 0.57142857rem;
  width: 40%;
  margin: 0 auto;
//   // text-align: center;
//   span {
//     display: block;
//     width: 9rem;
//     height: 2.57142857rem;
//     line-height: 2.57142857rem;
//     background-color: #fff;
//     border-radius: 4rem;
//     font-weight: 500;
//   }
}

.order-button {
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;

  p {
    margin: 0px;
    // font-size: 30px;
  }
}
.order-button-one {
  height: 100%;
  flex: 1;
  display: inline-block;
  text-align: center;
}
</style>
