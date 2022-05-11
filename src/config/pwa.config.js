module.exports = {
  isPwa: true,
  pwaConfig: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
    themeColor: '#46bd87',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      author: 'h7ml <h7ml@qq.com>',
      dateTime: new Date(),
      name: 'dgiot-dashboard',
      short_name: 'dgiot-dashboard',
      description: '提供物联网垂直领域应用使能平台及解决方案',
      display: 'standalone',
      orientation: 'portrait-primary',
      prefer_related_applications: false,
      background_color: '#ffffff',
      lang: 'zh-CN',
      start_url: '/',
      scope: '/',
      theme_color: '#4fc08d',
      icons: [
        {
          src: './dgiot_dashboard/public/assets/images/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './dgiot_dashboard/public/assets/images/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: './dgiot_dashboard/public/assets/images/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './dgiot_dashboard/public/assets/images/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
}
