let express = require("express")
let Mock = require("mockjs")
const loginData = require("./common/login.json")
const rolesData = require("./common/roles.json")
const userData = require("./common/user.json")
let app = express() //实例化express
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
app.use("/roles", function (req, res) {
  res.json(
    Mock.mock({
      ...rolesData
    })
  )
})
app.use("/user", function (req, res) {
  res.json(
    Mock.mock({
      ...userData
    })
  )
})
app.listen("8090", () => {
  console.log("监听端口 8090")
})
