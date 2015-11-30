
/**
 * Module dependencies.
 */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extract = ExtractTextPlugin.extract;

const sourceDir = '../app';
const buildDir = '../build';
const sourceDirPath = path.join(__dirname, sourceDir);

/**
 * Common config between envs
 */

module.exports = {
  sourceDirPath,
  output: {
    path: path.join(__dirname, buildDir),
    filename: 'index.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: sourceDirPath,
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
    ]
  }
};
