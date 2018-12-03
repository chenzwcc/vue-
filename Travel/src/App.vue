<!--
当文件为.vue结尾，vue把它当作vue的单文件组件 
单文件组件由三部分组成:
  1.<template></template>模版文件
  2.<script></script>逻辑
  3.<style></style> css样式
-->

<template>
  <div id="app">
    <keep-alive exclude="Detail">  <!--keep-alive作用是：对当前路由加载一次，当下次进行同样路由请求时会从内存中加载当前数据,exclude表示该组建不会被缓存-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
