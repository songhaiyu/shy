<template>
  <div>
    <el-dialog :title="!Form.id ? '添加角色' : '编辑角色'" :visible.sync="roleVisible">
      <el-form :model="Form" label-width="100px" :rules="rules" ref="Form">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="Form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="Form.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="roleVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdataOk('Form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleVisible: false,
      Form: {
        roleName: "",
        roleDesc: ""
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    addOrUpdataOk(Form) {
      this.$refs[Form].validate((valid) => {
        if (valid) {
          this.$emit("addOrUpdataOk", this.Form)
        }
      })
    },
    /**添加或者编辑 模态框*/
    init(obj) {
      console.log(obj)
      if (obj instanceof Object) {
        this.Form = obj
        this.roleVisible = true
      } else {
        this.roleVisible = true
      }
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
