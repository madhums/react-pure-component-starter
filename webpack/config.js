
/**
 * Module dependencies.
 */

const path = require('path');

const sourceDir = '../app';
const buildDir = '../build';

/**
 * All dir names paths
 */

module.exports = {
  output: {
    path: path.join(__dirname, buildDir),
    filename: 'index.js',
    publicPath: '/static/'
  },
  sourceDir,
  buildDir,
  sourceDirPath: path.join(__dirname, sourceDir),
};
