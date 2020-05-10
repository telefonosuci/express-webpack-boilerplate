const path = require('path');
const scss = require('./webpack/scss');
// webpack.config.js
module.exports = {
    mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      },
      scss.rule
    ]
  }
};