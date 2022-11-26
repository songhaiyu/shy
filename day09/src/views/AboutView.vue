<template>
  <div class="about">
    <!-- 插值表达式//模板字符串//声明式渲染 -->
    <h1>{{meg}}</h1>
    <h1 v-bind:title="mcg">鼠标悬停</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      meg:'第六组',
      mcg:'页面加载与'+new Date().toLocaleString()
    }
  },
}
</script>
