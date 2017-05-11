const path = require('path')
const config = require('./config');

module.exports = {
  entry: config.entries,
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(scss|sass)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'file-loader',
        query: {
          outputPath: 'assets/images/'
        }
      }
    }, {
      test: /\.(html|ejs)$/,
      use: 'html-loader',
      include: '/src/templates'
    }]
  }
}
