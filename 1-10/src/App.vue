<template>
  <router-view class="page" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body,
#app,
.page {
  height: 100%;
  padding: 0;
  margin: 0;
}
div {
  box-sizing: border-box;
}

.el-input__wrapper {
  background-color: #d4e5ff !important;
}
.el-input__inner {
  color: #68b0fe !important;
}
.el-form-item__error {
  color: #fff !important;
  font-size: 16px !important;
}
.el-input__wrapper {
  padding: 0 !important;
  background-color: transparent !important;
}
.el-dialog__header {
  background-color: #66b1ff !important;
  margin-right: 0 !important;
}
.el-dialog__title {
  color: #fff !important;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #fff !important;
}
.el-dialog__headerbtn {
  top: 26px !important;
}
.el-input__inner,
.el-input__prefix-inner {
  padding-left: 10px !important;
}
</style>
