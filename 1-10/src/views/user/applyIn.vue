<template>
  <div class="apply">
    <el-dialog
      v-model="dialogVisible"
      title="申请"
      width="30%"
      :before-close="handleClose"
    >
      <template #header="{ titleId, titleClass }">
        <div class="my-header">
          <p :id="titleId" :class="titleClass" style="font-size: 22px">申请</p>
        </div>
      </template>
      <el-form
        ref="sizeForms"
        :model="sizeForm"
        label-width="auto"
        :label-position="labelPosition"
        :size="size"
      >
        <el-form-item label="申请类型">
          <el-select v-model="sizeForm.processName" placeholder="选择类型">
            <el-option label="加班" value="加班" />
            <el-option label="离职" value="离职" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="加班开始时间"
          v-if="sizeForm.processName == '加班'"
        >
          <el-col :span="11">
            <el-time-picker
              v-model="sizeForm.start_time"
              label="Pick a time"
              placeholder="选择日期时间"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item
          label="加班结束时间"
          v-if="sizeForm.processName == '加班'"
        >
          <el-col :span="11">
            <el-time-picker
              v-model="sizeForm.end_time"
              label="Pick a time"
              placeholder="选择日期时间"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item
          label="期望离职时间"
          v-if="sizeForm.processName == '离职'"
        >
          <el-col :span="11">
            <el-time-picker
              v-model="sizeForm.date3"
              label="Pick a time"
              placeholder="选择日期时间"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="补偿方式" v-if="sizeForm.processName == '加班'">
          <el-radio-group v-model="sizeForm.resource">
            <el-radio label="调休" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="加班原因" v-if="sizeForm.processName == '加班'">
          <el-input v-model="sizeForm.reason" type="textarea" />
        </el-form-item>
        <el-form-item label="离职原因" v-if="sizeForm.processName == '离职'">
          <el-input v-model="sizeForm.why1" type="textarea" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="add">提交</el-button>
          <el-button type="primary" @click="resetForm"> 重置 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<!-- <script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { process } from '@/api/user.ts'
let dialogVisible = ref(true)
const size = ref('default')
const labelPosition = ref('right')
import { ElMessage } from 'element-plus'
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const sizeForm = reactive({
  processName: '加班',
  start_time: '',
  end_time: '',
  date3: '',
  delivery: false,
  resource: true,
  desc: '',
  reason: '',
  wh1: '',
  processKey: 'process_dimission',
  userId: Date.parse(new Date())
})
const resetForm = () => {
  console.log(1)
  sizeForm.processName = '加班'
  sizeForm.start_time = ''
  sizeForm.end_time = ''
  sizeForm.date3 = ''
  sizeForm.delivery = false
  sizeForm.resource = true
  sizeForm.desc = ''
  sizeForm.reason = ''
  sizeForm.wh1 = ''
  sizeForm.processKey = 'process_dimission'
}
const add = () => {
  process(sizeForm).then((res) => {
    console.log(res)
    ElMessage({
      message: '操作成功',
      type: 'success'
    })
  })
}
process(sizeForm).then((res) => {
  console.log(res)
})
</script> -->
<script>
import { ref, reactive } from 'vue'
import { process } from '@/api/user.ts'
import { ElMessage } from 'element-plus'

export default {
  setup(props, ctx) {
    let dialogVisible = ref(true)
    const size = ref('default')
    const labelPosition = ref('right')
    const sizeForm = reactive({
      processName: '加班',
      start_time: '',
      end_time: '',
      date3: '',
      delivery: false,
      resource: true,
      desc: '',
      reason: '',
      wh1: '',
      processKey: 'process_dimission',
      userId: Date.parse(new Date())
    })
    const resetForm = () => {
      console.log(1)
      sizeForm.processName = '加班'
      sizeForm.start_time = ''
      sizeForm.end_time = ''
      sizeForm.date3 = ''
      sizeForm.delivery = false
      sizeForm.resource = true
      sizeForm.desc = ''
      sizeForm.reason = ''
      sizeForm.wh1 = ''
      sizeForm.processKey = 'process_dimission'
    }
    const add = () => {
      process(sizeForm).then((res) => {
        console.log(res)
        ctx.emit('updata', false)
        ElMessage({
          message: '操作成功',
          type: 'success'
        })
      })
    }
    process(sizeForm).then((res) => {
      console.log(res)
    })
    return { dialogVisible, size, sizeForm, labelPosition, resetForm, add }
  }
}
</script>
<style lang="scss" scoped></style>
