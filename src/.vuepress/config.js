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
  }
}
