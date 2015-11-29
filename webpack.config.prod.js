
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extract = ExtractTextPlugin.extract;
const sourceDir = 'app';

module.exports = {
  devtool: 'source-map',
  entry: [
    `./${sourceDir}/index`
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
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
