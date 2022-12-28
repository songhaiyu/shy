<template>
  <div>
    <div class="userNum">
      <h3>慕课外卖用户总数</h3>
      <p>Total number of users who want to be sold outside the classroom</p>
      <h1>1,258,258</h1>
      <p class="color">每日增长率：73.90%,每月增长率：117.37%</p>
      <el-progress
        :percentage="73.9"
        type="line"
        color="#939496"
        :stroke-width="8"
        :show-text="false"
      ></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.userNum {
  background-color: #424345;
  color: #fff;
  padding: 10px;
  h3,
  h1 {
    margin: 0;
  }
  p {
    margin: 10px 0;
    font-size: 12px;
  }
}
.color {
  color: #b0dc74;
}
</style>
