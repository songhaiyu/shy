const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  productionSourceMap: false,
  outputDir: "dist",
  assetsDir: "assets",
  devServer: {
    port: "8080",
    host: "localhost",
    open: false,
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        changeOrigin: true,
        secure: false,
        target:
          process.env.VUE_APP_MOCK_ENABLE == "true"
            ? "http://localhost:8090"
            : process.env.VUE_APP_CONSOLE_URL,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
