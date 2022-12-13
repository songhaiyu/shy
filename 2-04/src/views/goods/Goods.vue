<template>
  <div class="box">
    <el-row>
      <el-col :span="5">
        <el-input placeholder="请输入内容" v-model="info.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button class="btn" type="primary" @click="$router.push('/shopadd')">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="800px"> </el-table-column>
        <el-table-column prop="goods_price" label="商品价格（元）"> </el-table-column>
        <el-table-column prop="goods_weight" label="商品重量"> </el-table-column>
        <el-table-column prop="add_time" label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.add_time | time }}
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="handleEdit(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" @click="handleDelete(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
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
    </div>
  </div>
</template>

<script>
import { STATUS } from "@/constStatus"
import { getGoodsList, delGood, editGoods } from "@/api/goods.js"
export default {
  data() {
    return {
      tableData: [], //渲染数据
      tableDatas: [], //备份数据
      info: {
        query: "",
        pagenum: 1, //当前页码数
        pagesize: 20 //每页展示的个数
      },
      total: 0, //总数
      formLabelWidth: "100px"
    }
  },
  /**过滤器 */
  filters: {
    time(val) {
      let time = new Date(val * 1000)
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      month = month < 10 ? "0" + month : month
      let day = time.getDate()
      day = day < 10 ? "0" + day : day
      let hour = time.getHours()
      hour = hour < 10 ? "0" + hour : hour
      let minute = time.getMinutes()
      minute = minute < 10 ? "0" + minute : minute
      let second = time.getSeconds()
      second = second < 10 ? "0" + second : second
      return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
    }
  },
  created() {
    this.goodsList()
  },
  methods: {
    /**获取商品列表 */
    goodsList() {
      getGoodsList(this.info).then((res) => {
        const { status, msg } = res.meta
        if (status == STATUS.SUCCESS) {
          const { goods, total } = res.data
          this.total = total
          this.tableData = goods
          this.tableDatas = JSON.stringify(goods)
        } else {
          this.$message.error(msg)
        }
      })
    },

    /**删除商品 */
    handleDelete(row) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          /**删除 */
          delGood(row.id).then((res) => res)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    /**搜索商品 */
    search() {
      this.goodsList()
    },
    /**每页数量发生变化 */
    handleSizeChange(val) {
      this.info.pagesize = val
      this.goodsList()
    },
    /**页码发生变化 */
    handleCurrentChange(val) {
      this.info.pagenum = val
      this.goodsList()
    },
    /**编辑商品 */
    handleEdit(row) {
      console.log(row)
      editGoods(row.id).then((res) => res)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  padding: 26px;
  margin-top: 20px;
  .table {
    margin: 20px 0;
    height: 100%;
  }
}
.el-pagination {
  margin-top: 40px;
}
.btn {
  margin-left: 15px;
}
.el-table {
  font-size: 18px;
}
</style>
