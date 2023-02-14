module.exports = {
  flowchart: {},
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "有新的内容更新",
      buttonText: "刷新",
    },
  },
  "vuepress-plugin-auto-sidebar": {
    // collapsable: true,
    // titleMode: "titlecase",
    sidebarDepth: 2,
  },
  "vuepress-plugin-baidu-autopush": {},
  sitemap: {
    hostname: "https://www.xxx.com",
  },
  copyright: {
    noCopy: true, // 选中的文字将无法被复制
    minLength: 100, // 如果长度超过 100 个字符
  },
  "@vuepress/medium-zoom": {
    selector: "img",
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 16,
    },
  },
  "dynamic-title": {
    showIcon: "/favicon.ico",
    showText: "(/≧▽≦/)欢迎回来！",
    hideIcon: "/favicon.ico",
    hideText: "(●—●)哦吼,不要走,给个收藏吧！",
    recoverTime: 2000,
  },
  "@vuepress/nprogress": {},
  "vuepress-plugin-smooth-scroll": {},
  "@vuepress-reco/vuepress-plugin-rss": {
    site_url: "https://xarzhi.gitee.io", //网站地址
    copyright: "芜湖", //版权署名
  },
  "reading-progress": {
    //阅读进度条
  },
  "vuepress-plugin-code-copy": {
    //一键复制代码
  },
  "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
    theme: ["shizuku", "haru2", "koharu", "wanko", "miku", "z16"],
    // clean: true,
    modelStyle: { left: "250px", bottom: "-20px", opacity: "0.9" },
    btnStyle: { left: "380px", bottom: "40px" },
  },
  "cursor-effects": {
    size: 3, // size of the particle, default: 2
    shape: ["start" | "circle"], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  },
  // ribbon: {
  //   size: 90, // width of the ribbon, default: 90
  //   opacity: 0.8, // opacity of the ribbon, default: 0.3
  //   zIndex: -1, // z-index property of the background, default: -1
  // },
  "go-top": {},
  sakura: {
    num: 20, // 默认数量
    show: true, //  是否显示
    zIndex: -1, // 层级
    img: {
      replace: false, // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: "...", // 绝对路径
    },
  },
};
