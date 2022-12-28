<template>
  <div class="newAdd">
    <h3 style="color: #fff; margin: 0">慕课外卖骑手概况</h3>
    <div id="box" style="width: 100%; height: 170px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  mounted() {
    var chartDom = document.getElementById("box")
    var myChart1 = echarts.init(chartDom)
    var option

    option = {
      title: {
        // text: "慕课外卖骑手概况",
        subtext: "Rider Growth rate",
        textStyle: {
          color: "#fff",
          fontWeight: "bolder",
          fontSize: 14
        },
        subtextStyle: {
          color: "#ccc",
          fontWeight: "bolder",
          fontSize: 8
        }
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "01月",
          "02月",
          "03月",
          "04月",
          "05月",
          "06月",
          "07月",
          "08月",
          "09月",
          "10月",
          "11月",
          "12月"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "今日接单骑手",
          type: "line",
          stack: "Total",
          data: [150, 30, 20, 24, 160, 16, 163, 79, 111, 67, 34, 56]
        },
        {
          name: "今日新增骑手",
          type: "line",
          stack: "Total",
          data: [30, 152, 36, 67, 134, 56, 123, 45, 103, 76, 83, 56]
        }
      ]
    }
    window.onresize = function () {
      myChart1.resize()
    }
    option && myChart1.setOption(option)
  }
}
</script>

<style lang="scss" scoped>
.newAdd {
  padding: 10px;
  margin-top: 10px;
  background-color: #2b2c2e;
}
</style>
