const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
if (process.env.NODE_ENV === 'production') {
  let aPlugin = new BundleAnalyzerPlugin();
  module.exports = {
    devtool: 'none',
    plugins: [aPlugin],
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
    },
  };
} else {
  module.exports = {};
}
