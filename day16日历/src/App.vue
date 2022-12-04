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
  height: 100%;
}

html,
body,
.page {
  height: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
}
div {
  box-sizing: border-box;
}
.current{
  height: 130px !important;
}
</style>
