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
        link: '/about/about'
      },
      {
        text: 'Github',
        link: 'https://github.com/xxx'
      },
    ],
    sidebar: [
      {
        title: '第一个侧边栏',
        collapsable: false,
        children: ['/firstside/', '/firstside/child/','/firstside/otherModel', ] // 这个是根据自己的需求来订，对应自己在docs下的文件夹名，默认首页是README.md
      },
      {
        title: '第二个侧边栏',
        collapsable: false, // 开启展开收起功能，注意下图中菜单名称旁边的小角标
        children: ['/firstside/', '/firstside/child/','/firstside/otherModel', ] // 这个是根据自己的需求来订，对应自己在docs下的文件夹名，默认首页是README.md
      }
    ],
    sidebarDepth: 4,
    lastUpdated: 'Last Updated'
  }
};