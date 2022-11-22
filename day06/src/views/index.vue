<template>
  <div class="index">
    <div class="content">
      <h1>数据统计</h1>
      <div>
        <span style="background: #ff9800"
          ><b style="color: #fff">当日数据：</b></span
        >
        <span><b>8</b>新增用户</span>
        <span><b>18</b>新增订单</span>
        <span><b>88</b>新增管理员</span>
      </div>
      <div>
        <span style="background: #20a0ff"
          ><b style="color: #fff">总数据：</b></span
        >
        <span><b>6</b>注册用户</span>
        <span><b>86</b>订单</span>
        <span><b>888</b>管理员</span>
      </div>
      <span class="trend">走势图</span>
      <div id="main" style="width: 1400px; height: 500px"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    var option = {
      backgroundColor: "#fff",
      title: {
        textStyle: {
          color: "red",
        },
        // x: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      toolbox: {
        show: true,
        left: 1244,
        top: 18,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ["pie", "funnel"],
            option: {
              funnel: {
                x: "25%",
                width: "50%",
                funnelAlign: "left",
                max: 1548,
              },
            },
          },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        // data: ["新增注册用户", "新增订单", "新增管理员"],
        left: "center",
      },
      xAxis: [
        {
          type: "category",
          data: [
            "2022-11-14",
            "2022-11-15",
            "2022-11-16",
            "2022-11-17",
            "2022-11-18",
          ],
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "新注册用户",
          type: "line",
          data: [3, 2, 2, 1, 2],
          smooth: true,
          itemStyle: {
            normal: {
              color: "#5793f3",
              lineStyle: {
                color: "#5793f3",
              },
            },
          },
        },
        {
          name: "新增订单",
          type: "line",
          data: [1, 2, 4, 4, 5],
          smooth: true,
          itemStyle: {
            normal: {
              color: "#32CD32",
              lineStyle: {
                color: "#32CD32",
              },
            },
          },
        },
        {
          name: "新增管理员",
          type: "line",
          data: [2, 1, 2, 3, 4, 5],
          smooth: true,
          itemStyle: {
            normal: {
              color: "#d00",
              lineStyle: {
                color: "#d00",
              },
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang='scss' scoped>
#main {
  margin: 60px auto;
}
.trend {
  position: fixed;
  left: 510px;
  top: 260px;
}
.index {
  width: 100%;
}
.content {
  padding: 20px;
  h1 {
    text-align: center;
    font-size: 50px;
    margin: 0;
  }
  div {
    span {
      display: inline-block;
      width: 300px;
      height: 50px;
      background-color: #e5e9f2;
      margin-right: 20px;
      margin-top: 10px;
      border-radius: 10px;
      color: #89919a;
      text-align: center;
      b {
        color: #000;
        font-size: 26px;
      }
    }
  }
}
</style>
