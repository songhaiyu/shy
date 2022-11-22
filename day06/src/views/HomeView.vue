<template>
  <div class="home">
    <el-container>
      <el-aside width="300px" height="100%">
        <!-- //侧边栏 -->
        <div
          style="
            width: 300px;
            height: 50px;
            background-color: #324057;
            color: #fff;
          "
          class="index"
          @click="$router.push('/index')"
        >
          <i class="el-icon-reading"></i><span>首页</span>
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#20a0ff"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="usersList">用户列表</el-menu-item>
              <el-menu-item index="shops">商家列表</el-menu-item>
              <el-menu-item index="food">食品列表</el-menu-item>
              <el-menu-item index="order">订单列表</el-menu-item>
              <el-menu-item index="admin">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="addshops">添加商铺</el-menu-item>
              <el-menu-item index="addfood">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>图标</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="distribute">用户分布</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="edit">文本编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="install">管理员设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning-outline"></i>
              <span>说明</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="explain">说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-main{
  margin: 0;
  padding: 0;
}
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
}
.el-menu {
  height: calc(100% - 50px);
}
.index {
  padding-left: 30px;
  line-height: 50px;
  span {
    margin-left: 10px;
  }
}
</style>
