/**权限设置 */
<template>
  <div class="permissions">
    <TitleNav />
    <div class="box">
      <el-card class="box-card">
        <div style="text-align: right">
          <el-button size="large" type="primary" :icon="Edit"
            >添加菜单</el-button
          >
        </div>
        <div>
          <el-table
            :data="tableData"
            :border="parentBorder"
            style="width: 100%"
          >
            <el-table-column label="Date" width="180">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <el-icon><FolderOpened /></el-icon>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="菜单名称" prop="name" />
            <el-table-column label="权限标识" prop="code" />
            <el-table-column label="描述" prop="description" />
            <el-table-column label="操作" prop="address">
              <template #default="props">
                <span v-if="!props">添加权限点</span>
                <span v-if="!props">添加权限点</span>
                <span class="blue">添加权限点</span>
                <span class="blue">查看api权限</span>
                <span class="blue">查看</span>
                <span class="blue">删除</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    <p>copyright@ 2018 iHRM 系统 版权所有</p>
  </div>
</template>
<script lang="ts" setup>
import { FolderOpened } from '@element-plus/icons-vue'

import TitleNav from '../../components/TitleNav.vue'
import { Edit } from '@element-plus/icons-vue'
import { permissions } from '@/api/permissions.ts'
import { ref, reactive } from 'vue'
import * as TS from '../api/defind'
const parentBorder = ref(false)
const data: TS.permissiosData = reactive({
  type: 1,
  pid: 0
})
let tableData: Array<object> = reactive([])
permissions(data).then((res) => {
  tableData.push(...res.data.data)
})
</script>
<style lang="scss" scoped>
.permissions {
  height: 100%;
}
p {
  background-color: #eaecef;
  width: 100%;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}
.box {
  height: calc(100% - 102px);
  padding: 30px;
  background-color: #eaecef;
}
.el-table {
  font-size: 18px;
}
.blue {
  color: #50a6ff;
  margin-right: 10px;
}
</style>
