module.exports = {
  entries: {
    home: './src/bundles/home.js'
  },
  bundles: [{
    title: 'Component Bundles Index',
    inject: false,
    filename: 'index.html',
    template: 'src/templates/index.ejs'
  }, {
    title: 'Home Components',
    chunks: ['home'],
    filename: 'bundles/home.html',
    template: 'src/templates/home.ejs'
  }]
};
