
/**
 * Module dependencies.
 */

const path = require('path');

const sourceDir = '../app';

/**
 * All dir names paths
 */

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  sourceDir,
  sourceDirPath: path.join(__dirname, sourceDir),
};
