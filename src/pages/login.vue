<template>
  <div class="login">
    <van-nav-bar
            title=""
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
    />
    <div class="hualogo">
      <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png">
    </div>
    <van-cell-group v-if="phone_type">
    <van-field  placeholder="请输入手机号码" v-model="phone" :ref="phone" />
    <van-field
            center
            placeholder="请输入短信验证码"
            v-model="password"
    >
    </van-field>
  </van-cell-group>
    <van-cell-group v-if="email_type">
      <van-field v-model="email" placeholder="请输入邮箱或者用户名" />
      <van-field
              v-model="password"
              center
              placeholder="请输入密码"
      >
      </van-field>
    </van-cell-group>
    <div>
      <span class="non_box"></span>
      <van-button type="primary" class="login_button" span="16" @click="code_phone">手机登录/注册</van-button>
      <span class="non_box"></span>
    </div>
    <van-nav-bar
            v-if= "phone_type"
            left-text="邮箱或者用户名登陆>"
            right-text="注册"
            @click-left="changetype"
            @click-right="onClickRight"
    />
    <van-nav-bar
            v-if= "email_type"
            left-text="电话号密码登录>"
            right-text="注册"
            @click-left="changetype"
            @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      phone_type: false,
      email_type: true,
      email: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    onClickLeft () {
      let path = this.$route.query
      this.$router.push(path)
    },
    async code_phone () {
      if (this.phone_type) {
        let {data} = await this.$axios.post('http://localhost:1906/user/login', {
          username: this.phone,
          password: this.password,
          email: this.email
        })
        if (data.code === 1) {
          let targetUrl = this.$route.query.targetUrl || '/mine'
          this.$router.push(targetUrl)
          this.$store.commit('login', data.data.authorization)
        } else {
          alert('用户名或密码错误')
        }
      } else if (this.email_type) {
        let {data} = await this.$axios.post('http://localhost:1906/user/login', {
          username: this.phone,
          password: this.password,
          email: this.email
        })
        if (data.code === 1) {
          let targetUrl = this.$route.query.targetUrl || '/mine'
          this.$router.push(targetUrl)
          this.$store.commit('login', data.data.authorization)
        } else {
          alert('用户名或密码错误')
        }
      }
    },
    changetype () {
      this.phone_type = !this.phone_type
      this.email_type = !this.email_type
    },
    onClickRight () {
      let id = this.$route.name
      let name = 'reg'
      this.$router.push({name, query: {name: id}})
    },


  }
}
</script>

<style scoped>
  .hualogo {
    width: 190px;
    height: 25px;
    margin: 12px auto 44px;
    font-size: 22px;
    text-align: center;
  }
  .hualogo img{
    width: 100%;
  }
  .login_button{
    margin-top:45px ;
    width: 92%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #fff;
    background: #ff734c;
    border: 1px solid #ff734c;
    font-size: 16px;
    box-shadow: 0 4px 8px 0 #ffb6a2;
    border-radius: 100px;
    outline: none;
    -webkit-appearance: none;
    /*-moz-appearance: none;*/
    /*appearance: none;*/
    transition: .3s;
  }
  .non_box{
    display: inline-block;
    height: 20px;
    width: 4%;

  }

</style>
