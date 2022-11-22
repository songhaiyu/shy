<template>
  <div>
    <breadcrumb></breadcrumb>
    <div class="con">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="demo-table-expand">
              <div class="content">
                <div class="left">
                  <el-form-item label="店铺名称">
                    <span>{{ scope.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="店铺介绍">
                    <span>{{ scope.row.description }}</span>
                  </el-form-item>
                  <el-form-item label="联系电话">
                    <span>{{ scope.row.phone }}</span>
                  </el-form-item>
                  <el-form-item label="销售量">
                    <span>{{ scope.row.rating_count }}</span>
                  </el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="店铺地址">
                    <span>{{ scope.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ scope.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="评分">
                    <span>{{ scope.row.rating }}</span>
                  </el-form-item>
                  <el-form-item label="分类">
                    <span>{{ scope.row.category }}</span>
                  </el-form-item>
                </div>
              </div>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店铺名称" prop="name"> </el-table-column>
        <el-table-column label="店铺地址" prop="address"> </el-table-column>
        <el-table-column label="店铺介绍" prop="description"> </el-table-column>
        <el-table-column label="操作" prop="desc">
          <template slot-scope="scope">
            <div class="btn">
              <button @click="edit(scope.$index)">编辑</button>
              <button class="del" @click="del(scope.$index)">删除</button>
            </div>
          </template>
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

    <el-dialog title="修改店铺消息" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="店铺名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类">
          <el-select v-model="form.category" placeholder="请选择"></el-select>
        </el-form-item>
        <el-form-item label="商铺图片">
          <img :src="form.image_path" alt="" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editOk">确 定</el-button>
      </div>
    </el-dialog>
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
      dialogFormVisible: false,
      form: {
        address: "",
        name: "",
        phone: "",
        category: "",
        description: "",
        image_path: "",
      },
      editIndex: -1,
    };
  },
  methods: {
    getshop() {
      axios
        .get(
          "https://elm.cangdu.org/shopping/restaurants?latitude=34.74725&longitude=113.624931&offset=0&limit=20"
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
    del(i) {
      this.tableData.splice(i, 1);
    },
    edit(i) {
      console.log(i);
      this.editIndex = i;
      this.dialogFormVisible = true;
      this.form = this.tableData[i];
    },
    editOk() {
      this.tableData[this.editIndex] = this.form;
      this.dialogFormVisible = false;
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
  height: 200px;
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
