
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extract = ExtractTextPlugin.extract;
const sourceDir = 'app';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    `./${sourceDir}/index`
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('index.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, sourceDir)
      },
      {
        test: /\.css$/,
        loader: extract('style-loader', 'css-loader')
      }
    ]
  }
};
