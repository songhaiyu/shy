<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="con">
      <el-table :data="tableData" style="width: 100%" @cell-click="goclick">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="demo-table-expand">
              <div class="content">
                <div class="left">
                  <el-form-item label="用户名">
                    <span>{{ scope.row.restaurant_name }}</span>
                  </el-form-item>
                  <el-form-item label="收获地址">
                    <span>{{ scope.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="店铺地址">
                    <span>{{ scope.row.address1 }}</span>
                  </el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="店铺名称">
                    <span>{{ scope.row.restaurant_name }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ scope.row.restaurant_id }}</span>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单 ID" prop="id"> </el-table-column>
        <el-table-column label="总价格" prop="total_amount"> </el-table-column>
        <el-table-column label="订单状态" prop="status_bar.title">
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 6, 10, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import breadcrumb from "../components/bread.vue";
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      pagesize: 10,
      pagenum: 1,
      _tableData: [],
      total: 0,

    };
  },
  methods: {
    getshop() {
      axios
        .get(
          "https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined"
        )
        .then((res) => {
          console.log(res.data);
          this.tableData = res.data;
          this._tableData = JSON.stringify(res.data);
          this.getpagin();
          this.total = res.data.length;
        });
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getpagin();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getpagin();
    },
    getpagin() {
      let data = JSON.parse(this._tableData);
      this.tableData = data.slice(
        (this.pagenum - 1) * this.pagesize,
        this.pagesize * this.pagenum
      );
    },
    goclick(row, column, event, cell) {
      console.log(row.restaurant_id);
      axios
        .get("https://elm.cangdu.org/shopping/restaurant/" + row.restaurant_id)
        .then((res) => {
          console.log(res);
        for(let i = 0; i < this.tableData.length;i++){
          if (this.tableData[i].restaurant_id==row.restaurant_id) {
            this.tableData[i].address1=res.data.address
          }
        }
        });
        axios.get("https://elm.cangdu.org/v1/addresse/"+row.address_id).then((res) => {
          console.log(res);
          for(let i = 0; i < this.tableData.length;i++){
          if (this.tableData[i].restaurant_id==row.restaurant_id) {
            this.tableData[i].address=res.data.address
          }
        }
        })
    },
  },
  created() {
    this.getshop();
  },
  mounted() {},
  components: { breadcrumb },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-dialog .el-form-item {
  height: 80px !important;
}
.el-form-item__content {
  // margin-top: 20px !important;
  height: 60px !important;
}
.con {
  margin-top: 20px;
}
.content {
  display: flex;
  height: 270px;
  background-color: #eef1f6;
}
.left,
.right {
  padding-left: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.el-form-item {
  height: 33px !important;
}
.del {
  background-color: #d00;
  color: #fff;
}
.btn {
  button {
    margin: 5px 10px;
    border: 0;
    outline: none;
  }
}
</style>
