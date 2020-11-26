module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/apiProxy': { // 藉由取代的方式來直接連接到local host, 繞過Access-Control-Allow-Origin的錯誤
        target: 'http://10.214.141.45:5000/',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
}

