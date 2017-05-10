const merge = require('webpack-merge');
const baseConfig = require('./config/webpack.base');

const environment = process.env.NODE_ENV || 'local';

module.exports = merge(
  baseConfig,
  require('./config/webpack.' + environment)
)
