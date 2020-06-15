<template>
  <div id="app">
    <!-- 保留组件状态 避免重新渲染 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
</style>
