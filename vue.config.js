module.exports = {
  // 选项...代理API服务
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",//代理主机
        ws: true,//改变源
        changeOrigin: true,//代理网页接口
        pathRewrite: {
          "^/api": "",//移除请求地址里API字符
        },
      },
    },
    port: "3001",//配置端口
    open: true,//配置默认打开
  },
};
