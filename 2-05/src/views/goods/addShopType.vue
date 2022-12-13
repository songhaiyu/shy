<template>
  <div>
    <el-dialog title="添加商品分类	" :visible.sync="shopType">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="分类名称" label-width="100px" prop="name">
          <el-input v-model="form.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" label-width="100px" v-if="form.cat_id == '' ? true : false">
          <el-cascader v-model="form.value" :options="options" :props="props" clearable></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="shopType = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpadataOk">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addShopType } from "@/api/goods.js"
import { STATUS } from "@/constStatus"
export default {
  data() {
    return {
      shopType: false,
      form: {
        cat_name: "",
        value: [],
        cat_id: ""
      },
      rules: {
        name: [{ required: true, message: "请输入动态参数", trigger: "blur" }]
      },
      options: [],
      props: {
        children: "children",
        label: "cat_name",
        value: "cat_id"
      }
    }
  },
  methods: {
    init(obj) {
      console.log(obj instanceof Object)
      if (obj instanceof Object) {
        console.log(obj)
        this.form = { ...obj }
        console.log(this.form)
        this.shopType = true
      } else {
        this.shopType = true
      }
    },
    addOrUpadataOk() {
      this.$emit("addOrUpadataOk", this.form)
    }
  },
  created() {
    addShopType().then((res) => {
      const { msg, status } = res.meta
      if (status == STATUS.SUCCESS) {
        const { result } = res.data
        this.options = result
        console.log(this.options)
      } else {
        this.$message.error(msg)
      }
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
