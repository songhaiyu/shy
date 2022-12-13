<template>
  <div>
    <el-dialog :title="formPublic.id == '' ? '添加静态属性' : '修改静态属性'" :visible.sync="addOrUpadataPublic">
      <el-form :model="formPublic" :rules="rules" ref="formPublic">
        <el-form-item label="动态参数" label-width="100px" prop="name">
          <el-input v-model="formPublic.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addOrUpadataPublic = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpadata">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addOrUpadataPublic: false,
      formPublic: {
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
        this.formPublic = { ...obj }
        this.addOrUpadataPublic = true
      }
      this.addOrUpadataPublic = true
    },
    addOrUpadata() {
      this.$emit("publicAddOrUpdata", this.formPublic)
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
