module.exports = {
  entry: {
    home: './src/bundles/home.js'
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
      test: /\.html$/,
      use: 'html-loader',
      include: '/src/templates'
    }]
  }
}
