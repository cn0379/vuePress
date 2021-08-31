module.exports = {
  title: '安软地图文档',
  description: '安软地图文档',
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [{
        text: '文档',
        link: '/'
      },
      {
        text: '示例',
        link: '/point/'
      },
      {
        text: 'Github',
        link: 'https://github.com/xxx'
      },
    ],
    sidebar: [{
      title: '覆盖物',
      collapsable: false,
      children: ['/point/', ] // 这个是根据自己的需求来订，对应自己在docs下的文件夹名，默认首页是README.md
    }, ],
    sidebarDepth: 4,
    lastUpdated: 'Last Updated'
  }
};