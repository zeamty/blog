module.exports = {
    title: "Pal",
    description: "Pal's Blog",
    dest: 'docs',
    theme: '@vuepress/theme-blog',
    themeConfig: {
      dateFormat: 'YYYY-MM-DD',
      footer: {
        contact: [
          {
            type: 'github',
            link: 'https://github.com/zeamty',
          },
        ],
      },
      comment: {
        service: "disqus",
        shortname: "pal-blog",
      },
      feed: {
        canonical_base:'https://blog.zeamty.com',
      },
      pwa: true,
    },
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-118258908-1',
        },
      ],
    ],
}
