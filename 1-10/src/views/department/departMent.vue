/**社保主页 */
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
                      <p class="fill">
                        本月： 社保在缴 公积金在缴 增员 减员 入职 离职
                      </p>
                    </el-alert>
                  </el-space>
                </span>
                <span class="shou">
                  <span @click="router.push('/securitysIn')">历史归档</span>
                  <span @click="router.push('/monthStatement')"
                    >202001月报表</span
                  >
                </span>
              </div>
            </div>
            <div style="margin-top: 40px">
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
            <div style="margin-top: 20px">
              <b>社保城市：</b>
              <span
                v-for="item in tableDataCity.tableDataCity"
                :key="item.id"
                style="margin-right: 10px"
              >
                <el-checkbox size="large" @change="fliterCity(item.name)" />
                {{ item.name }}</span
              >
            </div>
            <div style="margin-top: 20px">
              <b>公积金城市：</b>
              <span
                v-for="item in tableDataCity.tableDataCity"
                :key="item.id"
                style="margin-right: 10px"
              >
                <el-checkbox size="large" @change="fliterCity(item.name)" />
                {{ item.name }}</span
              >
            </div>
          </div>
        </el-card>
      </div>
      <div class="list">
        <el-card class="box-card">
          <el-table
            :data="tableData.tableData"
            style="width: 100%; padding: 10px"
          >
            <el-table-column label="序号" type="index" width="100px" />
            <el-table-column prop="username" label="姓名" sortable />
            <el-table-column prop="mobile" label="手机" sortable />
            <el-table-column prop="workNumber" label="工号" sortable />
            <el-table-column prop="departmentName" label="部门" sortable />
            <el-table-column prop="timeOfEntry" label="入职时间" sortable>
            </el-table-column>
            <el-table-column prop="address" label="离职时间" sortable>
              <div>----</div>
            </el-table-column>
            <el-table-column prop="providentFundCity" label="社保城市" />
            <el-table-column prop="participatingInTheCity" label="公积金城市" />
            <el-table-column prop="socialSecurityBase" label="社保基数" />
            <el-table-column prop="providentFundBase" label="公积金基数" />
          </el-table>
          <div class="page">
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
import { useRouter } from 'vue-router'
const router = useRouter()
import { depaerMentList, depaerMent, city } from '@/api/depaerMent.ts'
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
let tableDataCity: Array<object> = reactive({
  tableDataCity: []
})
depaerMentList(data).then(async (res) => {
  total = res.data.data.total
  tableData.tableData = [...res.data.data.rows]
  tableData.tableDataCope = [...res.data.data.rows]
  // tableData.push([...res.data.data.rows])
})
depaerMent().then((res) => {
  tableDataList.tableDataList = [...res.data.data.depts]
})
city().then((res) => {
  console.log(res)
  tableDataCity.tableDataCity = [...res.data.data]
})
const handleSizeChange = (val: number) => {
  data.pageSize = val
  depaerMentList(data).then((res) => {
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
  })
}
const handleCurrentChange = (val: number) => {
  data.page = val
  depaerMentList(data).then((res) => {
    total = res.data.data.total
    tableData.tableData = [...res.data.data.rows]
  })
}
const fliterName = (val) => {
  tableData.tableData = tableData.tableDataCope.filter((ele) => {
    return ele.departmentName == val
  })
}
const fliterCity = (val) => {
  tableData.tableData = tableData.tableDataCope.filter((ele) => {
    return ele.providentFundCity == val
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
  background-color: #eaecef;
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
