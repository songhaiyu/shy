<template>
  <div class="role">
    <el-card class="box-card">
      <el-button type="primary" @click="addOrUpdata">添加角色</el-button>
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
            <el-button type="primary" icon="el-icon-edit" @click="addOrUpdata(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="delRoled(scope.row)">删除</el-button>
            <el-button type="warning" icon="el-icon-delete" @click="rights(scope.row)">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <RoleAddOrUpdata v-if="addOrUpdataVisible" ref="RoleAddOrUpdataVi" @addOrUpdataOk="addOrUpdataOk" />
    <TreeRoles ref="TreeRoles" @Setrole="Setrole" />
  </div>
</template>

<script>
import { getRolesList, editRoles, addRoles, delRoles, GetTree, SetRolse, DeleteRolse } from "@/api/role.js"
import { STATUS } from "@/constStatus"

import RoleAddOrUpdata from "./RoleAddOrUpdata.vue"
import TreeRoles from "./TreeRoles.vue"
export default {
  data() {
    return {
      tableData: [], //渲染数据
      addOrUpdataVisible: false, //添加角色

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
    /***获取角色列表 */
    getRole() {
      getRolesList().then((res) => {
        const { msg, status } = res.meta
        if (status === STATUS.SUCCESS) {
          const { data } = res
          this.tableData = data
        } else {
          this.$message.error(msg)
        }
      })
    },
    /**打开模态框 */
    addOrUpdata(info) {
      console.log(info)
      this.addOrUpdataVisible = true
      if (info.constructor == Object) {
        this.$nextTick(() => {
          this.$refs.RoleAddOrUpdataVi.init(info)
        })
      } else {
        this.$nextTick(() => {
          this.$refs.RoleAddOrUpdataVi.init()
        })
      }
    },
    /**添加或编辑 */
    addOrUpdataOk(obj) {
      if (obj.id) {
        this.addOrUpdataVisible = false
        editRoles(obj).then((res) => console.log(res))
      } else {
        addRoles(obj).then((res) => console.log(res))
        this.addOrUpdataVisible = false
      }
      console.log(obj)
    },

    // 删除
    delRoled(obj) {
      this.$confirm("确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delRoles(obj.id).then((res) => res)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    /**分配角色权限 */
    rights(item) {
      this.roleId = item.id
      GetTree().then((res) => {
        let { data } = res
        this.$refs.TreeRoles.getTree(data)
      })
    },
    /**角色授权 */
    Setrole(arrID) {
      SetRolse({ roleId: this.roleId, rights: arrID }).then(() => {
        this.getlist()
      })
    },
    /**删除角色指定权限 */
    deltree(rolseId, rightId) {
      DeleteRolse({ roleId: rolseId, rightId: rightId }).then(() => {})
    }
    // addTree() {
    //   this.TreeData.forEach((ele) => {
    //     if (ele.pid == 0) {
    //       this.oneTree.push(ele)
    //     }
    //     if (ele.pid == "101" || ele.pid == "102" || ele.pid == "103" || ele.pid == "125" || ele.pid == "145") {
    //       this.twoTree.push(ele)
    //     }
    //   })
    //   this.treeVisible = false
    //   this.$message.success("设置权限成功")
    // },
    // getLeafKeys(node, arr) {
    //   console.log(arr)
    //   if (arr == true) {
    //     this.TreeData.push(node)
    //     console.log(this.TreeData)
    //   }
    // },
    // objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    //   console.log(row, column)
    //   if (columnIndex === 0) {
    //     if (rowIndex % 2 === 0) {
    //       return {
    //         rowspan: 2,
    //         colspan: 1
    //       }
    //     } else {
    //       return {
    //         rowspan: 0,
    //         colspan: 0
    //       }
    //     }
    //   }
    // }
  },
  created() {
    this.getRole()
  },
  mounted() {},
  components: { RoleAddOrUpdata, TreeRoles },
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
