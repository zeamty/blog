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
                text: '组件',
                items: [
                    { text: 'Linux', link: '' },
                    { text: 'DB & Cache', link: '' },
                    { text: 'Web', link: '' },
                    { text: '中间件', link: '' },
                    { text: 'RPC', link: '' },
                ],
            },
            {
                text: '前端',
                items: [
                    { text: 'HTML', link: '' },
                    { text: 'CSS', link: '' },
                    { text: 'JS', link: '' },
                    { text: 'UI', link: '' },
                    { text: '其他', link: '' },
                ],
            },
            {
                text: '客户端',
                items: [
                    { text: '安卓', link: '' },
                    { text: 'iOS', link: '' },
                    { text: '移动跨平台', link: '' },
                    { text: '小程序', link: '' },
                    { text: 'Windows', link: '' },
                    { text: 'Linux', link: '' },
                ],
            },
            {
                text: '应用',
                items: [
                    { text: '架构', link: '' },
                    { text: '工程管理', link: '' },
                    { text: '大数据&分布式应用&云计算', link: '' },
                    { text: 'AI', link: '' },
                    { text: '运维&测试', link: '' },
                    { text: '开发工具', link: '' },
                    { text: '其他应用', items: [ 
                        { text: '搜索', link: ''},
                        { text: '推荐', link: ''},
                        { text: '游戏', link: ''},
                        { text: 'AR & VR', link: ''},
                        { text: '物联网IoT', link: ''},
                        { text: '区块链', link: ''},
                    ] },
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
        sidebar: 'auto',
    },
//    ga: 'UA-118258908-1',
    head: [
        // <!-- Global site tag (gtag.js) - Google Analytics -->
        ['script', {async: 'async', src: 'https://www.googletagmanager.com/gtag/js?id=UA-118258908-1'}],
        ['script', {type: 'text/javascript'}, "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-118258908-1');"],
    ],
}
