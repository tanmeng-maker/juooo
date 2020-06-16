<template>
  <ul>
      <router-link to="/" tag="li" exact activeClass="active" class="index">
        <span class="iconfont icon-shouye"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/theater" tag="li" activeClass="active" class="theater">
        <span class="iconfont icon-theater"></span>
        <p>剧院</p>
      </router-link>
      <router-link to="/ticket" tag="li" activeClass="active" class="ticket">
        <span class="iconfont icon-ticket"></span>
        <p>票夹</p>
      </router-link>
      <router-link to="/my" tag="li" activeClass="active" class="my">
		<span class="iconfont icon-wode"></span>
        <p>我的</p>
      </router-link>
  </ul>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style lang="scss" scoped>
  .active{
    color: red;
  }
  ul{
    width: 7.5rem;
    height: 0.98rem;
    background: #fefefe;
    box-shadow: 0px 0px 2.5px #ebebeb;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
     li{
      flex: 1;
      height: 100%;
      text-align: center;
      padding-top: 0.11rem;
      span{
        font-size:0.4rem;
	    }
	    p {
		    margin-top: 0.15rem;
	    }
    }
  }
</style>