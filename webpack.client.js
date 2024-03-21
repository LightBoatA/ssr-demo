const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};