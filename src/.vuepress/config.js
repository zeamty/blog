module.exports = {
    title: "Pal",
    description: "Pal's Blog",
    dest: '../docs',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '目录',
                items: [
                    { text: '2018', link: '/2018/05-01' },
                ],
            },
            { text: '关于', link: '/about' },
        ],
        sidebar: {
            '/2018/': [
                '05-01',
            ],
        },
    },
//    ga: 'UA-118258908-1',
    head: [
        // <!-- Global site tag (gtag.js) - Google Analytics -->
        ['script', {async: 'async', src: 'https://www.googletagmanager.com/gtag/js?id=UA-118258908-1'}],
        ['script', {type: 'text/javascript'}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-118258908-1');"],
    ],
}
