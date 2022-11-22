<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        header-row-class-name="color"
      >
        <el-table-column label="#" type="index"> </el-table-column>
        <el-table-column label="注册日期" prop="registe_time">
        </el-table-column>
        <el-table-column prop="username" label="用户姓名"> </el-table-column>
        <el-table-column prop="city" label="注册地址"> </el-table-column>
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
      total:0
    };
  },
  methods: {
    getlist() {
      axios.get("https://elm.cangdu.org/v1/users/list").then((res) => {
        this.tableData = res.data;
        this._tableData = JSON.stringify(res.data);
        this.getpagin();
        this.total=res.data.length
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
  },
  created() {
    this.getlist();
  },
  mounted() {},
  components: { breadcrumb },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.table {
  margin-top: 20px;
}
.color {
  background-color: #eef1f6;
}
</style>
