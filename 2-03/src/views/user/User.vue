<template>
  <div class="box">
    <el-row>
      <el-col :span="5">
        <el-input placeholder="请输入内容" v-model="info.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="usersList"></el-button>
        </el-input>
      </el-col>
      <el-col :span="3">
        <el-button class="btn" type="primary" @click="addUserOrUpdata">添加用户</el-button>
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
              @change="changState(scope.row)"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="addUserOrUpdata(scope.row)"></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.row.id)"></el-button>
            <el-button size="mini" type="warning" icon="el-icon-setting" @click="assignRoles(scope.row)"></el-button>
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

    <userAddOrUpdata v-if="visible" @closeChildDialog="closeChildDialog" ref="userAddOrUpdataVisible" />
    <AssignRolesVue ref="assign" @updateAss="updateAss" />
  </div>
</template>

<script>
import userAddOrUpdata from "./userAddOrUpdata.vue"
import AssignRolesVue from "./AssignRoles.vue"

import { getUserList, delUser, updateUserAss } from "@/api/user"
import { STATUS } from "@/constStatus"
export default {
  data() {
    return {
      visible: false,
      tableData: [], //渲染数据
      tableDatas: [], //备份数据
      info: {
        query: "", //搜索
        pagenum: 1, //当前页码数
        pagesize: 5 //每页展示的个数
      },
      total: 0, //总数

      options: [],
      value: "" //分类角色下拉框选中
    }
  },
  created() {
    this.usersList()
    /**侧边栏 */
    this.$http.send("/roles", {}, "get").then((res) => {
      this.options = res.data.data
    })
  },
  methods: {
    /**添加或者编辑 */
    addUserOrUpdata(info) {
      this.visible = true
      if (info.constructor == Object) {
        this.$nextTick(() => {
          this.$refs.userAddOrUpdataVisible.init(info)
        })
      } else {
        this.$nextTick(() => {
          this.$refs.userAddOrUpdataVisible.init()
        })
      }
    },
    /**关闭组件模态框或者添加数据 */
    closeChildDialog(info) {
      this.visible = false
      if (info) {
        this.usersList()
        /***有值表示新增 没值关闭 */
        this.tableData.push(info)
      }
    },
    // 请求用户数据
    usersList() {
      getUserList(this.info).then((res) => {
        /**结构赋值 */
        const { status, msg } = res.meta
        if (status === STATUS.SUCCESS) {
          const { total, users } = res.data
          /**列表信息 */
          this.tableData = users
          /**总条数 */
          this.total = total
        } else {
          /**报错信息 */
          this.$message.error(msg)
        }
      })

      // this.$http.send("/users", this.info, "post").then((res) => {
      //   if (res.data.meta.status == 200) {
      //     this.tableData = res.data.data.users
      //     this.tableDatas = JSON.stringify(res.data.data.users)
      //     this.getPagination()
      //     // 获取总数
      //     this.total = res.data.data.total
      //   } else {
      //     // 拿到错误信息
      //     this.$message.error(res.data.meta.msg)
      //   }
      // })
    },

    // 删除功能
    handleDelete(id) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delUser(id).then((res) => {
            console.log(res)
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
      /**切换当前页面数量 */
      this.info.pagesize = val
      /**重新渲染列表 */
      this.usersList()
    },
    // 当前页码数发生改变时触发
    handleCurrentChange(val) {
      /**切换当前页码 */
      this.info.pagenum = val
      /**重新渲染列表 */
      this.usersList()
    },

    // 分配角色
    assignRoles(obj) {
      this.$refs.assign.open(obj)
    },
    // 确定分配
    updateAss(obj) {
      updateUserAss(obj).then((res) => {
        console.log(res)
      })
    },
    // 状态切换
    changState(obj) {
      updateUserAss(obj).then((res) => {
        console.log(res)
      })
    }
  },
  components: { userAddOrUpdata, AssignRolesVue }
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
