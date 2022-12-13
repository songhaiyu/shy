import Vue from "vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./untils/httpRequest"
import VCharts from "v-charts"
Vue.use(VCharts)
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
Vue.prototype.$http = http
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({ router, store, render: (h) => h(App) }).$mount("#app")
