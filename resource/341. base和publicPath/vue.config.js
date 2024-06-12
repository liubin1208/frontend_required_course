// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.my-site.com',
      },
    },
  },
  publicPath: '/admin/', // 打包结果中资源的前缀
};
