/**审批 */
<template>
  <div class="inStance">
    <TitleNav />
    <div class="con">
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
                    <p class="fill">
                      当前审批中 0 本月审批通过 1 本月审批驳回 0
                    </p>
                  </el-alert>
                </el-space>
              </span>
              <span>
                <el-button type="primary" size="large">流程设置</el-button>
              </span>
            </div>
          </div>
        </div>
      </el-card>
      <div class="list" style="margin-top: 20px">
        <el-card class="box-card">
          <el-table :data="tableData.tableData" style="width: 100%">
            <el-table-column type="selection" width="40px" />
            <el-table-column label="序号" type="index" width="60px" />
            <el-table-column prop="processName" label="审批类型" sortable />
            <el-table-column prop="username" label="申请人" sortable />
            <el-table-column
              prop="procCurrNodeUserName"
              label="当前审批人"
              sortable
            />
            <el-table-column prop="procApplyTime" label="审批发起时间" sortable>
              <template #default="scope">
                {{ new Date(scope.row.procApplyTime).toLocaleString() }}
              </template>
            </el-table-column>
            <el-table-column prop="processState" label="审批状态" sortable>
              <template #default="scope">
                <span v-if="scope.row.processState == 2">
                  <span class="qiu"></span>审批通过
                </span>
                <span v-if="scope.row.processState == 4">
                  <span class="che"></span>撤销
                </span>
                <span v-if="scope.row.processState == 1">
                  <span class="one"></span>审批中
                </span>
                <span v-if="scope.row.processState == 3">
                  <span class="red"></span>审批不通过
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="操作">
              <div>查看</div>
            </el-table-column>
          </el-table>
          <div class="page" style="margin-top: 20px">
            <div class="right">
              <el-pagination
                v-model:current-page="data.page"
                v-model:page-size="data.pageSize"
                :page-sizes="[10, 20, 30, 50]"
                layout="sizes, prev, pager, next, jumper"
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
import { reactive } from 'vue'
import * as TS from '../api/defind'
import { instance } from '@/api/instance.ts'
const data: TS.params = reactive({
  page: 1,
  pageSize: 10
})
let total
let tableData: Array<object> = reactive({
  tableData: []
})
instance(data).then((res) => {
  total = res.data.data.total
  tableData.tableData = [...res.data.data.rows]
})
const handleSizeChange = (val: number) => {
  data.pageSize = val
  instance(data).then((res) => {
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
  })
}
const handleCurrentChange = (val: number) => {
  data.page = val
  instance(data).then((res) => {
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
  })
}
</script>

<style lang="scss" scoped>
.inStance {
  height: 100%;
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
  margin: 0;
}
.el-table {
  font-size: 18px;
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
.con {
  padding: 10px;
  background-color: #eaecef;
  height: calc(100% - 102px);
}
p {
  background-color: #eaecef;
  width: 100%;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}
.page {
  width: 100%;
  height: 30px;
  .right {
    float: right;
  }
}
.qiu,
.che,
.one,
.red {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #00a854;
  margin-right: 5px;
}
.che {
  background-color: #bfbfbf;
}
.one {
  background-color: #108ee9;
}
.red {
  background-color: #d00;
}
</style>
