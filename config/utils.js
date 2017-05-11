const HtmlWebpackPlugin = require('html-webpack-plugin');

function generatePluginsConfigFromBundles (bundles, plugins) {
  return bundles
    .map(function (bundle) {
      return new HtmlWebpackPlugin(bundle);
    })
    .concat(plugins);
}

module.exports = {
  generatePluginsConfigFromBundles: generatePluginsConfigFromBundles
}
