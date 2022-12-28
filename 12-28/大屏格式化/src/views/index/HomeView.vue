<template>
  <div class="home">
    <!-- <dv-full-screen-container> -->
    <h1 style="margin: 0; color: #fff"><span>互联网产业全球布局看板</span></h1>
    <div class="top">
      <dv-decoration-8 style="width: 300px; height: 50px" />
      <dv-decoration-5 style="width: 600px; height: 50px" />
      <dv-decoration-8 :reverse="true" style="width: 300px; height: 50px" />
    </div>
    <!-- </dv-full-screen-container> -->

    <div class="content">
      <div class="left">
        <userNum />
        <ageNum />
        <facility />
        <sexNum />
        <newAdd />
        <hoting />
      </div>
      <div class="right">
        <today />
        <div class="map">
          <maps class="map-left" />
          <analyse class="map-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userNum from "../left/userNum.vue"
import ageNum from "../left/ageNum.vue"
import facility from "../left/facility.vue"
import sexNum from "../left/sexNum.vue"
import newAdd from "../left/newAdd.vue"
import hoting from "../left/hoting.vue"
import today from "../right/today.vue"
import analyse from "../right/analyse.vue"
import maps from "../right/maps.vue"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    userNum,
    ageNum,
    facility,
    sexNum,
    newAdd,
    hoting,
    today,
    analyse,
    maps
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  // #dv-full-screen-container {
  //   width: 100% !important;
  //   height: 100% !important;
  // }
}
.content {
  height: calc(100% - 100px);
  display: flex;
  box-sizing: border-box;
  // overflow: hidden;
  padding: 10px;
}
.top {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 10px 0 10px;
}
.right {
  width: 75%;
  height: 100%;
  padding-left: 10px;
}
.left {
  width: 25%;
  height: 100%;
}
.el-progress {
  margin: 10px 0 10px 0;
  border: 1px solid #424345;
}
h1 {
  span {
    position: fixed;
    left: 50%;
    margin-left: -176px;
  }
}
.map {
  margin-top: 50px;
  width: 100%;
  display: flex;
  .map-left {
    flex: 7;
  }
  .map-right {
    flex: 4;
  }
}
</style>
