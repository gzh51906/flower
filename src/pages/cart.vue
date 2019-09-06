<template>
  <div>
    <van-nav-bar title="购物车" id="qwe">
      <div  slot="left">
        <router-link :to="{path:'/home'}">
          <van-icon name="arrow-left" />
        </router-link>
      </div>
    </van-nav-bar>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#qwe {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
}
</style>
