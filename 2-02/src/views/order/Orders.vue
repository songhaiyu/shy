<template>
  <div class="box">
    <el-row>
      <el-col :span="5">
        <el-input placeholder="请输入内容" v-model="info.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="usersList"></el-button>
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
              {{ scope.row.create_time | time }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div v-if="!scope"></div>
            <el-button type="primary" icon="el-icon-edit" @click="editVisible = true"></el-button>
            <el-button type="success" icon="el-icon-location-outline" @click="location"></el-button>
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

    <Logistics v-if="timeVisible" ref="Logistics" />
    <!-- 修改地址 -->
    <el-dialog title="修改地址" :visible.sync="editVisible">
      <el-form :model="form" label-width="100px" :rules="rules" ref="form">
        <el-form-item label="省市区/县" prop="value">
          <el-cascader v-model="form.value" :options="options" @change="handleChange" style="width: 100%"></el-cascader>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editAddress">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data"
import Logistics from "./Logistics.vue"
import { getOrderList } from "@/api/order.js"
import { STATUS } from "@/constStatus"
export default {
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
  data() {
    return {
      tableData: [], //渲染数据
      tableDatas: [], //备份数据
      info: {
        query: "",
        pagenum: 1, //当前页码数
        pagesize: 10 //每页展示的个数
      },
      total: 0, //总数,
      timeVisible: false, //物流进度框
      editVisible: false, //修改地址
      form: {
        value: "", //省市区/县
        address: ""
      },
      options: regionData, //三级联动
      rules: {
        value: [{ required: true, message: "请选择地址名称", trigger: "blur" }],
        address: [{ required: true, message: "请输入详细地址", trigger: "blur" }]
      }
    }
  },
  created() {
    this.usersList()
  },
  components: { Logistics },
  methods: {
    location() {
      this.timeVisible = true
      this.$nextTick(() => {
        this.$refs.Logistics.init()
      })
    },
    editAddress() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log(this.form)
          this.$message.success("修改地址成功")
          this.editVisible = false
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    handleChange(city) {
      console.log(city)
      console.log(CodeToText[city[0]])
      console.log(CodeToText[city[1]])
      console.log(CodeToText[city[2]])
    },
    /**订单列表数据 */
    usersList() {
      getOrderList(this.info).then((res) => {
        console.log(res)
        const { status, msg } = res.meta
        if (status == STATUS.SUCCESS) {
          const { goods } = res.data
          this.tableData = goods
          this.tableDatas = JSON.stringify(goods)
        } else {
          this.$message.error(msg)
        }
        console.log(res)
      })
    },
    /***页面展示数量改变 */
    handleSizeChange(val) {
      this.info.pagesize = val
      this.usersList()
    },
    /***页面页码改变*/
    handleCurrentChange(val) {
      this.info.pagenum = val
      this.usersList()
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
