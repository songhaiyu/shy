<template>
  <div>
    <el-card class="box-card">
      <el-alert show-icon title="注意：只允许为第三级分类设置相关参数！" type="warning" effect="dark"> </el-alert>
      <div class="box">
        <span>选择商品分类 : </span>
        <el-cascader v-model="value" :options="optionsList" :props="props" @change="handleChange"></el-cascader>
      </div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="first">
          <el-button type="primary" @click="addOrUpdata" :disabled="value != '' ? false : true">添加参数</el-button>
          <el-table :data="tableData" style="width: 100%; margin-top: 20px" border>
            <el-table-column type="expand">
              <template slot-scope="props">
                <div v-if="props"></div>
              </template>
            </el-table-column>
            <el-table-column label="#" type="index"> </el-table-column>
            <el-table-column label="参数名称" prop="name"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="addOrUpdata(scope.row, scope.$index)"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" @click="delParams(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="second">
          <el-button type="primary" @click="addOrUpdataPublic">添加属性</el-button>
          <el-table :data="tableDataPublic" style="width: 100%; margin-top: 20px" border>
            <el-table-column type="expand">
              <template slot-scope="props">
                <div v-if="props"></div>
              </template>
            </el-table-column>
            <el-table-column label="#" type="index"> </el-table-column>
            <el-table-column label="参数名称" prop="name"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="addOrUpdataPublic(scope.row, scope.$index)"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" @click="delParams(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <addOrUpadataParams v-if="stateUpdata" ref="addOrUpadataParams" @statusAddOrUpdata="statusAddOrUpdata" />
    <addOrUpadataPublic v-if="statePublic" ref="addOrUpadataPublic" @publicAddOrUpdata="publicAddOrUpdata" />
  </div>
</template>

<script>
import addOrUpadataParams from "./addOrUpadataParams.vue"
import addOrUpadataPublic from "./addOrUpdataPublic.vue"
import { GetShopParams, addShopParams, delShopParams, editShopParams } from "@/api/goods.js"
import { STATUS } from "@/constStatus"
export default {
  data() {
    return {
      stateUpdata: false,
      statePublic: false,
      activeName: "first",
      tableData: [],
      tableDataPublic: [],
      value: [],
      optionsList: [],
      props: {
        children: "children",
        label: "cat_name",
        value: "cat_id"
      }
    }
  },
  methods: {
    /**商品分类 */
    getOption() {
      GetShopParams().then((res) => {
        const { status, msg } = res.meta
        if (status == STATUS.SUCCESS) {
          this.optionsList = res.data
        } else {
          this.$message.error(msg)
        }
      })
    },
    /**显示动态弹框 */
    addOrUpdata(obj, i) {
      this.stateUpdata = true
      if (obj.name == "") {
        this.$nextTick(() => {
          this.$refs.addOrUpadataParams.init()
        })
      } else {
        this.$nextTick(() => {
          obj.id = i
          this.$refs.addOrUpadataParams.init(obj)
        })
      }
    },
    /**添加动态或修改 */
    statusAddOrUpdata(obj) {
      if (obj.id == "") {
        addShopParams(obj).then((res) => res)
        this.tableData.push(obj)
      } else {
        editShopParams(obj).then((res) => res)
      }
      this.stateUpdata = false
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleChange(value) {
      console.log(value)
    },

    delParams(obj) {
      delShopParams(obj).then((res) => res)
    },
    /**显示静态弹框 */
    addOrUpdataPublic(obj, i) {
      this.statePublic = true
      if (obj.name == "") {
        this.$nextTick(() => {
          this.$refs.addOrUpadataPublic.init()
        })
      } else {
        this.$nextTick(() => {
          obj.id = i
          this.$refs.addOrUpadataPublic.init(obj)
        })
      }
    },
    /**添加动态或修改 */
    publicAddOrUpdata(obj) {
      console.log(obj)
      if (obj.id == "") {
        addShopParams(obj).then((res) => res)
        this.tableDataPublic.push(obj)
      } else {
        editShopParams(obj).then((res) => res)
      }
      this.statePublic = false
    }
  },
  created() {
    this.getOption()
  },
  mounted() {},
  components: { addOrUpadataParams, addOrUpadataPublic },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  margin: 20px 0;
  span {
    margin-right: 20px;
  }
}
</style>
