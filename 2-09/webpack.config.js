const path = require('path')
module.exports = {
    mode: 'development', // 打包方式
    entry: './src/main.js', // 入口文件
    output: {
        "path": path.join(__dirname, '/dist'), // 决定出口文件在哪里
        "filename": "bundle.js", // 设置出口文件的名字。默认情况下，它叫main.js
    },
    rules: [ // 规则
        {
            test: /\.css$/, // 正则测试
            // 1. 先用css-loader去加载.css文件
            // 2. 再用style-loader把样式以style标签的方式嵌入到html中
            use: ['css-loader'], // loader
            use: ['style-loader', 'css-loader']
        }
    ]
}