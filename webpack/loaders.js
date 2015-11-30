
/**
 * Module dependencies.
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./config');
const extract = ExtractTextPlugin.extract;

/**
 * Loaders
 */

module.exports = [
  {
    test: /\.js$/,
    loaders: ['babel'],
    include: config.sourceDirPath
  },
  {
    test: /\.scss$/,
    loader: extract('style-loader', 'css!autoprefixer?browsers=last 2 version!sass')
  },
  {
    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
  }
];
