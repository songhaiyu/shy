<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="titile">电商后台管理</div>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#d00"
          router
        >
          <el-submenu :index="item.path" v-for="item in menuList.children" :key="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span style="margin-left: 12px">{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/' + ele.path" v-for="ele in item.children" :key="ele.id">
                <i class="el-icon-menu"></i>
                {{ ele.authName }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部按钮加退出按钮 -->
        <el-header>
          <span @click="isCollapse = !isCollapse"><i class="el-icon-s-fold"></i></span>
          <span style="padding: 8px 12px; background: #909399" @click="$router.push('/login')">退出登录</span>
        </el-header>
        <el-main>
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="$route.path != '/welcome'">
            <el-breadcrumb-item style="font-weight: bold">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in $route.meta.title" :key="item">{{ item }}</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 坑 子路由 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: []
    }
  },
  methods: {},
  created() {
    this.$http.send("/roles", {}, "get").then((res) => {
      // console.log(res)
      this.menuList = res.data.data[0]
      // console.log(this.menuList)
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home .el-container {
  height: 100%;
  width: 100%;
}
.el-aside {
  height: 100%;
  background-color: #333744;
}
.titile {
  text-align: center;
  line-height: 80px;
  width: 100%;
  height: 80px;
  font-size: 20px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.el-header {
  width: 100%;
  height: 80px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 20px;
  background-color: #373d41;
  color: #fff;
  span {
    cursor: pointer;
  }
}
.el-breadcrumb {
  width: 100%;
  font-size: 18px;
  margin-bottom: 14px;
}
.el-main {
  background-color: #eaedf1;
}
</style>
