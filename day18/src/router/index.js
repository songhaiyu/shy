import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      needLogin: true
    },
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
