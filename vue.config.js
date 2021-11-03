module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:{
      "^/api":{
        target:"http://47.94.56.24:5000",
        changeOrigin:true,
        pathRewrite:{'^/api':'/'}
      }
    }
  }
}
