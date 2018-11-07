const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
};