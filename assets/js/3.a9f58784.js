(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{343:function(t,e,a){},344:function(t,e,a){},345:function(t,e,a){},346:function(t,e,a){"use strict";function s(){const t=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"];return t[Math.floor(Math.random()*t.length)]}a.d(e,"a",(function(){return s}))},348:function(t,e,a){},350:function(t,e,a){"use strict";a(12);var s=a(24),o={props:{pageInfo:{type:Object,default:()=>({})},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:()=>({numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}),filters:{formatDateValue(t){if(!t)return"";t=t.replace("T"," ").slice(0,t.lastIndexOf("."));const e=Number(t.substr(11,2)),a=Number(t.substr(14,2)),o=Number(t.substr(17,2));return e>0||a>0||o>0?Object(s.d)(t):Object(s.d)(t,"yyyy-MM-dd")}},methods:{goTags(t){this.$router.push({path:`/tags/${t}/`})}}},r=(a(352),a(2)),n=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title?e("i",{staticClass:"iconfont reco-account"},[e("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.author||t.$site.title))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?e("i",{staticClass:"iconfont reco-date"},[e("span",[t._v(t._s(t._f("formatDateValue")(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?e("i",{staticClass:"iconfont reco-eye"},[e("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?e("i",{staticClass:"iconfont reco-tag tags"},t._l(t.pageInfo.frontmatter.tags,(function(a,s){return e("span",{key:s,staticClass:"tag-item",class:{active:t.currentTag==a},on:{click:function(e){return t.goTags(a)}}},[t._v("\n      "+t._s(a)+"\n    ")])})),0):t._e()])}),[],!1,null,"484a899e",null);e.a=n.exports},352:function(t,e,a){"use strict";a(343)},353:function(t,e,a){"use strict";a(344)},354:function(t,e,a){"use strict";a(345)},355:function(t,e,a){"use strict";e.a={methods:{_getStoragePage(){const t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",{page:1,path:""}),1):parseInt(e.page)},_setStoragePage(t){const e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}}},356:function(t,e,a){"use strict";var s={components:{PageInfo:a(350).a},props:["item","currentPage","currentTag"]},o=(a(353),a(2)),r={components:{NoteAbstractItem:Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"abstract-item"},[t.item.frontmatter.sticky?e("i",{staticClass:"iconfont reco-sticky"}):t._e(),t._v(" "),e("div",{staticClass:"title"},[t.item.frontmatter.keys?e("i",{staticClass:"iconfont reco-lock"}):t._e(),t._v(" "),e("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),e("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),e("hr",{staticClass:"hr"}),t._v(" "),e("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"28f76ce9",null).exports},props:["data","currentPage","currentTag"],computed:{currentPageData(){const t=10*this.currentPage-10,e=10*this.currentPage;return this.data.slice(t,e)}}},n=(a(354),Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"abstract-wrapper"},t._l(t.currentPageData,(function(a){return e("NoteAbstractItem",{key:a.path,attrs:{item:a,currentPage:t.currentPage,currentTag:t.currentTag}})})),1)}),[],!1,null,"b014bc36",null));e.a=n.exports},358:function(t,e,a){"use strict";a(348)},359:function(t,e,a){},360:function(t,e,a){},362:function(t,e,a){"use strict";var s=a(346),o={props:{currentTag:{type:String,default:""}},computed:{tags(){return[{name:"全部",path:"/tag/"},...this.$tags.list]}},methods:{tagClick(t){this.$emit("getCurrentTag",t)},getOneColor:s.a}},r=(a(358),a(2)),n=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tags"},t._l(t.tags,(function(a,s){return e("span",{key:s,class:{active:a.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(e){return t.tagClick(a)}}},[t._v(t._s(a.name))])})),0)}),[],!1,null,"36b9f66a",null);e.a=n.exports},365:function(t,e,a){"use strict";a(359)},366:function(t,e,a){"use strict";a(360)},386:function(t,e,a){},387:function(t,e,a){},388:function(t,e,a){},389:function(t,e,a){},390:function(t,e,a){},421:function(t,e,a){"use strict";a(386)},422:function(t,e,a){t.exports=a.p+"assets/img/home-bg.7b267d7c.jpg"},423:function(t,e,a){"use strict";a(387)},424:function(t,e,a){"use strict";a(388)},425:function(t,e,a){"use strict";a(389)},426:function(t,e,a){"use strict";a(390)},432:function(t,e,a){"use strict";a.r(e);var s=a(367),o=a(349),r=a(347),n={mixins:[r.a],components:{NavLink:s.a,ModuleTransition:o.a},computed:{actionLink(){return{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},heroImageStyle(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}}},i=(a(421),a(2)),c=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[e("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?e("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&!1!==t.$frontmatter.isShowTitleInHome?e("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"午后南杂"))]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"description"},[t._v(t._s(t.$description||"Welcome to your vuePress-theme-reco site"))])]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&!0===t.$themeConfig.huawei?e("p",{staticClass:"huawei"},[e("i",{staticClass:"iconfont reco-huawei",staticStyle:{color:"#fc2d38"}}),t._v("\n           华为，为中华而为之！\n      ")]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule&&t.$frontmatter.actionText&&t.$frontmatter.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule&&t.$frontmatter.features&&t.$frontmatter.features.length?e("div",{staticClass:"features"},t._l(t.$frontmatter.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.4"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=(a(12),a(362)),u=a(363),h=a.n(u),d=a(346),p={data:()=>({popupWindowStyle:{}}),computed:{dataAddColor(){let{friendLink:t}=this.$themeConfig;return t&&t.length>0?(t=t.map(t=>({...t,color:Object(d.a)()})),t):[]}},methods:{getMd5:t=>h()(t),showDetail(t){const e=t.target,a=e.querySelector(".popup-window-wrapper"),s=e.querySelector(".popup-window");a.style.display="block";const{clientWidth:o}=e,{clientWidth:r,clientHeight:n}=s;this.popupWindowStyle={left:(o-r)/2+"px",top:-n+"px"},this.$nextTick(()=>{this._adjustPosition(e.querySelector(".popup-window"))})},hideDetail(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},getImgUrl(t){const{logo:e,email:a}=t;return e&&/^http/.test(e)?e:e&&!/^http/.test(e)?this.$withBase(e):`//1.gravatar.com/avatar/${this.getMd5(a||"")}?s=50&amp;d=mm&amp;r=x`},_adjustPosition(t){const{offsetWidth:e}=document.body,{x:a,width:s}=t.getBoundingClientRect(),o=e-(a+s);if(o<0){const{offsetLeft:e}=t;this.popupWindowStyle={...this.popupWindowStyle,left:e+o+"px"}}}}},g=(a(423),Object(i.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"friend-link-wrapper"},t._l(t.dataAddColor,(function(a,s){return e("div",{key:s,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[e("span",{staticClass:"list-style",style:{backgroundColor:a.color}}),t._v("\n    "+t._s(a.title)+"\n    "),e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"popup-window-wrapper"},[e("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.getImgUrl(a)}})]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("h4",[t._v(t._s(a.title))]),t._v(" "),e("a",{staticClass:"btn-go",style:{backgroundColor:a.color},attrs:{href:a.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),a.desc?e("p",[t._v(t._s(a.desc))]):t._e()])])])])],1)})),0)}),[],!1,null,"4de4ba18",null).exports),m=a(356),f=a(355),v=a(398),_={mixins:[f.a,r.a],components:{NoteAbstract:m.a,TagList:l.a,FriendLink:g,ModuleTransition:o.a,PersonalInfo:v.a},data:()=>({recoShow:!1,currentPage:1,tags:[]}),computed:{actionLink(){const{actionLink:t,actionText:e}=this.$frontmatter;return{link:t,text:e}},heroImageStyle(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}},bgImageStyle(){const t={height:"350px",textAlign:"center",overflow:"hidden"},{bgImageStyle:e}=this.$frontmatter;return e?{...t,...e}:t},heroHeight:()=>document.querySelector(".hero").clientHeight},mounted(){this.recoShow=!0,this._setPage(this._getStoragePage())},methods:{getCurrentPage(t){this._setPage(t),setTimeout(()=>{window.scrollTo(0,this.heroHeight)},100)},getPages(){let t=this.$site.pages;t=t.filter(t=>{const{home:e,date:a}=t.frontmatter;return!(1==e||void 0===a)}),this.pages=0==t.length?[]:t},getPagesByTags(t){this.$router.push({path:t.path})},_setPage(t){this.currentPage=t,this.$page.currentPage=t,this._setStoragePage(t)},getOneColor:d.a}},C=(a(424),Object(i.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-blog"},[e("div",{staticClass:"hero",style:{...t.bgImageStyle}},[e("div",{staticClass:"mask",style:{background:`url(${t.$frontmatter.bgImage?t.$withBase(t.$frontmatter.bgImage):a(422)}) center/cover no-repeat`}}),t._v(" "),e("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?e("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.04"}},[!1!==t.$frontmatter.isShowTitleInHome?e("h1",[t._v(t._s(t.$frontmatter.heroText||t.$title||"午后南杂"))]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"description"},[t._v("\n        "+t._s(t.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")])]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&!0===t.$themeConfig.huawei?e("p",{staticClass:"huawei"},[e("i",{staticClass:"iconfont reco-huawei",staticStyle:{color:"#fc2d38"}}),t._v("   华为，为中华而为之！\n      ")]):t._e()])],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[e("div",{staticClass:"blog-list"},[e("note-abstract",{attrs:{data:t.$recoPosts,currentPage:t.currentPage}}),t._v(" "),e("pagation",{staticClass:"pagation",attrs:{total:t.$recoPosts.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],1),t._v(" "),e("div",{staticClass:"info-wrapper"},[e("PersonalInfo"),t._v(" "),e("h4",[e("i",{staticClass:"iconfont reco-category"}),t._v(" 分类")]),t._v(" "),e("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(a,s){return e("li",{key:s,staticClass:"category-item"},[e("router-link",{attrs:{to:a.path}},[e("span",{staticClass:"category-name"},[t._v(t._s(a.name))]),t._v(" "),e("span",{staticClass:"post-num",style:{backgroundColor:t.getOneColor()}},[t._v(t._s(a.pages.length))])])],1)})),0),t._v(" "),e("hr"),t._v(" "),0!==t.$tags.list.length?e("h4",[e("i",{staticClass:"iconfont reco-tag"}),t._v(" 标签")]):t._e(),t._v(" "),e("TagList",{on:{getCurrentTag:t.getPagesByTags}}),t._v(" "),t.$themeConfig.friendLink&&0!==t.$themeConfig.friendLink.length?e("h4",[e("i",{staticClass:"iconfont reco-friend"}),t._v(" 友链")]):t._e(),t._v(" "),e("FriendLink")],1)])]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.36"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),w=a(350),b=a(24);function y(t,e,a){const s=[];!function t(e,a){for(let s=0,o=e.length;s<o;s++)"group"===e[s].type?t(e[s].children||[],a):a.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const o=s[e];if("page"===o.type&&o.path===decodeURIComponent(t.path))return s[e+a]}}var $={mixins:[r.a],components:{PageInfo:w.a,ModuleTransition:o.a},props:["sidebarItems"],data:()=>({isHasKey:!0}),computed:{showAccessNumber(){return"valine"===this.$themeConfig.commentsSolution},lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$themeConfig.lastUpdated?this.$themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$frontmatter.prev;return!1===t?void 0:t?Object(b.m)(this.$site.pages,t,this.$route.path):(e=this.$page,a=this.sidebarItems,y(e,a,-1));var e,a},next(){const t=this.$frontmatter.next;return!1===t?void 0:t?Object(b.m)(this.$site.pages,t,this.$route.path):(e=this.$page,a=this.sidebarItems,y(e,a,1));var e,a},editLink(){if(!1===this.$frontmatter.editLink)return!1;const{repo:t,editLinks:e,docsDir:a="",docsBranch:s="master",docsRepo:o=t}=this.$themeConfig;return o&&e&&this.$page.relativePath?this.createEditLink(t,o,a,s,this.$page.relativePath):""},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,s,o){if(/bitbucket.org/.test(t)){return(b.k.test(e)?e:t).replace(b.b,"")+"/src"+`/${s}/`+(a?a.replace(b.b,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}return(b.k.test(e)?e:"https://github.com/"+e).replace(b.b,"")+"/edit"+`/${s}/`+(a?a.replace(b.b,"")+"/":"")+o}}},k=(a(425),Object(i.a)($,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[e("ModuleTransition",[t._t("top")],2),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.08"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-title"},[e("h1",[t._v(t._s(t.$page.title))]),t._v(" "),e("hr"),t._v(" "),e("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1)]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.16"}},[e("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"theme-reco-content"})],1),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.24"}},[e("footer",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.32"}},[t.recoShowModule&&(t.prev||t.next)?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n          ←\n          "),t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},[t.next?e("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e(),t._v("\n          →\n        ")],1):t._e()])]):t._e()]),t._v(" "),e("ModuleTransition",{attrs:{delay:"0.40"}},[t._t("bottom")],2)],1)}),[],!1,null,null,null).exports),S={computed:{year:()=>(new Date).getFullYear()}},x=(a(426),Object(i.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-wrapper"},[t._m(0),t._v(" "),t.$themeConfig.record?e("span",[e("i",{staticClass:"iconfont reco-beian"}),t._v(" "),e("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.record))])]):t._e(),t._v(" "),e("span",[e("i",{staticClass:"iconfont reco-copyright"}),t._v(" "),e("a",[t.$themeConfig.author||t.$site.title?e("span",[t._v(t._s(t.$themeConfig.author||t.$site.title))]):t._e(),t._v("\n        \n      "),t.$themeConfig.startYear?e("span",[t._v(t._s(t.$themeConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s(t.year)+"\n    ")])]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.$themeConfig.valineConfig,expression:"$themeConfig.valineConfig !== undefined"}]},[e("i",{staticClass:"iconfont reco-eye"}),t._v(" "),e("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.cyberSecurityRecord?e("p",{staticClass:"cyber-security"},[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),e("a",{attrs:{href:t.$themeConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.cyberSecurityRecord))])]):t._e()])}),[function(){var t=this._self._c;return t("span",[t("i",{staticClass:"iconfont reco-theme"}),this._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[this._v("VuePress-theme-reco")])])}],!1,null,"66bf7bce",null).exports),T={components:{HomeBlog:C,Home:c,Page:k,Common:a(361).a,Footer:x},computed:{sidebarItems(){return Object(b.n)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},homeCom(){const{type:t}=this.$themeConfig;return void 0!==t?"blog"==t?"HomeBlog":t:"Home"}}},M=(a(365),a(366),Object(i.a)(T,(function(){var t=this,e=t._self._c;return e("div",[e("Common",[t.$frontmatter.home?e(t.homeCom,{tag:"component"}):e("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$frontmatter.home?e("Footer",{staticClass:"footer"}):t._e()],1)],1)}),[],!1,null,null,null));e.default=M.exports}}]);