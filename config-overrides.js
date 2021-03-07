const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   // less-loader 的 modifyVars 来进行antd主题配置
  //   modifyVars: { '@primary-color': '#1DA57A' },
  // }),
  // 你可以使用 antd-dayjs-webpack-plugin 插件用 Day.js 替换 momentjs 来大幅减小打包大小
  // addWebpackPlugin(new AntdDayjsWebpackPlugin()),
)
