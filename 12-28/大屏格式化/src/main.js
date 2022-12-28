import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false
import dataV from "@jiaminghi/data-view"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import jquery from "jquery"
Vue.prototype.$ = jquery

Vue.use(dataV)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
