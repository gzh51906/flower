<template>
  <div class="reg">
    <van-nav-bar
            title=""
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
    />
    <van-divider class="toptitle">{{email_type ? "邮箱注册" :"手机号注册"}}</van-divider>
    <div v-if="email_type">
        <van-cell-group  >
          <van-field
                  ref="email"
                  v-model="email"
                  placeholder="请输入邮箱"
          />
          <van-field
                  ref="password"
                  v-model="password"
                  type="password"
                  placeholder="请设置密码"
          />
        </van-cell-group>
        <van-cell-group >
          <van-field
                  style="height: 60px"
                  v-model="ran_password"
                  ref="ran_password"
                  clearable
                  placeholder="请输入右侧图形验证码"
          >
            <van-button slot="button" size="small" type="primary" @click.self="changenumber">{{rannum}}</van-button>
          </van-field>
        </van-cell-group>
        <div>
          <span class="non_box"></span>
          <button  class="reg_button" span="16" @click="code_text">注册</button>
          <span class="non_box"></span>
        </div>
      <div class="reg" >
        <div >
          <a  style="color: #ccc" @click="changetext">手机号码注册><i class="iconfont iconfont-arrow-right">
          </i>
          </a>
        </div>
      </div>
    </div>
    <div v-if="phone_type">
        <van-cell-group  >
          <van-field
                  ref="phone"
                  v-model="phone"
                  placeholder="请输入电话号码"
          />
          <van-field
                  ref="password"
                  v-model="password"
                  type="password"
                  placeholder="请设置密码"
          />
        </van-cell-group>
        <van-cell-group >
          <van-field
                  style="height: 60px"
                  v-model="checkpassword"
                  ref="checkpassword"
                  type="password"
                  placeholder="请确认密码"
          >
          </van-field>
        </van-cell-group>
        <div>
          <span class="non_box"></span>
          <button  class="reg_button" span="16" @click="code_text">注册</button>
          <span class="non_box"></span>
        </div>
      <div class="reg" >
        <div >
          <a @click="changetext" style="color: #ccc">邮箱注册><i class="iconfont iconfont-arrow-right">
          </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginVue from './login.vue';
export default {
  name: 'reg',
  data () {
    return {
      password: '',
      checkpassword: '',
      email: '',
      rannum: '',
      email_type: true,
      phone_type: false,
      phone: '',
      ran_password: ''
    }
  },
  methods: {
    onClickLeft () {
      let path = this.$route.query
      this.$router.push(path)
    },
    changenumber () {
      this.rannum = this.randomNum(1000, 10000)
    },
    randomNum (min, max) {
      let a = Math.floor(Math.random() * (max - min) + min)
      return a
    },
    // 判断true和false  跳转页面
    changetext () {
      this.email_type = !this.email_type
      this.phone_type = !this.phone_type
    },
    async reg_person () {




      let {data} = await this.$axios.post('http://localhost:1991/user/reg', {
        username: this.phone,
        email: this.email,
        password: this.password
      })


    },
    code_text () {
      if (/^1[3456789]\d{9}$/.test(this.phone) && this.password === this.checkpassword) {
        if (this.reg_person()) this.$router.push('mine')
      }
      if ((/^[0-9a-zA-Z_]{0,19}@[0-9a-zA-Z]{1,13}\.[com,cn,net]{1,3}$/).test(this.email) && this.ran_password == this.rannum) {
        // console.log('1111')
        this.reg_person()
      } else {
        this.password = ''
        this.ran_password = ''
        this.email = ''
      }
    }
  },
  created () {
    // console.log('1111')
    this.rannum = this.randomNum(1000, 10000)

  }
}
</script>

<style scoped>
  .toptitle{
    border: none;
    width: 190px;
    height: 25px;
    margin: 12px auto 44px;
    font-size: 22px;
    text-align: center;
    color: black;
  }
  .non_box{
    display: inline-block;
    height: 20px;
    width: 4%;

  }
  .reg_button{
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
.reg{
  font-size: 13px;
  text-align: center;
  width: 100%;
  color: #71797f;
  line-height: 36px;
  flex: 1;
  min-width: 0;
  text-decoration: none;
}
</style>
