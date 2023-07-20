(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{486:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"四、过渡transtion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、过渡transtion"}},[t._v("#")]),t._v(" 四、过渡transtion")]),t._v(" "),s("p",[t._v("通过过渡transition，可以让web前端开发人员不需要javascript就可以实现简单的动画交互效果。")]),t._v(" "),s("blockquote",[s("p",[t._v("深入理解CSS过渡transitionhttps://www.cnblogs.com/xiaohuochai/p/5347930.html")])]),t._v(" "),s("h2",{attrs:{id:"_1-定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[t._v("#")]),t._v(" 1.定义")]),t._v(" "),s("p",[t._v("过渡transition是一个复合属性，包括transition-property、transition-duration、transition-timing-function、transition-delay这四个子属性。通过这四个子属性的配合来完成一个完整的过渡效果。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 过渡属性"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值为all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 过渡持续时间"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值为0s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transiton-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 过渡函数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值为ease函数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 过渡延迟时间"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值为0s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    background-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    transition-duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*     以下三值为默认值，稍后会详细介绍 */")]),t._v("\n    transition-property"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    transition-timing-function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ease"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    transition-delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test:hover")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n~~~html\n<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("></div>\n\n")])])]),s("h2",{attrs:{id:"_2-复合属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-复合属性"}},[t._v("#")]),t._v(" 2.复合属性")]),t._v(" "),s("p",[t._v("过渡transition的这四个子属性只有"),s("code",[t._v("<transition-duration>")]),t._v("是必需且不能为0。")]),t._v(" "),s("p",[t._v("其中，"),s("code",[t._v("<transition-duration>")]),t._v("和"),s("code",[t._v("<transition-delay>")]),t._v("都是时间。")]),t._v(" "),s("p",[t._v("当两个时间同时出现时，第一个是"),s("code",[t._v("<transition-duration>")]),t._v("，第二个是"),s("code",[t._v("<transition-delay>")]),t._v("；")]),t._v(" "),s("p",[t._v("当只有一个时间时，它是"),s("code",[t._v("<transition-duration>")]),t._v("，而"),s("code",[t._v("<transition-delay>")]),t._v("为默认值0s")]),t._v(" "),s("p",[t._v("注意:")]),t._v(" "),s("ul",[s("li",[t._v("transition的这四个子属性之间不能用逗号隔开，只能用空格隔开。因为逗号隔开的代表不同的属性(transition属性支持多值，多值部分稍后介绍)；而空格隔开的代表不同属性的四个关于过渡的子属性。")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    background-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*代表持续时间为2s，延迟时间为默认值0s*/")]),t._v("\n    transition；2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test:hover")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-延迟时间delay-案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-延迟时间delay-案例"}},[t._v("#")]),t._v(" 3.延迟时间delay 案例")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    background-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*代表持续时间为1s，延迟时间为2s*/")]),t._v("\n    transition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1s 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test:hover")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("></div>\n")])])]),s("h2",{attrs:{id:"_4-过渡属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-过渡属性"}},[t._v("#")]),t._v(" 4.过渡属性")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("值: "),s("code",[t._v("none | all | <transition-property>[,<transition-property>]")])])]),t._v(" "),s("li",[s("p",[t._v("初始值: "),s("code",[t._v("all")])])]),t._v(" "),s("li",[s("p",[t._v("应用于: 所有元素")])]),t._v(" "),s("li",[s("p",[t._v("继承性: 无")])])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("  none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 没有指定任何样式\n  all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 默认值，表示指定元素所有支持transition-property属性的样式\n  <transition-property>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 可过渡的样式，可用逗号分开写多个样式\n")])])]),s("h2",{attrs:{id:"_5-过渡持续时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-过渡持续时间"}},[t._v("#")]),t._v(" 5.过渡持续时间")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("值: "),s("code",[t._v("<time>[,<time>]*")])])]),t._v(" "),s("li",[s("p",[t._v("初始值: 0s")])]),t._v(" "),s("li",[s("p",[t._v("应用于: 所有元素")])]),t._v(" "),s("li",[s("p",[t._v("继承性: 无")])]),t._v(" "),s("li",[s("p",[t._v("[注意]该属性不能为负值")])]),t._v(" "),s("li",[s("p",[t._v("[注意]若该属性为0s则为默认值，若为0则为无效值。所以必须带单位")])]),t._v(" "),s("li",[s("p",[t._v("[注意]该值为单值时，即所有过渡属性都对应同样时间；该值为多值时，过渡属性按照顺序对应持续时间")])])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*DEMO中的过渡属性值*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("background"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_6-过渡时间函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-过渡时间函数"}},[t._v("#")]),t._v(" 6.过渡时间函数")]),t._v(" "),s("p",[t._v("过渡时间函数用于定义元素过渡属性随时间变化的过渡速度变化效果")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("值: "),s("code",[t._v("<timing-function>[,<timing-function>]*")])])]),t._v(" "),s("li",[s("p",[t._v("初始值: ease")])]),t._v(" "),s("li",[s("p",[t._v("应用于: 所有元素")])]),t._v(" "),s("li",[s("p",[t._v("继承性: 无")])])]),t._v(" "),s("h2",{attrs:{id:"_7-取值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-取值"}},[t._v("#")]),t._v(" 7.取值")]),t._v(" "),s("p",[t._v("过渡时间函数共三种取值，分别是关键字、steps函数和bezier函数")]),t._v(" "),s("h2",{attrs:{id:"_8-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-关键字"}},[t._v("#")]),t._v(" 8.关键字")]),t._v(" "),s("p",[t._v("其实是bezier函数或steps函数的特殊值")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("ease")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 开始和结束慢，中间快。\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("linear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 匀速。\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("ease-in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 开始慢。\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("ease-out")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 结束慢。\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("ease-in-out")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 和ease类似，但比ease幅度大。\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);