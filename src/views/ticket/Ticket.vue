<template>
  <div>
      <!-- 票夹头部标题 -->
         <div id="header">
          <span>票夹</span>
          <!-- 票夹  ... -->      <!-- i标签预留给 图标的位置 -->
          <div class="header-r"><i></i></div>
          </div>
    
      <div id="ticket">
          <img src="../../assets/img/ticket.png">
          <p>暂无电子票</p>
          <button>登录</button>
          </div>
  
      <!-- 暂无电子票 -->
  </div>
</template>

<script>
export default {
    name:"Ticket"
}
</script>
<style lang="scss" scoped>
html{font-size: 13.3333333vw;height: 100%;}
body{background: #fafafa;height: 100%;}
#header{ width: 100%;height: .86rem;background:#fefefe;border-bottom:.01rem solid #ebebeb;position:fixed;top:0;left: 0;right: 0;z-index:1;}
#header span{text-align: center;height:.86rem;font:.34rem/.86rem "" ; color:#232323;position: absolute;left: 0;right: 0;}
#header .header-r {width:.96rem;height:.86rem;margin-left:6.56rem; background: url("../../assets/img/dot.jpg") no-repeat center;}
#ticket {width: 100%;height: 100%;}
#ticket img {width:2.0rem;height: 1.53rem; margin-top: 3.83rem;margin-left: 2.75rem;}
#ticket p{height:.72rem;display: block;font: .24rem/.72rem "" ;margin-top: .27rem;width:2.0rem;margin-left: 2.75rem;text-align: center;color:#989898;}
#ticket button{background: linear-gradient(-50deg,#FF4D4A,#FF9A34);width: 2.90rem;height: .8rem;text-align: center;font:.28rem/.8rem "";border-radius: 26.66667rem;margin-left:2.3rem;color: #fff;margin-top:.83rem;}

</style>