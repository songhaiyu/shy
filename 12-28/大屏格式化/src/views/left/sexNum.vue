<template>
  <div class="sex">
    <div class="box">
      <div class="left">
        <img src="@/assets/1.png" alt="" />
        <div class="text">
          <div class="p1">男性用户人数</div>
          <div class="p2">Number of male</div>
          <div class="person">869,913 <span class="min">万人</span></div>
        </div>
      </div>
      <div class="left">
        <img src="@/assets/1.png" alt="" />
        <div class="text">
          <div class="p1">女性用户人数</div>
          <div class="p2">Number of male</div>
          <div class="person">870,006 <span class="min">万人</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sex {
  margin-top: 10px;
  padding: 14px 10px;
  background-color: #2b2c2e;
  color: #fff;
}
.box {
  display: flex;
  justify-content: space-around;
  .left {
    display: flex;
    img {
      width: 55px;
      height: 55px;
    }
    .text {
      margin-left: 10px;
      .p1 {
        font-size: 18px;
        font-weight: 700;
      }
      .p2 {
        font-size: 7px;
        margin: 10px 0;
        // transform: scale(0.5); // 缩放
      }
      .person {
        font-weight: 900;
        font-size: 22px;
        font-family: DIN;
        .min {
          font-size: 12px;
        }
      }
    }
  }
}
.hr {
  width: 100%;
  height: 6px;
  margin-top: 10px;
  background-color: #3c3d40;
}
</style>
