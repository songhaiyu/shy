import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import(/* webpackChunkName: "about" */ "../views/Welcome.vue")
      },
      {
        path: "/roles",
        name: "roles",
        meta: {
          title: ["权限管理", "角色列表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/Role.vue")
      },
      {
        path: "/users",
        name: "users",
        meta: {
          // needLogin: false
          title: ["用户管理", "用户列表"]
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/User.vue")
      }
    ],
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      needLogin: false
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue")
  }
]

const router = new VueRouter({
  // mode:''//路由模式
  routes
})

export default router
