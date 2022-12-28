<template>
  <div class="hot">
    <h3 style="color: #fff; margin: 0">当前热卖品类</h3>
    <div style="color: #fff; text-align: right; font-size: 12px">
      最后更新时间：{{ time }}
    </div>
    <div id="div" style="width: 100%; height: 210px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      time: ""
    }
  },
  methods: {
    getTime() {
      var data = new Date()
      let year = data.getFullYear()
      let month = data.getMonth()
      month = month < 10 ? "0" + month : month
      let day = data.getDate()
      day = day < 10 ? "0" + day : day
      let hours = data.getHours()
      hours = hours < 10 ? "0" + hours : hours
      let minutes = data.getMinutes()
      minutes = minutes < 10 ? "0" + minutes : minutes
      let seconds = data.getSeconds()
      seconds = seconds < 10 ? "0" + seconds : seconds
      this.time =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
    }
  },
  mounted() {
    this.refreshData = setInterval(() => {
      this.getTime()
    }, 1000)
    var chartDom = document.getElementById("div")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      color: ["#d1f88a"],
      title: {
        // text: "当前热卖品类",
        subtext: "Hot Categories",
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
      xAxis: {
        type: "category",
        data: ["苹果", "香蕉", "梨", "橘子", "橙子", "菠萝", "草莓"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [10, 20, 15, 8, 7, 11, 13],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)"
          }
        }
      ]
    }

    option && myChart.setOption(option)
    window.onresize = function () {
      myChart.resize()
    }
  },
  beforeDestroy() {
    clearInterval(this.refreshData)
    this.refreshData = null
  }
}
</script>

<style lang="scss" scoped>
.hot {
  padding: 10px;
  margin-top: 10px;
  background-color: #2b2c2e;
  box-sizing: border-box;
}
</style>
