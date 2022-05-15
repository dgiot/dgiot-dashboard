// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')
const targetUrl = 'https://prod.iotn2n.com'
const startsWith = [
  '/iotapi',
  '/dgiot_dashboard',
  '/dgiot_swagger',
  '/dgiot_file',
  '/dgiot-amis-dashboard',
]
module.exports = (req, res) => {
  let target = ''
  // 判断 res.url 开头是否包含startsWith
  // startsWith.forEach((item) => {
  //   if (req.url.startsWith(item)) {
  //     target = targetUrl
  //   }
  // })
  if (
    req.url.startsWith('/iotapi') ||
    req.url.startsWith('/dgiot_dashboard') ||
    req.url.startsWith('/dgiot_swagger') ||
    req.url.startsWith('/dgiot_file') ||
    req.url.startsWith('/dgiot-amis-dashboard')
  ) {
    target = targetUrl
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/iotapi/': '/',
      '^/dgiot_dashboard/': '/',
      '^/dgiot_swagger/': '/',
      '^/dgiot_file/': '/',
      '^/dgiot-amis-dashboard/': '/',
    },
  })(req, res)
}
