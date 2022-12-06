const { defineConfig } = require("@vue/cli-service")

// let target = process.env.VUE_APP_MOCK_ENABLE == true ? "localhost: 8090" : process.env.VUE_APP_CONSOLE_URL
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
    proxy: {
      "/api": {
        changeOrigin: true,
        secure: false,
        target: `http://localhost:8090`,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
})
