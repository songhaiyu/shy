<template>
  <div>
    <div class="box">
      <div id="main"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      echartsData: []
    }
  },
  methods: {},
  created() {},
  mounted() {
    this.$http.send("/reports").then((res) => {
      console.log(res)
      var echarts = require("echarts")
      var chartDom = document.getElementById("main")
      var myChart = echarts.init(chartDom)
      var option
      option = {
        title: {
          text: "用户来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: [...res.data.data.legend.data]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [...res.data.data.xAxis[0].data]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [...res.data.data.series]
      }

      option && myChart.setOption(option)
      this.$message.success("获取报表成功")
    })
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#main {
  margin: 100px auto;
  width: 1000px;
  height: 600px;
}
.box {
  width: 100%;
  height: 700px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
