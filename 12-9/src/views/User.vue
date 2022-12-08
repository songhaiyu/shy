<template>
  <div class="box">
    <el-row>
      <el-col :span="5">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button class="btn" type="primary" @click="addVisible = true">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              @change="changState(scope.$index)"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.row, scope.$index)"
            ></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index)"></el-button>
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-setting"
              @click="assignRoles(scope.row, scope.$index)"
            ></el-button>
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
    <!-- 添加模态框 -->
    <el-dialog title="添加用户" :visible.sync="addVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑模态框 -->
    <el-dialog title="编辑用户" :visible.sync="editVisible">
      <el-form :model="ruleFormEdit" ref="ruleForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="ruleFormEdit.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="ruleFormEdit.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="ruleFormEdit.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editOk">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分配角色 -->
    <!-- <el-dialog title="分类角色" :visible.sync="rolesVisible" width="50%" height="40%">

      <span slot="footer" class="dialog-footer">
        <el-button @click="rolesVisible = false">取 消</el-button>
        <el-button type="primary" @click="rolesVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->
    <el-dialog title="分类角色" :visible.sync="rolesVisible">
      <p style="font-size: 20px">当前的用户：{{ rolesForm.username }}</p>
      <p style="font-size: 20px">当前的角色：{{ rolesForm.role_name }}</p>
      <p style="font-size: 20px">
        分类新角色：
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.roleName" :label="item.roleName" :value="item.roleName">
          </el-option>
        </el-select>
      </p>

      <div slot="footer" class="dialog-footer">
        <el-button @click="rolesVisible = false">取 消</el-button>
        <el-button type="primary" @click="rolesOk">确 定</el-button>
      </div>
    </el-dialog>
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
        pagesize: 2 //每页展示的个数
      },
      total: 0, //总数
      addVisible: false, // 添加模态框
      editVisible: false, //编辑模态框
      rolesVisible: false, //分配角色
      ruleForm: {
        //添加表单数据
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      ruleFormEdit: {
        //修改表单数据
        id: "",
        username: "",
        email: "",
        mobile: ""
      },
      rolesForm: {
        //分类角色数据
        username: "",
        role_name: ""
      },

      formLabelWidth: "100px",
      rules: {
        //正则
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请正确输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请正确输入密码", trigger: "blur" }],
        mobile: [{ required: true, message: "请正确输入密码", trigger: "blur" }]
      },
      disabled: false, //按钮禁用
      editIndex: -1, //修改的下标
      options: [],
      value: "", //分类角色下拉框选中
      rolesIndex: -1 //分配角色下标
    }
  },
  created() {
    this.usersList()
    this.$http.send("/roles", {}, "get").then((res) => {
      this.options = res.data.data
    })
  },
  methods: {
    // 请求用户数据
    usersList() {
      this.$http.send("/user", this.info, "post").then((res) => {
        if (res.data.meta.status == 200) {
          this.tableData = res.data.data.users
          this.tableDatas = JSON.stringify(res.data.data.users)
          this.getPagination()
          // 获取总数
          this.total = res.data.data.total
        } else {
          // 拿到错误信息
          this.$message.error(res.data.meta.msg)
        }
      })
    },
    // 添加功能
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.tableData.push(this.ruleForm)
          this.addVisible = false
          this.ruleForm = {}
          this.$message.success("添加成功！")
        } else {
          this.$message.error("添加失败")
        }
      })
    },
    // 编辑功能
    handleEdit(row, i) {
      this.editIndex = i
      this.editVisible = true
      this.ruleFormEdit = this.tableData[i]
    },
    // 确定修改
    editOk() {
      this.tableData[this.editIndex] = this.ruleFormEdit
      this.editVisible = false
    },
    // 删除功能
    handleDelete(index) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(index, 1)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    // 搜索
    search() {
      this.tableDatas = JSON.parse(this.tableDatas)
      this.tableData = this.tableDatas.filter((item) => {
        return item.username.includes(this.input)
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
    },
    // 分配角色
    assignRoles(val, i) {
      this.rolesVisible = true
      this.rolesIndex = i
      this.rolesForm = val
    },
    // 确定分配
    rolesOk() {
      this.tableData[this.rolesIndex].roleName = this.value
      this.rolesVisible = false
      this.$message.success("更新角色成功")
    },
    // 状态切换
    changState(i) {
      console.log(this.tableData[i].mg_state)
      this.$message.success("切换成功")
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
</style>
