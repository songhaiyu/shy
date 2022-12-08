<template>
  <div class="role">
    <el-card class="box-card">
      <el-button type="primary" @click="addVisible = true">添加角色</el-button>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <template slot-scope="props">
            <span v-if="!props"></span>
            <div v-if="oneTree.length == 0" style="text-align: center">暂无权限</div>
            <div class="box">
              <div v-for="item in oneTree" :key="item.id" class="one">
                <span>{{ item.authName }} X</span
                ><span><i class="el-icon-caret-right" style="margin-left: 10px"></i></span>
                <div style="border-left: 1px solid #ccc">
                  <div v-for="ele in item.children" :key="ele.id" class="two">
                    <div>
                      <div class="color">{{ ele.authName }}</div>
                    </div>
                    <span><i class="el-icon-caret-right"></i></span>

                    <div class="warp">
                      <div v-for="son in ele.children" :key="son.id" class="three">
                        <div>
                          <div class="color">{{ son.authName }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="#" type="index"> </el-table-column>
        <el-table-column label="角色名称" prop="roleName"> </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="editRoles(scope.row, scope.$index)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="delRoled(scope.$index)">删除</el-button>
            <el-button type="warning" icon="el-icon-delete" @click="treeVisible = true">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 添加角色弹框 -->
    <el-dialog title="添加角色" :visible.sync="addVisible">
      <el-form :model="addForm" label-width="100px" :rules="rules" ref="addForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addRoles('addForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑角色弹框 -->
    <el-dialog title="编辑角色" :visible.sync="editVisible">
      <el-form :model="editForm" label-width="100px" :rules="rules" ref="addForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="editOk">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 树形弹框 -->

    <el-dialog title="分配权限" :visible.sync="treeVisible" width="40%">
      <el-tree
        :data="treeList"
        show-checkbox
        default-expand-all
        node-key="id"
        @check-change="getLeafKeys"
        :default-checked-keys="TreeData"
        :props="defaultProps"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="treeVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTree">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [], //渲染数据
      addVisible: false, //添加角色
      editVisible: false, //添加角色
      addForm: {
        roleName: "",
        roleDesc: ""
      },
      editForm: {
        roleName: "",
        roleDesc: ""
      },
      rules: {
        roleName: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        roleDesc: [
          { required: true, message: "请输入角色描述", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 1 到 30 个字符", trigger: "blur" }
        ]
      },
      editIndex: -1, //修改的下标
      treeList: [], //树形数据
      treeVisible: false, //树形弹框状态
      defaultProps: {
        children: "children",
        label: "authName"
      },
      TreeData: [],
      oneTree: [],
      twoTree: [],
      threeTree: []
    }
  },
  methods: {
    addRoles(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.tableData.push(this.addForm)
          this.addForm = {}
          this.$message.success("添加角色成功")
          this.addVisible = false
        } else {
          this.$message.error("添加角色失败")
          return false
        }
      })
    },
    //回填
    editRoles(row, i) {
      this.editVisible = true
      this.editForm.roleName = row.roleName
      this.editForm.roleDesc = row.roleDesc
      this.editIndex = i
    },
    // 确定修改
    editOk() {
      this.$set(this.tableData, this.editIndex, this.editForm)
      this.editVisible = false
      this.$message.success("修改角色成功")
    },
    // 删除
    delRoled(i) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.tableData.splice(i, 1)
          this.$message.success("删除角色成功")
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    addTree() {
      this.TreeData.forEach((ele) => {
        if (ele.pid == 0) {
          this.oneTree.push(ele)
        }
        if (ele.pid == "101" || ele.pid == "102" || ele.pid == "103" || ele.pid == "125" || ele.pid == "145") {
          this.twoTree.push(ele)
        }
      })
      this.treeVisible = false
      this.$message.success("设置权限成功")
    },
    getLeafKeys(node, arr) {
      console.log(arr)
      if (arr == true) {
        this.TreeData.push(node)
        console.log(this.TreeData)
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column)
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  },
  created() {
    this.$http.send("/roles", {}, "get").then((res) => {
      this.tableData = res.data.data
      this.$message.success("获取角色成功")
    })
    this.$http.send("/tree", {}, "get").then((res) => {
      this.treeList = res.data.data
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
  font-size: 20px;
}
.one {
  width: 100%;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border: 1px solid #ccc;
  span:nth-child(1) {
    padding: 5px 10px;
    background-color: #409eff;
    color: #fff;
    border-radius: 6px;
  }
}
.two {
  margin-left: 20px;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  .color {
    padding: 5px 10px;
    background-color: #67c23a;
    color: #fff;
    border-radius: 6px;
  }
}
.three {
  display: flex;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-right: 5px;
  .color {
    padding: 5px 10px;
    background-color: #e6a23c;
    color: #fff;
    border-radius: 6px;
  }
}
.warp {
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 800px;
}
.box {
  width: 90%;
  // background-color: #e6dee1;
  margin: 10px auto;
}
</style>
