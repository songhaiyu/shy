<template>
  <div>
    <el-card class="box-card">
      <el-button type="primary" style="margin: 10px 0 20px 0" @click="addOrUpdataShop">添加分类</el-button>

      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="cat_id"
        border
        :default-expand-all="false"
        :tree-props="{ children: 'children' }"
      >
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="cat_name" label="分类名称"> </el-table-column>
        <el-table-column prop="cat_deleted" label="是否有效">
          <i class="el-icon-circle-check"></i>
        </el-table-column>
        <el-table-column prop="cat_level" label="排序">
          <template slot-scope="scope">
            <div v-if="scope.row.cat_level == 0" class="oneColor">一级</div>
            <div v-if="scope.row.cat_level == 1" class="twoColor">二级</div>
            <div v-if="scope.row.cat_level == 2" class="threeColor">三级</div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="addOrUpdataShop(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="delgoods(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="info.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="info.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <addShopOrEdit v-if="addOrUpdata" ref="addShopOrEditOk" @addOrUpadataOk="addOrUpadataOk" />
  </div>
</template>

<script>
import addShopOrEdit from "./addShopType.vue"
import { delType, addType, editShopParams } from "@/api/goods.js"
export default {
  data() {
    return {
      addOrUpdata: false,
      tableData: [],
      tableDatas: [],
      info: {
        query: "",
        pagenum: 1, //当前页码数
        pagesize: 2 //每页展示的个数
      },
      total: 0 //总数
    }
  },
  methods: {
    addOrUpdataShop(obj) {
      if (obj.constructor == Object) {
        this.$nextTick(() => {
          console.log(this.$refs)
          console.log(this.$refs.addShopOrEditOk)
          this.$refs.addShopOrEditOk.init(obj)
        })
      } else {
        this.$nextTick(() => {
          console.log(1)
          this.$refs.addShopOrEditOk.init()
        })
      }
      this.addOrUpdata = true
    },
    addOrUpadataOk(obj) {
      if (obj.cat_id) {
        editShopParams(obj.cat_id).then((res) => res)
      } else {
        addType(obj).then((res) => res)
      }
      this.addOrUpdata = false
    },
    delgoods(row) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delType(row.cat_id).then((res) => {
            console.log(row)
            console.log(res)
          })
          this.tableData = this.tableData.filter((ele) => ele.cat_id != row.cat_id)
          this.$message.success("删除角色成功")
          this.tableData.some((item, index, arr) => {
            if (item.children && item.children.length) {
              item.children.some((subItem, subIndex) => {
                if (subItem.cat_id === row.cat_id) {
                  subItem.children.some((eleItem, eleIndex) => {
                    arr[subIndex].children.splice(eleIndex, 1)
                  })
                }
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    // 每页显示条数发生改变时触发
    handleSizeChange(val) {
      this.info.pagesize = val
      this.getPagination()
    },
    // 当前页码数发生改变时触发
    handleCurrentChange(val) {
      this.info.pagenum = val
      this.getPagination()
    },
    // 分页封装
    getPagination() {
      let list = JSON.parse(this.tableDatas)
      this.tableData = list.slice((this.info.pagenum - 1) * this.info.pagesize, this.info.pagesize * this.info.pagenum)
    }
  },
  created() {
    this.$http.send("/categories").then((res) => {
      this.tableData = res.data.data.result
      this.tableDatas = JSON.stringify(res.data.data.result)
      this.total = res.data.data.total - 7
      this.getPagination()
    })
  },
  mounted() {},
  components: { addShopOrEdit },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.oneColor {
  width: 50px;
  text-align: center;
  border-radius: 7px;
  padding: 5px 10px;
  color: #fff;

  background-color: #409dfe;
}
.el-icon-circle-check {
  background-color: #39ce39;
  overflow: hidden;
  border-radius: 14px;
  color: #fff;
  border: 0;
}
.twoColor {
  width: 50px;
  text-align: center;
  border-radius: 7px;
  padding: 5px 10px;
  color: #fff;
  background-color: #67c23a;
}
.threeColor {
  width: 50px;
  text-align: center;
  border-radius: 7px;
  padding: 5px 10px;
  color: #fff;
  background-color: #e6a23c;
}
</style>
