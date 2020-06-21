<template>
  <div>
    <!-- 头部 -->
    <header>
      <div class="header-title">
        <i class="iconfont icon-arrow-ios-back" @click="$router.go(-1)"></i>
      </div>
      <div class="header-login-pic">
        <img src="https://m.juooo.com/static/img/login_logo.4a43235.png" alt />
      </div>
    </header>
    <div class="reset">
      找回密码
    </div>
    <!-- 手机号 -->
    <div class="phone">
      <input type="text" placeholder="请输入手机号/邮箱" />
      <input type="password" placeholder="请输入图形验证码" />
      <button>下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resetpassword'
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 2.43rem;
  .header-title {
    font-size: 0.5rem;
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
.reset{
  width: 100%;
  height: 1rem;
  margin-top: 0.5rem;
  margin-left: 0.63rem;
  font-weight: bold;
  font-size: 0.5rem;
}
.phone {
  width: 100%;
  height: 6.65rem;
  box-sizing: border-box;
  font-size: 0.29rem;
  margin-top: 0.5rem;
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
}
</style>