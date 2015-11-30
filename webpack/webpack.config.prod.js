
/**
 * Module dependencies.
 */

const webpack = require('webpack');
const assign = require('object-assign');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const prod = {
  devtool: 'source-map',
  entry: [
    `${config.sourceDirPath}/index`
  ],
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
  ]
};

module.exports = assign({}, config, prod);
