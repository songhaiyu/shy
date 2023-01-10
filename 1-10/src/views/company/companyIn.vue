<template>
  <div class="Company">
    <div class="top">
      <h3 @click="flag = 0" :class="flag == 0 ? 'color' : ''">角色管理</h3>
      <h3 @click="flag = 1" :class="flag == 1 ? 'color' : ''">公司管理</h3>
    </div>
    <div class="br"></div>
    <!-- 角色管理模块 -->
    <div class="role" v-show="flag == 0">
      <el-button type="primary" size="small" @click="dialogVisible = true"
        >+ 新增角色</el-button
      >
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column label="序号" type="index" width="150" />
        <el-table-column prop="name" label="角色名" sortable />
        <el-table-column prop="description" label="描述" sortable />
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small" style="font-size: 20px"
              >分配权限</el-button
            >
            <el-button link type="primary" size="small" style="font-size: 20px"
              >修改</el-button
            >
            <el-button link type="primary" size="small" style="font-size: 20px"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 新增弹框 -->
      <el-dialog v-model="dialogVisible" title="编辑角色" width="40%">
        <el-form :model="form" label-width="100px">
          <el-form-item label="角色名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="角色描述">
            <el-input v-model="form.description" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <!-- 公司管理模块 -->
    <div class="com" v-show="flag == 1">
      <div class="box">
        <span>企业名称</span>
        <input class="input" v-model="Information.name" type="text" disabled />
      </div>
      <div class="box">
        <span>公司地址</span>
        <input
          class="input"
          v-model="Information.companyAddress"
          type="text"
          disabled
        />
      </div>
      <div class="box">
        <span>公司电话</span>
        <input
          class="input"
          v-model="Information.companyPhone"
          type="text"
          disabled
        />
      </div>
      <div class="box">
        <span>邮箱</span>
        <input
          class="input"
          v-model="Information.mailbox"
          type="text"
          disabled
        />
      </div>
      <div class="box">
        <span>备注</span>
        <input
          class="input"
          v-model="Information.remarks"
          type="text"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { getCompany, getCompanyInformation } from '@/api/company.ts'
import { CompanyApi } from '@/api/defind'

const flag = ref<number>(0) //切换状态
const dialogVisible = ref<boolean>(false) // 控制弹框

/*定义表格数据*/
const tableData = reactive<CompanyApi[]>([])
/*定义表单数据*/
const form = reactive({
  name: '',
  description: ''
})
/*请求数据*/
getCompany().then((res) => {
  console.log(res)
  res.data.data.rows.forEach((item: CompanyApi) => {
    tableData.push(item)
  })
})
/*信息数据*/
let Information = reactive({
  name: '',
  companyAddress: '',
  companyPhone: '',
  mailbox: '',
  remarks: ''
})
/*请求公司信息*/
getCompanyInformation().then((res) => {
  console.log(res)
  Information.name = res.data.data.name
  Information.companyAddress = res.data.data.companyAddress
  Information.companyPhone = res.data.data.companyPhone
  Information.mailbox = res.data.data.mailbox
  Information.remarks = res.data.data.remarks
})
</script>

<style lang="scss" scoped>
.el-table {
  font-size: 20px;
}
.Company {
  margin: 15px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
.top {
  width: 300px;
  display: flex;
  justify-content: space-around;
  h3 {
    margin: 0;
    padding: 0 15px;
    padding-bottom: 10px;
    font-weight: 500;
  }
}
.color {
  border-bottom: 3px solid #409eff;
  color: #409eff;
}
.br {
  width: 100%;
  height: 3px;
  background-color: #ddd;
}
.role {
  padding: 40px 50px;
}
.el-table {
  margin-top: 15px;
}
.com {
  margin-top: 30px;
  margin-left: 150px;
  .box {
    line-height: 60px;
    display: flex;
    align-items: center;
    span {
      width: 100px;
      text-align: right;
    }
    .input {
      margin-left: 10px;
      width: 320px;
      height: 40px;
      background-color: #f5f7fa;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 0 6px;
      color: #aaa;
    }
  }
}
</style>
