<template>
  <div>
      <header>
          <div @click="$router.go(-1)"><span>&lt;</span></div>

      </header>
  </div>
</template>

<script>
export default {
    name:"Detail"
}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 3.08rem;
    padding-top: 0.25rem;
    background: url(https://m.juooo.com/static/img/theater_detail_bg.png) no-repeat center ;
    background-size: 100% 100%;
    span{
        color:#fff;
        font-size: 0.38rem;
        margin-left: 0.3rem;
    }
}
</style>