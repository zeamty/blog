module.exports = {
    title: "Pal",
    description: "Pal's Blog",
    dest: '../docs',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '基础',
                items: [
                    { text: '数据结构与算法', link: '' },
                    { text: '计算机网络', link: '' },
                    { text: '操作系统', link: '' },
                    { text: '计算机组成原理', link: '' },
                    { text: '数据库原理', link: '' },
                    { text: '软件工程', link: '' },
                    { text: '安全', link: '' },
                ],
            },
            {
                text: '编程语言',
                items: [
                    { text: 'Python', link: '/pl/python' },
                    { text: 'Go', link: '' },
                    { text: 'Java', link: '' },
                    { text: 'JavaScript', link: '' },
                    { text: '其他', link: '' },
                ],
            },
            {
                text: '应用',
                items: [
                    { text: '', link: '' },
                    { text: '', link: '' },
                    { text: '', link: '' },
                    { text: '', link: '' },
                    { text: '', link: '' },
                ],
            },
            {
                text: '其他',
                items: [
                    { text: '2018', link: '/others/2018-05-01' },
                ],
            },
            { text: '关于', link: '/about' },
        ],
        sidebar: {
            '/others/': [
                '2018-05-01',
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
