// 配置服务端的webpack，是因为我们要在服务端使用jsx语法，需要借助babel的翻译
// 既然服务端使用了babel，那么服务端也可以使用新的ES6+语法
// 此文件进行编译的时候，将jsx和ES6+语法转换为ES5语法，生成一个build/server.js文件，所以我们还需要用build/server.js开启另外一个服务，这个服务就是我们最终访问的服务
const path = require('path');
// webpack-node-externals 模块是为了不打包 node 的模块，比如 path， fs 等。因为我们的 Node 已经内置了这些模块，所以没有必要打包
const WebpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  // 服务端的入口文件，是 src/server/index.js
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    // 打包后生成的文件的路径与文件名
    filename: 'server.js',
    path: path.resolve(__dirname, 'build/')
  },
  externals: [WebpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        // 可以在这里通过 option 配置 Babel，也可以使用 .babelrc 文件配置 Babel
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};