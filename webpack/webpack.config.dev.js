
/**
 * Module dependencies.
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./config');
const loaders = require('./loaders');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    `${config.sourceDirPath}/index`
  ],
  output: config.output,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('index.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: loaders
  }
};
