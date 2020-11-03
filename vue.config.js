const path = require('path')

module.exports ={
  devServer:{
    // 设置代理
    proxy:{
      '/api':{   // '/api' 代表后端真实的数据接口地址
        target:'http://localhost:8081',  
        // 在项目的联调测试阶段我们可以改变target、pathRewrite，而不使用本地mock的json
        pathRewrite:{  //pathRewrite 路径替换,它是 webpack-dev-serve工具提供的，将 '/api' 转发到本地 '/mock' 下
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
