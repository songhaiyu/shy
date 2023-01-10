<template>
  <div class="login">
    <div class="box">
      <p>iHRM后台登录系统</p>
      <el-form class="form" ref="ruleForm" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="form.mobile"
            placeholder="username"
            :prefix-icon="User"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            v-model="form.password"
            type="password"
            placeholder="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
      <h3 style="text-align: center">还没有账号？立即注册</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
import * as TS from '../api/defind'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { login } from '../api/user'
import { useRouter } from 'vue-router'
import Status from '../constStatus/index'
import { setToken } from '../utils/auth'
const router = useRouter()
/**校验方法 */
// const form = reactive<TS.LoginForm>({
//   username: '',
//   password: ''
// })
const form: TS.LoginForm = reactive({
  mobile: '',
  password: ''
})

const rules = reactive<FormRules>({
  mobile: [
    {
      required: true,
      message: '用户名不能小于6位',
      trigger: 'blur',
      min: 6
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能小于6位',
      trigger: 'blur'
    }
  ]
})
const submitForm = () => {
  login(form).then((res) => {
    if (res.status == Status.SUCCESS) {
      console.log(res)
      setToken(res.data.data)
      localStorage.setItem('TokenKey', res.data.data)
      router.replace('/userIndex')
      ElNotification({
        title: 'Success',
        message: '登录成功',
        type: 'success'
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  background-image: url(../assets/1.jpg);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}
.box {
  color: #fff;
  width: 630px;
  height: 440px;
  padding: 35px 35px 15px;
  p {
    text-align: center;
    letter-spacing: 2px;
    font-size: 63px;
    margin: 0;
  }
}
.form {
  width: 560px;
  background-color: transparent;
  margin-top: 20px;
  .el-form-item {
    width: 100%;
    margin-top: 24px;
    .el-input {
      width: 100%;
      height: 60px;
      background-color: #d4e5ff !important;
      border-radius: 6px;
      overflow: hidden;
      font-size: 20px;
      line-height: 30px;
    }
    .el-input--prefix {
      background-color: #d4e5ff !important;
    }
  }
}

.btn {
  margin-top: 30px !important;
  .el-button {
    width: 100%;
    height: 60px;
    font-size: 30px;
    background-color: #407ffe;
    border: 0;
  }
}
</style>
