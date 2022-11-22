import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: 'index',
    children: [
      {
        path: '/usersList',
        name: 'usersList',
        component: () => import(/* webpackChunkName: "about" */ '../views/usersList.vue'),
        meta: [
          { path: 'usersList', name: '数据管理' },
          { path: 'usersList', name: '用户列表' }
        ]
      },
      {
        path: '/shops',
        name: 'shops',
        component: () => import(/* webpackChunkName: "about" */ '../views/shops.vue'),
        meta: [
          { path: 'usersList', name: '数据管理' },
          { path: 'usersList', name: '商家列表' }
        ]
      },
      {
        path: '/food',
        name: 'food',
        component: () => import(/* webpackChunkName: "about" */ '../views/food.vue'),
        meta: [
          { path: 'usersList', name: '数据管理' },
          { path: 'usersList', name: '食品列表' }
        ]
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "about" */ '../views/order.vue'),
        meta: [
          { path: 'usersList', name: '数据管理' },
          { path: 'usersList', name: '订单列表' }
        ]
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin.vue'),
        meta: [
          { path: 'usersList', name: '数据管理' },
          { path: 'usersList', name: '管理员列表' }
        ]
      },
      {
        path: '/addshops',
        name: 'addshops',
        component: () => import(/* webpackChunkName: "about" */ '../views/addshops.vue'),
        meta: [
          { path: 'addshops', name: '添加数据' },
          { path: 'addshops', name: '添加商铺' }
        ]
      },
      {
        path: '/addfood',
        name: 'addfood',
        component: () => import(/* webpackChunkName: "about" */ '../views/addfood.vue'),
        meta: [
          { path: 'addfood', name: '添加数据' },
          { path: 'addfood', name: '添加商品' }
        ]
      },
      ,
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "about" */ '../views/edit.vue'),
        meta: [
          { path: 'edit', name: '编辑' },
          { path: 'edit', name: '文本编辑' }
        ]
      },
      {
        path: '/distribute',
        name: 'distribute',
        component: () => import(/* webpackChunkName: "about" */ '../views/distribute.vue'),
        meta: [
          { path: 'distribute', name: '图标' },
          { path: 'distribute', name: '用户分布' }
        ]
      },
      {
        path: '/install',
        name: 'install',
        component: () => import(/* webpackChunkName: "about" */ '../views/install.vue'),
        meta: [
          { path: 'install', name: '设置' },
          { path: 'install', name: '管理员设置' }
        ]
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import(/* webpackChunkName: "about" */ '../views/explain.vue'),
        meta: [
          { path: 'explain', name: '设置' },
          { path: 'explain', name: '管理员设置' }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
