<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"> </el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"> </el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 4) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
    flitterData(arr) {
      let forceArr = [];
      for (var i = 0; i < this.mergeList.length; i++) {
        forceArr[i] = { concat: 0, rows: [1] };
      }
      arr.forEach((item, index) => {
        if (index != 0) {
          //是看上一项和当前是否一样  如果是0 就没有上一项  这样写不会影响结果
          this.mergeList.forEach((items, idx) => {
            if (items.isMerge === false) {
              //就是这个参数
              for (var m = 0; m < arr.length; m++) {
                forceArr[idx].rows.push(1); //当有些列不进行合并 就可以通过表头传值加个参数
              }
            } else {
              if (item[items.prop] === arr[index - 1][items.prop]) {
                //循环  自动计算需要合并的项以及合并多少
                let curNum = forceArr[idx].concat;
                forceArr[idx].rows[curNum] = forceArr[idx].rows[curNum]
                  ? forceArr[idx].rows[curNum]
                  : 1;
                forceArr[idx].rows[curNum] += 1;
                forceArr[idx].rows.push(0);
              } else {
                forceArr[idx].rows.push(1);
                forceArr[idx].concat = index; //记录下是列的哪个  下次合并就从这里开始  （上一行）
              }
            }
          });
        }
      });
      return {
        forceArr: forceArr,
      };
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
</style>
