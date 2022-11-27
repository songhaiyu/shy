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
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
  background-repeat: no-repeat;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-size: 24px !important;
  list-style: none;
  font-family: "Yanone Kaffeesatz", sans-serif;
}
</style>
