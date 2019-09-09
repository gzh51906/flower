<template>
  <div class="box">
    <div class="smbox">
      <h1>支付成功</h1>
      <h2>
        你将在
        <span style="color:red">{{time}}</span>秒后进入个人中心
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 0
    };
  },
  methods: {
    countDown() {   // 定义时间减少的方法
      let THIS = this;
      THIS.time--;
    }
  },
  mounted() {
    let THIS = this;
    THIS.time = 5;
    setInterval(THIS.countDown, 1000);
  },
  watch: {
    // 监视时间的变化
    time: function(newVal, oldVal) {
      if (newVal == 0) {
        this.$router.push('/mine');
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  background: skyblue;
  position: absolute;
  display:table;
}
.smbox {
   display:table-cell;vertical-align:middle
}
h1,h2{
  text-align: center;
}
</style>
