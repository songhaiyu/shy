/**考勤 */
<template>
  <div class="permissions">
    <TitleNav />
    <div class="con">
      <div class="top">
        <el-card class="box-card">
          <div>
            <div>
              <div class="flex">
                <span>
                  <el-space fill>
                    <el-alert
                      type="info"
                      show-icon
                      :closable="false"
                      style="color: #439eff"
                    >
                      <p class="fill">本月 ： 入职 离职 调薪 未定薪</p>
                    </el-alert>
                  </el-space>
                </span>
                <span class="shou">
                  <span>设置</span>
                  <span>202003月报表</span>
                </span>
              </div>
            </div>
          </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <div>
            <div style="margin-top: 20px">
              <b>聘用形式: </b>
              <span style="margin-right: 10px">
                <span> <el-checkbox size="large" />正式 </span>
                <span> <el-checkbox size="large" />非正式 </span>
              </span>
              <b>员工状态: </b>
              <span style="margin-right: 10px">
                <span> <el-checkbox size="large" />在职 </span>
                <span> <el-checkbox size="large" />离职 </span>
              </span>
            </div>
            <div style="margin-top: 20px">
              <b>部门：</b>
              <span
                v-for="item in tableDataList.tableDataList"
                :key="item.id"
                style="margin-right: 10px"
              >
                <el-checkbox size="large" @change="fliterName(item.name)" />
                {{ item.name }}</span
              >
            </div>
          </div>
        </el-card>
      </div>
      <div class="list">
        <el-card class="box-card" style="height: 100%">
          <el-table
            :data="tableData.tableData"
            style="width: 100%; padding: 10px"
          >
            <el-table-column label="序号" type="index" width="100px" />
            <el-table-column prop="username" label="姓名" width="140x" />
            <el-table-column prop="mobile" label="手机" width="140" />

            <el-table-column prop="workNumber" label="工号" />
            <el-table-column prop="workNumber" label="聘用形式" />
            <el-table-column prop="departmentName" label="部门" />
            <el-table-column prop="timeOfEntry" label="入职时间" />
            <el-table-column label="工资基数">
              <template #default="scope">
                {{ scope.row.currentBasicSalary + scope.row.currentPostWage }}
              </template>
            </el-table-column>
            <el-table-column prop="departmentName" label="津贴方案"
              >通用方案</el-table-column
            >
            <el-table-column label="操作">
              <template #default="scope">
                <el-button type="primary">调薪</el-button>
                <el-button @click="handleEdit(scope.$index, scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="page">
            <div class="right">
              <el-pagination
                v-model:current-page="data.page"
                v-model:page-size="data.pageSize"
                :page-sizes="[10, 20, 30, 50]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <p>copyright@ 2018 iHRM 系统 版权所有</p>
  </div>
</template>
<script lang="ts" setup>
import TitleNav from '../../components/TitleNav.vue'
import { salary } from '@/api/salary.ts'
import { depaerMent } from '@/api/depaerMent.ts'
import { reactive } from 'vue'
import * as TS from '../api/defind'
const data: TS.params = reactive({
  page: 1,
  pageSize: 10
})
let total = 0
let tableData: Array<object> = reactive({
  tableData: [],
  tableDataCope: []
})
let tableDataList: Array<object> = reactive({
  tableDataList: []
})

salary(data).then(async (res) => {
  console.log(res)
  total = res.data.data.total
  tableData.tableData = [...res.data.data.rows]
  tableData.tableDataCope = [...res.data.data.rows]
})
depaerMent().then((res) => {
  tableDataList.tableDataList = [...res.data.data.depts]
})

const handleSizeChange = (val: number) => {
  data.pageSize = val
  salary(data).then(async (res) => {
    console.log(res)
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
    tableData.tableDataCope = [...res.data.data.rows]
  })
}
const handleCurrentChange = (val: number) => {
  data.page = val
  salary(data).then(async (res) => {
    console.log(res)
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
    tableData.tableDataCope = [...res.data.data.rows]
  })
}
const fliterName = (val) => {
  tableData.tableData = tableData.tableDataCope.filter((ele) => {
    return ele.departmentName == val
  })
}
</script>
<style lang="scss" scoped>
p {
  background-color: #eaecef;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  margin: 0;
}
.con {
  padding: 20px;
  height: calc(100% - 102px);
  background-color: #eceef1;
}
.list {
  margin-top: 20px;
}
.page {
  width: 100%;
  height: 30px;
  .right {
    float: right;
  }
}
.el-table {
  font-size: 18px;
}
.el-alert--info.is-light {
  border: 1px solid #439eff;
  background-color: #e6f7ff;
}
.fill {
  background-color: #e6f7ff;
  color: #000;
  font-size: 18px;
  padding: 6px 0 10px 0;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-child(2) {
    span {
      margin-right: 20px;
      font-size: 18px;
    }
  }
}
.shou:hover {
  cursor: pointer;
}
</style>
