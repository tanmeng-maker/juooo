<template>
  <div id="app">
    <!-- 缓存组件状态，避免重新渲染 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
</template>

<style lang="scss">
</style>
