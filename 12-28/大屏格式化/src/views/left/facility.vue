<template>
  <div>
    <div class="facility">
      <div class="fa-left">
        <div id="main" style="width: 130px; height: 130px"></div>
      </div>

      <div class="fa-right">
        <h3>
          慕课外卖登录设备<span
            >1,365,633
            <p>台</p></span
          >
        </h3>
        <p>distribution of Moomao users & Average age</p>
        <div class="fa-footer">
          <div>
            <div>522,041</div>
            <div>
              <span></span>
              <span>Andreild</span>
            </div>
          </div>
          <div>
            <div>471,645</div>
            <div>
              <span></span>
              <span>ios</span>
            </div>
          </div>
          <div>
            <div>371,947</div>
            <div>
              <span></span>
              <span>pc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      backgroundColor: "#2b2c2e",
      title: {
        left: "center",
        top: 20
      },

      series: [
        {
          name: "",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335 },
            { value: 310 },
            { value: 274 },
            { value: 235 },
            { value: 400 }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: "radius",

          labelLine: {
            show: false
          },
          itemStyle: {
            color: "#83a748"
          }
        }
      ]
    }

    option && myChart.setOption(option)
    window.onresize = function () {
      myChart.resize()
    }
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.facility {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  background-color: #2a2b2d;
  display: flex;
  color: #fff;
  p {
    margin: 12px 0;
    font-size: 12px;
  }
  h3 {
    position: relative;
    margin: 0;
    span {
      position: absolute;
      right: -10px;
      display: flex;
      top: 10px;
      font-size: 26px;
      p {
        line-height: 2px;
      }
    }
  }
  .fa-right {
    padding: 0 10px 0 0;
    width: calc(100% - 130px);
    h3 {
      margin-top: 10px;
    }
    p {
      margin-top: 20px;
    }
    .fa-footer {
      display: flex;
      justify-content: space-around;
      > div {
        div:nth-child(1) {
          font-size: 20px;
          font-weight: 600;
        }
        div:nth-child(2) {
          text-align: center;
          margin-top: 6px;
          font-size: 12px;
          span:nth-child(1) {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: #b4cc80;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
