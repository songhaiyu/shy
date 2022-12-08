<template>
  <div class="box">
    <el-row>
      <el-col :span="5">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="order_number" label="订单编号" width="270px"> </el-table-column>
        <el-table-column prop="order_price" label="订单价格"> </el-table-column>
        <el-table-column prop="mobile" label="是否付款">
          <template slot-scope="scope">
            <span v-if="scope.row.order_pay == '0'" class="blue">未付款</span>
            <span v-else class="red">已付款</span>
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货"> </el-table-column>
        <el-table-column prop="mg_state" label="下单时间">
          <template slot-scope="scope">
            <div>
              {{ scope.row.create_time }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div v-if="!scope"></div>
            <el-button  type="primary" icon="el-icon-edit"></el-button>
            <el-button  type="success" icon="el-icon-location-outline"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="info.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="info.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "", //搜索
      tableData: [], //渲染数据
      tableDatas: [], //备份数据
      info: {
        query: "",
        pagenum: 1, //当前页码数
        pagesize: 10 //每页展示的个数
      },
      total: 0 //总数
    }
  },
  created() {
    this.usersList()
  },
  methods: {
    // 请求用户数据
    usersList() {
      this.$http.send("/orders", this.info, "post").then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.tableData = res.data.data.goods
          this.tableDatas = JSON.stringify(res.data.data.goods)
          this.getPagination()
          // 获取总数
          this.total = res.data.data.total - 1
        } else {
          // 拿到错误信息
          this.$message.error(res.data.meta.msg)
        }
      })
    },
    // 搜索
    search() {
      this.tableDatas = JSON.parse(this.tableDatas)
      this.tableData = this.tableDatas.filter((item) => {
        return item.order_number.includes(this.input)
      })
      this.input = ""
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
  font-size: 20px;
}
.blue {
  display: block;
  width: 66px;
  text-align: center;
  padding: 5px 6px;
  background-color: #409eff;
  color: #fff;
  border-radius: 8px;
}
.red {
  display: block;
  width: 66px;
  text-align: center;
  padding: 5px 6px;
  background-color: #f56c6c;
  color: #fff;
  border-radius: 8px;
}
</style>
