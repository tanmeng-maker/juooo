<template>
  <div>
    <header>
      <div @click="$router.go(-1)">
        <span>&lt;</span>
      </div>
      <div class="header-title">
        <img src="https://image.juooo.com/group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt />
        <div class="header-title-city">
          <span>南山文体中心</span>
          <span>74场在售演出</span>
        </div>
      </div>
      <div class="adress">
          <span>深圳|广东省深证市南山区南山大道</span>
      <span>
        <i class="iconfont icon-dingwei"></i>
      </span>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'Detail'
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 3.08rem;
  padding-top: 0.25rem;
  background: url(https://m.juooo.com/static/img/theater_detail_bg.png)
    no-repeat center;
  background-size: 100% 100%;
  span {
    color: #fff;
    font-size: 0.38rem;
    margin-left: 0.3rem;
  }
  .header-title {
    width: 100%;
    margin: 0.33rem 0 0 0.25rem;

    display: flex;
    img {
      display: block;
      height: 0.47 * 2rem;
      width: 0.47 * 2rem;
      border-radius: 50%;
    }
    .header-title-city {
      margin-left: 0.11rem;
      span:nth-child(1) {
        display: block;
        font-size: 0.18rem;
        font-weight: bold;
      }
      span:nth-child(2) {
        display: block;
        margin-top: 0.1rem;
        font-size: 0.12rem;
      }
    }
  }
  .adress{
      margin-top: 0.6rem;
      span:nth-child(1){
          font-size: 0.11rem;
      }
      span:nth-child(2){
          font-size: 0.29rem;
      }
  }
}
</style>