<template>
  <div class="login">
    <el-form class="form" ref="ruleForm" :model="form" :rules="rules">
      <img src="../../assets/2.jpg" alt="" />
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from "@/untils/auth.js"
import { STATUS } from "@/constStatus"
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          // trigger 表示的是触发校验规则的方法 值是blur表示输入框失去焦点的时候进行校验
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 18, message: "请输入6～18位字符的用户名", trigger: "blur" }
        ],
        password: [{ required: true, min: 6, max: 18, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          // this.$http({ method: "Post", data: this.form, url: "/api/login" }).then((res) => {
          //   console.log(res, 1111)
          //   console.log(res.data.data.token, 1111)
          //   setToken(res.data.data.token)
          //   this.$router.push("/")
          // })
          // this.$http.post(this.$http.addorUrl("/login"), this.form).then((res) => {
          //   console.log(res)
          //   setToken(res.data.data.token)
          // })
          this.$http.send("/login", this.form).then((res) => {
            console.log(res)
            if (res && res.data.meta.status == STATUS.SUCCESS) {
              this.$router.replace("/welcome")
              setToken(res.data.data.token)
              this.$message({
                message: "恭喜你! 登陆成功~",
                type: "success"
              })
            }
          })
        } else {
          console.log("error submit!!")
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-image: url(../../assets/3.jpg);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}
.form {
  width: 500px;
  background-color: #fff;
  padding: 100px 20px;
  padding-bottom: 40px;
  border-radius: 8px;
  position: relative;
}
img {
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 130px;
  background-color: #ccc;
  top: -50px;
  left: 185px;
  border: 10px solid #fff;
  box-shadow: 5px 5px 10px #ccc;
}
.btn {
  text-align: right;
}
</style>
