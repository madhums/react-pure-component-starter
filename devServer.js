
/**
 * Module dependencies.
 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

const port = process.env.PORT || 3000;

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHot(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('Listening at http://localhost:3000');
});
