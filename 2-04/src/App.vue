<template>
  <div id="app">
    <router-view class="page" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: STKaiti, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
html,
body,
.page {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
div {
  box-sizing: border-box;
}
.el-submenu__title {
  font-size: 18px !important;
}
.el-menu-item {
  font-size: 18px !important;
}

.el-pagination__total {
  font-size: 20px !important;
}
.el-pagination__sizes .el-input .el-input__inner,
.el-pager .number,
.el-pagination__jump {
  font-size: 15px !important;
}
.el-tree-node__label {
  font-size: 20px !important;
}
</style>
