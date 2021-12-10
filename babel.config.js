/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-08-26 10:16:51
 * @LastEditors: went
 * @LastEditTime: 2021-12-08 11:48:42
 */
module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
    "@babel/plugin-proposal-optional-chaining"
  ],
  presets: ["@vue/cli-plugin-babel/preset"],
};
