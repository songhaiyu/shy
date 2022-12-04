<template>
  <div class="home">
    <div class="top" style="margin-bottom: 20px">
      <el-button type="primary" @click="addVisible = true">添加ToDo</el-button>
    </div>
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          <!-- {{ data.isSelected ? "✔️" : "" }} -->
        </p>


        <ul>
          <li v-for="(item, index) in $store.state.calendarData" :key="index">
            <div
              v-if="item.time == data.day && item.status == '已完成'"
              class="blue"
              @click="okUpdata(index)"
            >
              {{ item.things }}
            </div>
            <div
              v-if="item.time == data.day && item.status == '未完成'"
              class="red"
              @click="okUpdata(index)"
            >
              {{ item.things }}
            </div>
          </li>
        </ul>



      </template>
    </el-calendar>

    <el-dialog title="添加ToDo" :visible.sync="addVisible">
      <el-form
        :model="ruleForm"
        label-width="120px"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item label="事件名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="代办事项时间" prop="time">
          <el-date-picker
            v-model="ruleForm.time"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="ruleForm.status">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addToDos('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <!-- 修改的已完成的弹框 -->
    <el-dialog title="修改事件" :visible.sync="addVisible1">
      <el-form :model="ruleForm" label-width="120px">
        <el-form-item label="事件名称">
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        <el-form-item label="代办事项时间">
          <el-date-picker
            v-model="ruleForm1.time"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="ruleForm1.status">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="todoUpdata">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addVisible: false,
      addVisible1: false,
      ruleForm: {
        name: "",
        time: "",
        status: "",
      },
      ruleForm1: {
        name: "",
        time: "",
        status: "",
      },
      rules: {
        name: [{ required: true, message: "请输入事件名称", trigger: "blur" }],
        time: [{ required: true, message: "请输入事件时间", trigger: "blur" }],
        status: [
          { required: true, message: "请输入事件状态", trigger: "blur" },
        ],
      },
      calendarData: [],
      index: -1,
    };
  },
  methods: {
    addToDos(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let date = new Date(this.ruleForm.time);
          let y = date.getFullYear();
          let m = date.getMonth() + 1;
          m = m < 10 ? "0" + m : m;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          let time = y + "-" + m + "-" + d;
          let obj = {
            things: this.ruleForm.name,
            status: this.ruleForm.status,
            time: time,
          };
          this.$store.commit("addToDos", obj);
          this.addVisible = false;
          this.ruleForm = {};
        } else {
          console.log("添加失败");
          return false;
        }
      });
    },
    okUpdata(i) {
      this.index = i;
      this.addVisible1 = true;
      this.ruleForm1.name = this.$store.state.calendarData[i].things;
      this.ruleForm1.status = this.$store.state.calendarData[i].status;
      this.ruleForm1.time = this.$store.state.calendarData[i].time;
    },
    todoUpdata() {
      this.$store.commit("todoUpdata", {
        ...this.ruleForm1,
        index: this.index,
      });
      this.addVisible1 = false;
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
}
.is-selected {
  color: #1989fa;
}
li {
  list-style: none;
}
.blue {
  padding: 5px 10px;
  text-align: center;
  background-color: #1989fa;
  color: #fff;
  margin: 5px 0;
}
.red {
  padding: 5px 10px;
  text-align: center;
  background-color: #d00;
  color: #fff;
}
</style>
