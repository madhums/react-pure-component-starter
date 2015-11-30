
/**
 * Module dependencies.
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./config');
const loaders = require('./loaders');

module.exports = {
  devtool: 'source-map',
  entry: [
    `${config.sourceDirPath}/index`
  ],
  output: config.output,
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('index.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: loaders
  }
};
