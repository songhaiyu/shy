<template>
  <div>
    <el-dialog title="物流进度" :visible.sync="timeVisible" width="50%">
      <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.time">
          {{ activity.context }}
        </el-timeline-item>
      </el-timeline>

      <span slot="footer" class="dialog-footer">
        <el-button @click="timeVisible = false">取 消</el-button>
        <el-button type="primary" @click="timeVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [],
      timeVisible: false,
      reverse: false
    }
  },
  methods: {
    init() {
      this.timeVisible = true
    }
  },
  created() {
    this.$http.send("/logistics").then((res) => {
      this.activities = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
