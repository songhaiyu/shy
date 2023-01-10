/**组织架构 */
<template>
  <div class="tissue">
    <TitleNav />
    <div class="con">
      <el-card class="box-card" style="padding: 50px 0 0 50px">
        <div class="top">
          <div
            style="
              border-bottom: 4px solid #409eff;
              width: 100px;
              font-size: 24px;
              padding-bottom: 10px;
              color: #409eff;
            "
          >
            组织架构
          </div>
          <div
            style="
              display: inline-block;
              width: 100%;
              height: 2px;
              background-color: #ccc;
              margin-top: -2px;
            "
          ></div>
        </div>
        <div class="list">
          <div class="list-top">
            <div>
              <el-icon><Histogram /></el-icon>
              <span class="title">江苏传智播客教育科技股份有限公司</span>
            </div>
            <div class="div">
              <span>负责人</span>
              <el-dropdown>
                <span>
                  操作
                  <el-icon>
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="dialogVisible = true"
                      >添加子部门</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <ul v-for="item in tableData.tableData" :key="item.id">
            <li class="list-bottom" v-if="item.pid == ''">
              <div>
                <el-icon><Avatar /></el-icon>
                <span class="span1">{{ item.name }}</span>
              </div>
              <div class="div">
                <span class="span">{{ item.manager }}</span>
                <el-dropdown>
                  <span>
                    操作
                    <el-icon>
                      <arrow-down />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="dialogVisible = true"
                        >添加子部门</el-dropdown-item
                      >
                      <el-dropdown-item @click="dialogVisible1 = true"
                        >查看部门</el-dropdown-item
                      >
                      <el-dropdown-item>删除部门</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </li>
          </ul>
        </div>
      </el-card>
    </div>

    <!-- 添加弹框 -->
    <el-dialog v-model="dialogVisible" title="添加部门" width="35%">
      <el-form :model="form">
        <el-form-item label="部门名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select
            v-model="from.manager"
            class="m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in tableData.tableData"
              :key="item.id"
              :label="item.manager"
              :value="item.manager"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.introduce" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 查看 -->
    <el-dialog v-model="dialogVisible1" title="编辑部门" width="35%">
      <el-form :model="form">
        <el-form-item label="部门名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select
            v-model="form.manager"
            class="m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in tableData.tableData"
              :key="item.id"
              :label="item.manager"
              :value="item.manager"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.introduce" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <p>copyright@ 2018 iHRM 系统 版权所有</p>
  </div>
</template>

<script lang="ts" setup>
import TitleNav from '../../components/TitleNav.vue'
import { reactive, ref } from 'vue'
import { tissue } from '@/api/tissue.ts'
import { Histogram, ArrowDown, Avatar } from '@element-plus/icons-vue'
const dialogVisible = ref(false) // 弹框
const dialogVisible1 = ref(false) // 弹框
/*表单数据*/
const form = reactive({
  name: '',
  code: '',
  manager: '',
  introduce: ''
})
let tableData: Array<object> = reactive({
  tableData: []
})
tissue().then((res) => {
  console.log(res)
  tableData.tableData = [...res.data.data.depts]
})
</script>

<style lang="scss" scoped>
.tissue {
  height: 100%;
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
.top {
  display: flex;
  flex-direction: column;
}
.list {
  margin: 50px 120px;
  .div {
    width: 160px;
    display: flex;
    justify-content: space-between;
  }
  .list-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
    .title {
      font-weight: 900;
    }
  }
  ul {
    margin-top: 15px;
    .list-bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .span1 {
        margin-left: 6px;
      }
    }
  }
}
</style>
