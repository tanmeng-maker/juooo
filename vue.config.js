// const path = require("path");
// // 拼接路径
// function resolve(dir) {
//     return path.join(__dirname, dir)
//   }
module.exports = {
    devServer:{
        open:true,
        port:8080,
        host:"localhost",
        proxy:{
            '/api':{
                // 目标代理服务器地址
                target:"https://api.juooo.com",
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            } 
        }
    },
    // 如果需要配置路径别名就在这配置
    // chainWebpack:(config)=>{
    //     config.resolve.alias
    //     .set('@', resolve('src'))
    //     .set('assets', resolve('src/assets'))
    //     .set('components', resolve('src/components'))
    // }
}