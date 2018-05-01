module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
//  base: '/vuepress-test/',
  dest: '../docs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
     sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ 
            '/test',
            ['/test2', 'php test']
        ]
      }
     ]
  },
  head: [
    // <!-- Global site tag (gtag.js) - Google Analytics -->
    ['script', {async: 'async', src: 'https://www.googletagmanager.com/gtag/js?id=UA-118258908-1'}],
    ['script', {type: 'text/javascript'}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-118258908-1');"]

  ]
}
