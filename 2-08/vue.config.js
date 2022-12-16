const { defineConfig } = require("@vue/cli-service")
console.log(process.env.VUE_APP_MOCK_ENABLE)
let target =
  process.env.VUE_APP_MOCK_ENABLE == "true"
    ? "http://localhost:8090"
    : process.env.VUE_APP_CONSOLE_URL
// console.log(targets)
module.exports = defineConfig({
  publicPath: "./",
  productionSourceMap: false,
  outputDir: "dist",
  assetsDir: "assets",
  devServer: {
    port: "8080",
    host: "localhost",
    open: false,
    https: false,
    // proxy: {
    // 	"/api": {
    // 		changeOrigin: true,
    // 		secure: false,
    // 		target: `http://localhost:8090`,
    // 		pathRewrite: {
    // 			"^/api": ""
    // 		}
    // 	}
    // }
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        // 默认开启代理模式
        changeOrigin: true,
        // 如果是http接口,需要配置该参数
        secure: false,
        // 代理的地址
        target,
        // 路径的重命名
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
