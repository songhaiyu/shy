<template>
  <div>
    <div class="ageNum">
      <h3>
        慕课外卖用户年龄分布&平均年龄<span
          >30.08
          <p>岁</p></span
        >
      </h3>
      <p>distribution of Moomao users & Average age</p>
      <div class="age">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>
      <div class="num">
        <div>0</div>
        <div>300,000</div>
        <div>600,000</div>
        <div>900,000</div>
        <div>1,200,000</div>
        <div>1,500,000</div>
        <div>1,800,000</div>
      </div>
      <div class="filtrate">
        <div>
          <h3>304,378</h3>
          <p><span style="background: #7ca144"></span> 0-20</p>
        </div>
        <div>
          <h3>505,391</h3>
          <p><span style="background: #c5f077"></span> 20-30</p>
        </div>
        <div>
          <h3>725,216</h3>
          <p><span style="background: #b8db87"></span> 30-50</p>
        </div>
        <div>
          <h3>204,934</h3>
          <p><span style="background: #f3f596"></span> >50</p>
        </div>
      </div>
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
.ageNum {
  margin-top: 10px;
  background-color: #2a2b2d;
  color: #fff;
  padding: 10px;
  p {
    margin: 10px 0;
    font-size: 12px;
  }
  h3 {
    position: relative;
    margin: 0;
    span {
      position: absolute;

      right: 40px;
      display: flex;
      top: 10px;
      font-size: 34px;
      p {
        line-height: 26px;
      }
    }
  }
  .age {
    width: 100%;
    height: 10px;
    display: flex;
    margin: 20px 0;
    .one {
      width: 20%;
      height: 10px;
      background-color: #7ea345;
    }
    .two {
      width: 64%;
      height: 10px;
      background-color: #c5f177;
    }
    .three {
      width: 16%;
      height: 10px;
      background-color: #f8fa9c;
    }
  }
  .num {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #484b4f;
  }
}
.filtrate {
  display: flex;
  color: #fff;
  justify-content: space-between;
  div {
    text-align: center;
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      margin-right: 6px;
    }
  }
}
</style>
