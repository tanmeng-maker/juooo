<template>
  <div>
    <div class="login">
      <!-- 头部 -->
      <header class="header">
        <div class="header-title" @click="goback()">
          <i class="iconfont icon-arrow-ios-back"></i>
        </div>
        <div class="header-login-pic">
          <img src="https://m.juooo.com/static/img/login_logo.4a43235.png" alt />
        </div>
      </header>
      <!-- 手机号 -->
      <div class="phone">
        <input type="text" placeholder="请输入手机号/邮箱" />
        <input type="password" placeholder="请输入密码" />
        <button>登&nbsp;录</button>
        <p>
          <span>忘记密码</span>
          <span>验证码登录/注册</span>
        </p>
      </div>
      <!--  其他方式登录  -->
      <div class="other">
        <span>其他方式登录</span>
        <a href="http://www.baidu.com">
          <p>
            <i class="iconfont icon-logo-qq" :style="{ color: 'green', fontSize: '0.7rem'}"></i>
            <i class="iconfont icon-weibo" :style="{color: 'red',fontSize: '0.7rem'}"></i>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      Login:false
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/inonfont.css';
.header {
  width: 100%;
  height: 2.43rem;
  .header-title {
    height: 0.55rem;
    padding: 0.22rem 0 0 0.38rem;
  }
  .header-login-pic {
    width: 100%;
    height: 1.02rem;
    margin-top: 0.85rem;
    box-sizing: border-box;
    img {
      width: 3.21rem;
      height: 1.03rem;
      display: block;
      margin: 0 auto;
    }
  }
}
.phone {
  width: 100%;
  height: 6.65rem;
  box-sizing: border-box;
  font-size: 0.29rem;
  margin-top: 1rem;
  input {
    width: 6.23rem;
    margin: 0 auto;
    height: 1.13rem;
    color: #232323;
    font-weight: 500;
    display: block;
    border-bottom: 1px solid #797979;
  }
  button {
    margin-top: 0.88rem;
    margin-left: 0.63rem;
    width: 6.25rem;
    height: 1rem;
    border-radius: 30px;
    font-size: 0.33rem;
    font-weight: bold;
    color: #fefefe;
    background-color: #ffd1af;
  }
  p {
    color: #666666;
    margin-top: 0.45rem;
    span:nth-child(1) {
      margin-left: 0.65rem;
    }

    span:nth-child(2) {
      margin-left: 2.84rem;
    }
  }
}
.other {
  width: 4.7rem;
  height: 1.39rem;
  margin: 0 auto;
  text-align: center;

  span {
    font-size: 0.25rem;
    color: #b6b6b6;
  }
  p {
    display: flex;
    margin-top: 0.45rem;
    justify-content: space-around;
  }
}
</style>