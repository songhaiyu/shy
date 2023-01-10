<template>
  <div class="title">
    <div class="left" style="display: flex">
      <el-icon><Fold /></el-icon>
      <div class="tit">
        江苏传智博客教育科技股份有限公司 <span>体验版</span>
      </div>
    </div>
    <div class="right">
      <el-icon><Search /></el-icon>
      <el-icon><QuestionFilled /></el-icon>
      <el-icon @click="fullScreen"><FullScreen /></el-icon>
      <el-icon><Guide /></el-icon>
      <el-color-picker v-model="color1"></el-color-picker>

      <div class="admin">
        <img src="../assets/tt.jpg" alt="" />
        <span>小宇</span>
        <!-- <el-icon><ArrowDown /></el-icon> -->
        <el-select>
          <el-option value="首页" @click="router.push('/userIndex')" />
          <el-option value="退出登录" @click="loginOut" />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Fold,
  Search,
  QuestionFilled,
  FullScreen,
  Guide
  // ArrowDown
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
import screenfull from 'screenfull' // 引入全屏插件
/*全屏事件*/
/**
 * screenfull.isFullscreen; // 布尔值——当前页面是否全屏
 * screenfull.isEnabled; // 布尔值——当前浏览器是否支持全屏
 */
const fullScreen = () => {
  if (screenfull.isEnabled && !screenfull.isFullscreen) {
    screenfull.request() // 全屏
  }
}
/*退出登录*/
const loginOut = () => {
  localStorage.removeItem('token') // 清除token
  router.replace('/') // 跳转页面
}
/*颜色选择*/
const color1 = ref('#409EFF')
</script>

<style lang="scss" scoped>
.title {
  height: 70px;
  background-color: #4373fa;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}
.el-icon {
  width: 30px;
  height: 100%;
  svg {
    margin-top: 13px;
    width: 100%;
    height: 100%;
    color: #fff;
  }
}
.tit {
  margin-left: 20px;
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 20px;
    width: 100px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
    background-color: #84a9fe;
  }
}
.left {
  width: 50%;
}
.right {
  width: 26%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: 000;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 30px;
    }
  }
}
.admin {
  background-color: transparent;
  span {
    margin-right: 10px;
  }
}
.el-select {
  width: 20px;
  background-color: transparent;
  border: none !important;
}
</style>
