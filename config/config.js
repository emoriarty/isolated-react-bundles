module.exports = {
  entries: {
    all: './src/bundles/all.js',
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
  }, {
    title: 'All Components',
    chunks: ['all'],
    filename: 'bundles/all.html',
    template: 'src/templates/all.ejs'
  }]
};
