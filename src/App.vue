<template>
  <div id="app">
    <!-- 缓存组件状态，避免重新渲染 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <TabBar v-if="$route.meta.TabBarShow"/>
  </div>
</template>
<script>
import TabBar from "@/components/tabBar/TabBar";
export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>
<style lang="scss">
</style>
