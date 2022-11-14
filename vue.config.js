const path = require('path');
module.exports = {
  transpileDependencies: ['uview-ui'],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: [path.resolve('node_modules/@qians/gen_header')], // 你的wasm文件路径
  //       use: {
  //         loader: 'babel-loader',
  //       },
  //     },
  //   ],
  // },
};
