<template>
  <div>
    <van-nav-bar title="购物车"  id="qwe">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <div class="emptycart">
      <img src="/static/img/mine/m_emptycart.png" alt="">
      <p>这里什么都没有呀...</p>
    </div>
    <div class="guess">
            <div class="guess-title">猜你喜欢</div>
            <div class="guess-list">
                    <div class="guess-item">
                        <a href="/product/9010966.html">
                            <div class="guess-item-img">
                                <img src="/static/img/home/dong/elderflower/9012092.jpg" alt="">
                            </div>
                            <div class="guess-item-detail">
                                <div class="guess-item-info"><span class="guess-item-name">一往情深</span>·<span class="guess-item-desc">精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</span></div>
                                <div class="guess-item-price">¥239</div>
                            </div>
                        </a>
                    </div>
                    <div class="guess-item">
                        <a href="/product/9012177.html">
                            <div class="guess-item-img">
                                <img src="/static/img/home/dong/elderflower/9012189.jpg" alt="">
                            </div>
                            <div class="guess-item-detail">
                                <div class="guess-item-info"><span class="guess-item-name">不变的承诺</span>·<span class="guess-item-desc">99枝红玫瑰</span></div>
                                <div class="guess-item-price">¥569</div>
                            </div>
                        </a>
                    </div>
                    <div class="guess-item">
                        <a href="/product/9010011.html">
                            <div class="guess-item-img">
                                <img src="/static/img/home/dong/elderflower/9012201.jpg" alt="">
                            </div>
                            <div class="guess-item-detail">
                                <div class="guess-item-info"><span class="guess-item-name">一心一意</span>·<span class="guess-item-desc">玫瑰11枝，粉色勿忘我0.3扎</span></div>
                                <div class="guess-item-price">¥139</div>
                            </div>
                        </a>
                    </div>
                    <div class="guess-item">
                        <a href="/product/9012154.html">
                            <div class="guess-item-img">
                                <img src="/static/img/home/dong/elderflower/9012204.jpg" alt="">
                            </div>
                            <div class="guess-item-detail">
                                <div class="guess-item-info"><span class="guess-item-name">甜美公主</span>·<span class="guess-item-desc">白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝</span></div>
                                <div class="guess-item-price">¥369</div>
                            </div>
                        </a>
                    </div>
                    <div class="guess-item">
                        <a href="/product/9010877.html">
                            <div class="guess-item-img">
                                <img src="/static/img/home/dong/elderflower/9092149.jpg" alt="">
                            </div>
                            <div class="guess-item-detail">
                                <div class="guess-item-info"><span class="guess-item-name">致美丽的你</span>·<span class="guess-item-desc">红玫瑰11枝，满天星0.3扎，栀子叶0.5扎</span></div>
                                <div class="guess-item-price">¥138</div>
                            </div>
                        </a>
                    </div>
                    <div class="guess-item">
                        <a href="/product/9012112.html">
                            <div class="guess-item-img">
                                <img src="/static/img/home/dong/elderflower/9010736.jpg" alt="">
                            </div>
                            <div class="guess-item-detail">
                                <div class="guess-item-info"><span class="guess-item-name">温柔如你</span>·<span class="guess-item-desc">戴安娜粉玫瑰12枝，石竹梅7枝</span></div>
                                <div class="guess-item-price">¥202</div>
                            </div>
                        </a>
                    </div>
            </div>
            <div class="guess-bottom">
                <span>已经到底喽…</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
 
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
.guess {
  padding-bottom: 50px;
}
</style>
