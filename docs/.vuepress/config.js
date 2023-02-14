const themeConfig = require('./config/theme/index.js')
const navConf = require('./config/nav')
const sidebarConf = require('./config/sidebar')
const pluginsConf = require('./config/plugins/index')
module.exports = {
    //注意，此处需要填写你部署在nginx下的文件夹名称，如果是根目录，那么可以注释掉此行，注释掉后本地打开index.html无法访问
    //base: "/dist/",
    title: "Fade away",
    description: '花有重开日，人无在少年',
    dest: './dist',
    port: '6210',
    head: [
        ['script',{type:"text/javascript",src:'https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js'}],
        ['script',{type:"text/javascript",src:'/js/mouseClick.js'}],
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
		['meta', { name: 'keywords', content: '随便写写' }],
		['meta', { name: 'description', content: '随便看看' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "xiazhi"}],
		["link", { rel: "stylesheet", href: "/css/style.css" }],//显示nav小logo
		["script", { charset: "utf-8", src: "/js/custom.js" }],//加载右侧菜单栏图片
        // 百度统计
        /*
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?e312f85a409131e18146064e62b19798";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        `],
        */
    ],
    theme: 'reco',
    themeConfig: {
        // type: 'blog',
        smoothScroll: true,
        // authorAvatar: '/avatar.png',
        // 最后更新时间
        lastUpdated: '2022-09-24', // string | boolean
    
        author: '夏至',
        // 项目开始时间
        startYear: '2022',
        nav: navConf,
        sidebar: sidebarConf,
		sidebarDepth: 2,
        // 自动形成侧边导航
		sidebar: 'auto',
        // logo: '/head.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        noFoundPageByTencent: false
        // ICP备案
        // record: '沪ICP备xxxxx号-6',
        // recordLink: 'https://beian.miit.gov.cn/',
		// // 公网安备备案
        // cyberSecurityRecord: '沪公网安备 xxxxxxx号',
        // cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=xxx05177',
		// //友链
    },
    markdown: {
        lineNumbers: true
    },
    plugins: pluginsConf
}