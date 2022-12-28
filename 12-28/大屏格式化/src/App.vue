<template>
  <div id="app">
    <router-view class="page" />
  </div>
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
  margin: 0;
  padding: 0;
  background-color: #1d1d1d;
}
li {
  list-style: none;
}
div {
  box-sizing: border-box;
}
// #dv-full-screen-container {
//   height: 100%;
//   width: 100%;
// }
</style>
