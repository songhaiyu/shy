let express = require("express")
let Mock = require("mockjs")
const loginData = require("./common/login.json")
const rolesData = require("./common/roles.json")
const userData = require("./common/user.json")
const treeData = require("./common/tree.json")
const rightsData = require("./common/rights.json")
const reportsData = require("./common/reports.json")
const ordersData = require("./common/orders.json")
let app = express() //实例化express
// 登录
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
// 侧边栏
app.use("/roles", function (req, res) {
  res.json(
    Mock.mock({
      ...rolesData
    })
  )
})
// 用户列表
app.use("/user", function (req, res) {
  res.json(
    Mock.mock({
      ...userData
    })
  )
})
// 树状
app.use("/tree", function (req, res) {
  res.json(
    Mock.mock({
      ...treeData
    })
  )
})
// 权限列表
app.use("/rights", function (req, res) {
  res.json(
    Mock.mock({
      ...rightsData
    })
  )
})
// 数据报表
app.use("/reports", function (req, res) {
  res.json(
    Mock.mock({
      ...reportsData
    })
  )
})
// 订单列表
app.use("/orders", function (req, res) {
  res.json(
    Mock.mock({
      ...ordersData
    })
  )
})
app.listen("8090", () => {
  console.log("监听端口 8090")
})
