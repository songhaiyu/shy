<template>
  <el-card class="Stafftop">
    <el-button size="small" type="primary" @click="router.push('/staffImport')"
      >导入</el-button
    >
    <el-button size="small" type="primary" @click="dialogVisible = true"
      >+ 新增员工</el-button
    >
  </el-card>
  <!-- 弹出框 -->
  <el-dialog v-model="dialogVisible" title="编辑员工" width="40%">
    <el-form :model="form" label-width="100px">
      <el-form-item label="姓名">
        <el-input v-model="form.username" placeholder="1-30个字符" />
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.mobile" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="入职时间">
        <el-col :span="11">
          <el-date-picker
            v-model="form.timeOfEntry"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="聘用形式">
        <el-select v-model="form.formOfEmployment" placeholder="请选择">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="工号">
        <el-input v-model="form.workNumber" placeholder="1-20个字符" />
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="form.departmentName" placeholder="请选择" />
      </el-form-item>
      <el-form-item label="转正时间">
        <el-col :span="11">
          <el-date-picker
            v-model="form.createTime"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
// import { StaffApi } from '@/api/defind'
import { useRouter } from 'vue-router'
const router = useRouter()
const dialogVisible = ref(false) // 控制弹出框
/*表单数据*/
const form = reactive({
  username: '',
  mobile: '',
  timeOfEntry: '',
  formOfEmployment: '',
  workNumber: '',
  departmentName: '',
  createTime: ''
})
</script>

<style lang="scss" scoped>
.Stafftop {
  text-align: right;
}
</style>
