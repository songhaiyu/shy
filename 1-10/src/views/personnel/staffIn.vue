<template>
  <div class="Staff">
    <!-- 头部 -->
    <staffTop></staffTop>
    <!-- 表格 -->
    <el-card class="card">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" type="index" label="序号" width="60" />
        <el-table-column prop="username" label="姓名" sortable />
        <el-table-column prop="mobile" label="手机号" sortable width="120" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column
          prop="formOfEmployment"
          label="聘用形式"
          sortable
          width="110"
        />
        <el-table-column prop="departmentName" label="部门" sortable />
        <el-table-column
          prop="timeOfEntry"
          label="入职时间"
          sortable
          width="200"
        />
        <el-table-column
          prop="inServiceStatus"
          label="是否在职"
          sortable
          width="110"
        >
          <template #default="scope">
            {{ scope.row.inServiceStatus == 1 ? '在职' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="enableState" label="状态" sortable>
          <template #default="scope">
            {{ scope.row.enableState == 1 ? '启用' : '' }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="270">
          <template #default>
            <el-button link type="primary" size="small">查看</el-button>
            <el-button link type="primary" size="small">转正</el-button>
            <el-button link type="primary" size="small">调岗</el-button>
            <el-button link type="primary" size="small">离职</el-button>
            <el-button link type="primary" size="small">角色</el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        small
        background
        layout="total, prev, pager, next"
        :total="50"
      />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import staffTop from './staffTop.vue'
import { Staff } from '@/api/staff.ts'
import { StaffApi } from '@/api/defind.ts'
import { reactive } from 'vue'
{
  staffTop
}

/*分页total*/

/*定义表格数据*/
const tableData = reactive<StaffApi[]>([])
/*请求数据*/
Staff().then((res) => {
  console.log(res)
  res.data.data.rows.forEach((item: StaffApi) => {
    tableData.push(item)
  })
})
</script>

<style lang="scss" scoped>
.Staff {
  margin: 15px;
}
.card {
  margin-top: 10px;
  .el-pagination {
    margin-top: 20px;
  }
}
</style>
