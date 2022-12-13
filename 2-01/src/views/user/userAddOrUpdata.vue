<template>
  <div>
    <el-dialog :title="!ruleForm.id ? '添加用户' : '编辑用户'" :visible.sync="visible" @close="closeDialog">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" :disabled="ruleForm.id ? true : false"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="!ruleForm.id">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog(0)">取 消</el-button>
        <el-button type="primary" @click="closeDialog(1)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      visible: false,
      ruleForm: {
        //添加表单数据
        username: "",
        password: "",
        email: "",
        mobile: "",
        id: ""
      },
      disabled: false,
      rules: {
        //正则
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }]
      }
    }
  },
  methods: {
    init(info) {
      if (info instanceof Object) {
        this.ruleForm = info
        this.visible = true
      } else {
        this.visible = true
      }
    },
    closeDialog(val) {
      if (val == 1) {
        if (this.ruleForm.id) {
          console.log(this.ruleForm.id)
          this.$emit("closeChildDialog")
        } else {
          this.$refs["ruleForm"].validate((valid) => {
            if (valid) {
              this.$emit("closeChildDialog", this.ruleForm)
            }
          })
        }
      } else {
        this.visible = false
      }
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {
    Visible(newValue) {
      console.log(newValue)
      this.Visible = newValue
    }
  }
}
</script>

<style lang="scss" scoped></style>
