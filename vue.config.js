const path = require('path')

module.exports ={
  // 设置代理
  devServer:{
    proxy:{
      // 将请求转发到本地地址
      '/api':{
        target:'http://localhost:8081',
        //路径替换,它是 webpack-dev-serve工具提供的，不是vue
        pathRewrite:{
          '^/api':'/mock'
        }
      }
    }
  },
  // 设置别名
  chainWebpack: (config)=>{
      config.resolve.alias
          .set('styles',path.join(__dirname,'./src/assets/styles/'))
  }
}


/* module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  } */
