
/**
 * Module dependencies.
 */

const webpack = require('webpack');
const assign = require('object-assign');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    `${config.sourceDirPath}/index`
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('index.css', {
      allChunks: true
    })
  ]
};

module.exports = assign({}, config, dev);
