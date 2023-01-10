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
                      <p class="fill">有 0 条考勤审批尚未处理</p>
                    </el-alert>
                  </el-space>
                </span>
                <span class="shou">
                  <el-button type="primary">导入</el-button>
                  <el-button type="primary">提醒</el-button>
                  <el-button type="primary">设置</el-button>
                  <el-button type="primary">历史归档</el-button>
                  <el-button type="primary">3月份报表</el-button>
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
              <b>考勤状态: </b>
              <span style="margin-right: 10px">
                <span>
                  <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">正常</el-radio>
                    <el-radio label="2" size="large">旷工</el-radio>
                    <el-radio label="3" size="large">事假</el-radio>
                    <el-radio label="4" size="large">调休</el-radio>
                    <el-radio label="5" size="large">迟到</el-radio>
                    <el-radio label="6" size="large">早退</el-radio>
                  </el-radio-group>
                </span>
              </span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="list" style="height: 700px">
        <el-card class="box-card" style="height: 100%">
          <el-table
            border
            :data="tableData.tableData"
            style="width: 100%; padding: 10px"
          >
            <el-table-column label="序号" type="index" width="100px" />
            <el-table-column prop="username" label="姓名" width="140x" />
            <el-table-column prop="workNumber" label="工号" />
            <el-table-column prop="departmentName" label="部门" />
            <el-table-column prop="mobile" label="手机" width="140" />
            <el-table-column prop="timeOfEntry" label="3/1">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/2">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/3">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/4">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/5">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/6">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/7">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/8">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/9">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/10">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/11">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/12">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/13">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/14">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/15">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/16">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/17">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/18">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/19">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/20">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/21">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/22">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/23">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/24">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/25">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/26">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/27">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/28">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/29">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/30">
              旷工</el-table-column
            >
            <el-table-column prop="timeOfEntry" label="3/31">
              旷工</el-table-column
            >
          </el-table>
          <div class="page">
            <div class="right">
              <el-pagination
                v-model:current-page="data.page"
                v-model:page-size="data.pageSize"
                :page-sizes="[10, 20, 30, 50]"
                layout="total, prev, pager, next"
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

import { attenD } from '@/api/attenD.ts'
import { depaerMent } from '@/api/depaerMent.ts'

import { reactive, ref } from 'vue'
import * as TS from '../api/defind'
const data: TS.params = reactive({
  page: 1,
  pageSize: 10
})
const radio1 = ref('0')
let total = 0
let tableData: Array<object> = reactive({
  tableData: [],
  tableDataCope: []
})
let tableDataList: Array<object> = reactive({
  tableDataList: []
})

attenD(data).then(async (res) => {
  total = res.data.data.data.total
  tableData.tableData = [...res.data.data.data.rows]
  tableData.tableDataCope = [...res.data.data.data.rows]
})
depaerMent().then((res) => {
  tableDataList.tableDataList = [...res.data.data.depts]
})

const handleSizeChange = (val: number) => {
  data.pageSize = val
  attenD(data).then(async (res) => {
    total = res.data.data.data.total
    tableData.tableData = [...res.data.data.data.rows]
    tableData.tableDataCope = [...res.data.data.data.rows]
  })
}
const handleCurrentChange = (val: number) => {
  data.page = val
  attenD(data).then(async (res) => {
    total = res.data.data.data.total
    tableData.tableData = [...res.data.data.data.rows]
    tableData.tableDataCope = [...res.data.data.data.rows]
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
