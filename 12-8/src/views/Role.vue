<template>
  <div class="role">
    <el-card class="box-card">
      <el-button type="primary">添加角色</el-button>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <!-- <span>{{ props.row.shop }}</span> -->
              </el-form-item>
              <el-form-item label="商品 ID">
                <!-- <span>{{ props.row.id }}</span> -->
              </el-form-item>
              <el-form-item label="店铺 ID">
                <!-- <span>{{ props.row.shopId }}</span> -->
              </el-form-item>
              <el-form-item label="商品分类">
                <!-- <span>{{ props.row.category }}</span> -->
              </el-form-item>
              <el-form-item label="店铺地址">
                <!-- <span>{{ props.row.address }}</span> -->
              </el-form-item>
              <el-form-item label="商品描述">
                <!-- <span>{{ props.row.desc }}</span> -->
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="#" type="index"> </el-table-column>
        <el-table-column label="角色名称" prop="roleDesc"> </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
        <el-table-column label="操作">
          <el-button type="primary" icon="el-icon-edit">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete">删除</el-button>
          <el-button type="warning" icon="el-icon-delete">分配权限</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {},
  created() {
    this.$http.send("/roles", {}, "get").then((res) => {
      this.tableData = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
</style>
