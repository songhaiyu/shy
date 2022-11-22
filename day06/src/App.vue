<template>
  <div id="app">
  
    <router-view class="page"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html,body,.page{
  height: 100%;
  margin: 0;
}
.el-dialog{
  width:66% !important;
}
.el-date-editor{
  margin-right: 20px !important;
}
</style>
