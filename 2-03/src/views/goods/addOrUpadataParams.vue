<template>
  <div>
    <el-dialog :title="form.id == '' ? '添加动态参数' : '修改动态参数'" :visible.sync="addOrUpadataParams">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="动态参数" label-width="100px" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addOrUpadataParams = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpadata">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addOrUpadataParams: false,
      form: {
        id: "",
        name: ""
      },
      rules: {
        name: [{ required: true, message: "请输入动态参数", trigger: "blur" }]
      }
    }
  },
  methods: {
    init(obj) {
      if (obj.constructor == Object) {
        this.form = { ...obj }
        this.addOrUpadataParams = true
      }
      this.addOrUpadataParams = true
    },
    addOrUpadata() {
      this.$emit("statusAddOrUpdata", this.form)
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
