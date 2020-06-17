<template>
  <div>
    <!-- 票夹头部标题 -->
    <div id="header">
      <span>票夹</span>
      <!-- 票夹  ... -->
      <!-- i标签预留给 图标的位置 -->
      <div class="header-r">
        <img src="@/assets/img/dian.png" alt="">
      </div>
    </div>

    <div id="ticket">
      <img src="../../assets/img/ticket.png" alt=""/>
      <p>暂无电子票</p>
      <button @click="$router.push('/login')">登录</button>
    </div>

    <!-- 暂无电子票 -->
  </div>
</template>

<script>
export default {
  name: 'Ticket'
}
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 0.86rem;
  background: #fefefe;
  border-bottom: 0.01rem solid #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
#header span {
  text-align: center;
  height: 0.86rem;
  font: 0.34rem/.86rem '';
  color: #232323;
  position: absolute;
  left: 0;
  right: 0;
}
#header .header-r {
  width: 0.86rem;
  height: 0.86rem;
  margin-left: 6.56rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    margin: auto;
    width: 0.3rem;
    height: 0.3rem;
  }
}
#ticket {
  width: 100%;
  height: 100%;
}
#ticket img {
  width: 2rem;
  height: 1.53rem;
  margin-top: 3.83rem;
  margin-left: 2.75rem;
}
#ticket p {
  height: 0.72rem;
  display: block;
  font: 0.24rem/.72rem '';
  margin-top: 0.27rem;
  width: 2rem;
  margin-left: 2.75rem;
  text-align: center;
  color: #989898;
}
#ticket button {
  background: linear-gradient(-50deg, #ff4d4a, #ff9a34);
  width: 2.9rem;
  height: 0.8rem;
  text-align: center;
  font: 0.28rem/.8rem '';
  border-radius: 26.66667rem;
  margin-left: 2.3rem;
  color: #fff;
  margin-top: 0.83rem;
}
</style>