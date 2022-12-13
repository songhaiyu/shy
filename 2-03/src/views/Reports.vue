<template>
  <div>
    <div class="box">
      <div id="main"></div>
    </div>
    <div class="box">
      <div id="birthday"></div>
    </div>
    <div class="box">
      <div id="birthday1"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {
    this.$http.send("/reports").then((res) => {
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
      window.addEventListener("resize", function () {
        myChart.resize()
      })

      option && myChart.setOption(option)
      this.$message.success("获取报表成功")
    })

    this.$http.send("/darReports").then((res) => {
      console.log(res)
      var chartDom = document.getElementById("birthday")
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: "用户来源",
          subtext: "Fake Data",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 3528, name: "华东" },
              { value: 6400, name: "华南" },
              { value: 13928, name: "华北" },
              { value: 13098, name: "西部" },
              { value: 15982, name: "其他" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    })

    this.$http.send("/darReports").then((res) => {
      console.log(res)
      var chartDom = document.getElementById("birthday1")
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: "用户来源",
          subtext: "Fake Data",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        xAxis: {
          type: "category",
          data: [...res.data.data1.xAxis[0].data]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: res.data.data1.series[0].name,
            type: "bar",
            barGap: 0,
            // label: labelOption,
            emphasis: {
              focus: "series"
            },
            data: [...res.data.data1.series[0].data]
          },
          {
            name: res.data.data1.series[1].name,
            type: "bar",
            barGap: 0,
            // label: labelOption,
            emphasis: {
              focus: "series"
            },
            data: [...res.data.data1.series[1].data]
          },
          {
            name: res.data.data1.series[2].name,
            type: "bar",
            barGap: 0,
            // label: labelOption,
            emphasis: {
              focus: "series"
            },
            data: [...res.data.data1.series[2].data]
          },
          {
            name: res.data.data1.series[3].name,
            type: "bar",
            barGap: 0,
            // label: labelOption,
            emphasis: {
              focus: "series"
            },
            data: [...res.data.data1.series[3].data]
          },
          {
            name: res.data.data1.series[4].name,
            type: "bar",
            barGap: 0,
            // label: labelOption,
            emphasis: {
              focus: "series"
            },
            data: [...res.data.data1.series[4].data]
          }
        ]
      }

      option && myChart.setOption(option)
    })
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#main,
#birthday,
#birthday1 {
  margin: 100px auto;
  width: 1200px;
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
