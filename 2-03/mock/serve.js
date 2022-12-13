let express = require("express")
let Mock = require("mockjs")
const loginData = require("./common/login.json")
const rolesData = require("./common/roles.json")
const userData = require("./common/users.json")
const treeData = require("./common/tree.json")
const rightsData = require("./common/rights.json")
const reportsData = require("./common/reports.json")
const ordersData = require("./common/orders.json")
const logisticsData = require("./common/logistics.json")
const mapData = require("./common/map.json")
const goodsData = require("./common/goods.json")
const categoriesData = require("./common/categories.json")
const shopclassData = require("./common/shopclass.json")
const paramsData = require("./common/params.json")
const shopTypeData = require("./common/shopType.json")
const darReports = require("./common/darReports.json")
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
app.use("/users", function (req, res) {
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
app.use("/darReports", function (req, res) {
  res.json(
    Mock.mock({
      ...darReports
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
// 物流信息
app.use("/logistics", function (req, res) {
  res.json(
    Mock.mock({
      ...logisticsData
    })
  )
})
// 省市区县
app.use("/map", function (req, res) {
  res.json(
    Mock.mock({
      ...mapData
    })
  )
})
// 用户列表
app.use("/goods", function (req, res) {
  res.json(
    Mock.mock({
      ...goodsData
    })
  )
})
//商品分类
app.use("/categories", function (req, res) {
  res.json(
    Mock.mock({
      ...categoriesData
    })
  )
})
/**商品列表添加商品选择 */
app.use("/categories", function (req, res) {
  res.json(
    Mock.mock({
      ...shopclassData
    })
  )
})
/**分类参数-商品分类 */
app.use("/params", function (req, res) {
  res.json(
    Mock.mock({
      ...paramsData
    })
  )
})
/**商品分类-添加分类 */
app.use("/categoriesType", function (req, res) {
  res.json(
    Mock.mock({
      ...shopTypeData
    })
  )
})
app.listen("8090", () => {
  console.log("监听端口 8090")
})
