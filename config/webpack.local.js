const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '../demo'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Component Bundles Index',
      inject: false,
      filename: 'index.html',
      alwaysWriteToDisk: true,
      template: 'src/templates/index.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'Home Components',
      chunks: ['home'],
      filename: 'bundles/home.html',
      alwaysWriteToDisk: true,
      template: 'src/templates/home.ejs'
    }),
    new WebpackBrowserPlugin(),
    new HtmlWebpackHarddiskPlugin()
  ]
}
