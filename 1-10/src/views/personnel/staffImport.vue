<template>
  <div class="StaffImport">
    <!-- 头部 -->
    <h3>员工导入</h3>
    <div>
      <el-button type="warning" plain size="small">
        <el-icon><WarningFilled /></el-icon>
        每次导入仅可添加1000名员工，姓名、手机、入职时间、聘用形式为必填项</el-button
      >
    </div>
    <!-- 文件导入 -->
    <div class="box">
      <ul>
        <li>
          <div class="list">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :limit="3"
            >
              <el-button type="primary">点击上传</el-button>
            </el-upload>
            <div>
              (推荐<span class="text">下载模板文件</span>，填写后上传)
              <span class="text">点击查看文件上传要求</span>
            </div>
          </div>
        </li>
        <li>
          <div class="list">
            <el-upload
              class="avatar-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
            <div class="title">将文件拖到此处</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WarningFilled, Plus } from '@element-plus/icons-vue'
import { ref } from 'vue'
import type { UploadUserFile } from 'element-plus'
/*头像上传*/
const fileList = ref<UploadUserFile[]>([])

const imageUrl = ref('')
</script>

<style lang="scss" scoped>
.StaffImport {
  margin: 15px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  h3 {
    text-align: center;
  }
}
.el-button {
  width: 100%;
  justify-content: flex-start;
  .el-icon {
    margin-right: 6px;
  }
}
.box {
  margin: 100px auto;
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    li {
      width: 200px;
      height: 150px;
      font-size: 13px;
      border: 1px Dashed #ccc;
      padding: 20px;
      .list {
        margin-top: 40px;
        .text {
          color: #f00;
          font-weight: 900;
        }
      }
    }
  }
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
.title {
  margin-top: 10px;
}
</style>
