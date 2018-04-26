module.exports = {
  locales: {
    '/': {
      lang: '/',
      title: 'Egg.js',
    },
    '/en-US/': {
      lang: 'en-US',
      title: 'Egg.js',
      description: 'Egg.js Community'
    },
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Egg.js',
      description: 'Egg.js 社区'
    },
  },

  themeConfig: {
    logo: '/logo.png',
    locales: {
      '/en-US/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          {
            text: 'Egg.js Site',
            link: 'https://eggjs.org'
          }
        ],
      },
      '/zh-CN/': {
        label: '简体中文',
        selectText: '选择语言',
        nav: [
          {
            text: 'Egg.js 官网',
            link: 'https://eggjs.org'
          }
        ],
      },
    }
  }
}