const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app/main.js',
  output: { 
    path: __dirname, 
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader?stage=0',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};