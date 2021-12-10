/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-30 09:53:59
 * @LastEditors: went
 * @LastEditTime: 2021-12-09 14:47:23
 */
const path = require("path");

module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: "./build",
  publicPath: "./",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
      },
    },
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
};
