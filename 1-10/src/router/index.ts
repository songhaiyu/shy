import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        path: '/userIndex',
        name: 'userIndex',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/user/userIndex.vue')
      },
      {
        path: '/permissionsIndex',
        name: 'permissionsIndex',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/permissions/permissionsIndex.vue'
          )
      },
      {
        path: '/departMent',
        name: 'departMent',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/department/departMent.vue'
          )
      },
      {
        path: '/monthStatement',
        name: 'monthStatement',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/department/monthStatement.vue'
          )
      },
      {
        path: '/securitysIn',
        name: 'securitysIn',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/department/securitysIn.vue'
          )
      },
      {
        path: '/inStance',
        name: 'inStance',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/process/inStance.vue'
          )
      },
      {
        path: '/attenDances',
        name: 'attenDances',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/attendances/attenDances.vue'
          )
      },
      {
        path: '/salarysIn',
        name: 'salarysIn',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/salarys/salarysIn.vue'
          )
      },
      {
        path: '/tissueIn',
        name: 'tissueIn',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/tissue/tissueIn.vue')
      },
      {
        path: '/staffIn',
        name: 'staffIn',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/personnel/staffIn.vue'
          )
      },
      {
        path: '/staffImport',
        name: 'staffImport',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/personnel/staffImport.vue'
          )
      },
      {
        path: '/staffTop',
        name: 'staffTop',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/personnel/staffTop.vue'
          )
      },
      {
        // companyIn
        path: '/companyIn',
        name: 'companyIn',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/company/companyIn.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
