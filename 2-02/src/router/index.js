import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/common/HomeView.vue"
// import { getToken } from "../untils/auth"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import(/* webpackChunkName: "about" */ "../views/common/Welcome.vue")
      },
      {
        path: "/roles",
        name: "roles",
        meta: {
          title: ["权限管理", "角色列表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/role/Role.vue")
      },
      {
        path: "/users",
        name: "users",
        meta: {
          // needLogin: false
          title: ["用户管理", "用户列表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/user/User.vue")
      },
      {
        path: "/rights",
        name: "rights",
        meta: {
          title: ["权限管理", "权限列表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/role/Rights.vue")
      },
      {
        // reports
        path: "/reports",
        name: "reports",
        meta: {
          title: ["数据统计", "数据报表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/Reports.vue")
      },
      {
        // reports
        path: "/orders",
        name: "orders",
        meta: {
          title: ["订单管理", "订单列表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/order/Orders.vue")
      },
      {
        path: "/goods",
        name: "goods",
        meta: {
          title: ["商品管理", "商品列表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/goods/Goods.vue")
      },
      {
        path: "/categories",
        name: "categories",
        meta: {
          title: ["商品管理", "商品分类"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/goods/Categories.vue")
      },
      {
        path: "/params",
        name: "params",
        meta: {
          title: ["商品管理", "分类参数"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/goods/Params.vue")
      },
      {
        path: "/shopadd",
        name: "/Shopadd",
        component: () => import("../views/goods/Addshop.vue"),
        meta: {
          title: ["商品管理", "添加商品"]
        }
      }
    ],
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/common/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      needLogin: false
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/common/Login.vue")
  }
]

const router = new VueRouter({
  // mode:''//路由模式
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path == "/login") {
//     next()
//   } else {
//     if (getToken()) {
//       next()
//     } else if (to.name !== "login") {
//       next("/")
//     }
//   }
// })

export default router
