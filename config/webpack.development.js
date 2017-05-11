const WebpackBrowserPlugin = require('webpack-browser-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const config = require('./config');
const generatePluginsConfigFromBundles =
  require('./utils').generatePluginsConfigFromBundles;

module.exports = {
  devtool: 'eval-source-map',
  plugins: generatePluginsConfigFromBundles(config.bundles)
}
