(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{477:function(t,a,_){"use strict";_.r(a);var r=_(2),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"七、盒子模型、边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、盒子模型、边框"}},[t._v("#")]),t._v(" 七、盒子模型、边框")]),t._v(" "),a("h2",{attrs:{id:"_1-盒子模型-box-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-盒子模型-box-model"}},[t._v("#")]),t._v(" 1. 盒子模型(Box Model)")]),t._v(" "),a("p",[t._v("盒子模型就是把HTML页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。")]),t._v(" "),a("p",[t._v("盒子模型由**元素的内容、边框（border）、内边距（padding）、和外边距（margin）**组成。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Margin(外边距)")]),t._v(" - 清除边框外的区域，外边距是透明的。")]),t._v(" "),a("li",[a("strong",[t._v("Border(边框)")]),t._v(" - 围绕在内边距和内容外的边框。")]),t._v(" "),a("li",[a("strong",[t._v("Padding(内边距)")]),t._v(" - 清除内容周围的区域，内边距是透明的。")]),t._v(" "),a("li",[a("strong",[t._v("Content(内容)")]),t._v(" - 盒子的内容，显示文本和图像。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/cssImg/image-20230611170412302.png",alt:"image-20230611170412302"}})]),t._v(" "),a("p",[t._v("当设置为"),a("code",[t._v("box-sizing: content-box;")]),t._v("时，将采用标准模式解析计算，也是默认模式；")]),t._v(" "),a("p",[a("strong",[t._v("标准盒模型")]),t._v("尺寸计算(元素实际大小)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("宽度：width(内容宽) + padding(内边距) + border(边框)")])]),t._v(" "),a("li",[a("p",[t._v("高度：height(内容高) + padding(内边距) + border(边框)")])]),t._v(" "),a("li",[a("p",[t._v("盒子的实际大小：内容的宽度和高度 +  内边距   +  边框  IE盒子模型")])])]),t._v(" "),a("p",[a("strong",[t._v("怪异盒模型")]),t._v("的 content 部分包含了 border 和 pading")]),t._v(" "),a("p",[t._v("当设置为"),a("code",[t._v("box-sizing: border-box")]),t._v("时，将采用怪异模式解析计算；")]),t._v(" "),a("h2",{attrs:{id:"_2-盒子边框-border"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-盒子边框-border"}},[t._v("#")]),t._v(" 2. 盒子边框(border)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("border-width")]),t._v(" "),a("td",[t._v("定义边框粗细，单位是px")])]),t._v(" "),a("tr",[a("td",[t._v("border-style")]),t._v(" "),a("td",[t._v("边框的样式")])]),t._v(" "),a("tr",[a("td",[t._v("border-color")]),t._v(" "),a("td",[t._v("边框颜色")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-1-边框的样式border-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-边框的样式border-style"}},[t._v("#")]),t._v(" 2.1 边框的样式border-style：")]),t._v(" "),a("ul",[a("li",[t._v("none："),a("strong",[t._v("没有边框")]),t._v("即忽略所有边框的宽度（默认值）")]),t._v(" "),a("li",[t._v("solid：边框为"),a("strong",[t._v("单实线")]),t._v("(最为常用的)")]),t._v(" "),a("li",[t._v("double: "),a("strong",[t._v("双边框")])]),t._v(" "),a("li",[t._v("dashed：边框为"),a("strong",[t._v("虚线")])]),t._v(" "),a("li",[t._v("dotted：边框为"),a("strong",[t._v("点线")])])]),t._v(" "),a("p",[t._v("2.2 border复合写法")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-width || border-style || border-color \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  没有顺序要求  \n")])])]),a("h3",{attrs:{id:"_2-3-border-style类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-border-style类型"}},[t._v("#")]),t._v(" 2.3 border-style类型")]),t._v(" "),a("p",[t._v("盒子边框写法总结表：")]),t._v(" "),a("p",[t._v("很多情况下，我们不需要指定4个边框，我们是可以单独给4个边框分别指定的。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("上边框")]),t._v(" "),a("th",[t._v("下边框")]),t._v(" "),a("th",[t._v("左边框")]),t._v(" "),a("th",[t._v("右边框")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("border-top-style:样式;")]),t._v(" "),a("td",[t._v("border-bottom-style:样式;")]),t._v(" "),a("td",[t._v("border-left-style:样式;")]),t._v(" "),a("td",[t._v("border-right-style:样式;")])]),t._v(" "),a("tr",[a("td",[t._v("border-top-width:宽度;")]),t._v(" "),a("td",[t._v("border- bottom-width:宽度;")]),t._v(" "),a("td",[t._v("border-left-width:宽度;")]),t._v(" "),a("td",[t._v("border-right-width:宽度;")])]),t._v(" "),a("tr",[a("td",[t._v("border-top-color:颜色;")]),t._v(" "),a("td",[t._v("border- bottom-color:颜色;")]),t._v(" "),a("td",[t._v("border-left-color:颜色;")]),t._v(" "),a("td",[t._v("border-right-color:颜色;")])]),t._v(" "),a("tr",[a("td",[t._v("border-top:宽度 样式 颜色;")]),t._v(" "),a("td",[t._v("border-bottom:宽度 样式 颜色;")]),t._v(" "),a("td",[t._v("border-left:宽度 样式 颜色;")]),t._v(" "),a("td",[t._v("border-right:宽度 样式 颜色;")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-内边距-padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-内边距-padding"}},[t._v("#")]),t._v(" 3. 内边距(padding)")]),t._v(" "),a("p",[t._v("padding属性用于设置内边距。是指边框与内容之间的距离。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-设置"}},[t._v("#")]),t._v(" 3.1 设置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("padding-left")]),t._v(" "),a("td",[t._v("左内边距")])]),t._v(" "),a("tr",[a("td",[t._v("padding-right")]),t._v(" "),a("td",[t._v("右内边距")])]),t._v(" "),a("tr",[a("td",[t._v("padding-top")]),t._v(" "),a("td",[t._v("上内边距")])]),t._v(" "),a("tr",[a("td",[t._v("padding-bottom")]),t._v(" "),a("td",[t._v("下内边距")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-padding简写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-padding简写"}},[t._v("#")]),t._v(" 3.2 padding简写")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值的个数")]),t._v(" "),a("th",[t._v("表达意思")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1个值")]),t._v(" "),a("td",[t._v("padding：上下左右内边距;")])]),t._v(" "),a("tr",[a("td",[t._v("2个值")]),t._v(" "),a("td",[t._v("padding:   上下内边距    左右内边距 ；")])]),t._v(" "),a("tr",[a("td",[t._v("3个值")]),t._v(" "),a("td",[t._v("padding：上内边距        左右内边距   下内边距；")])]),t._v(" "),a("tr",[a("td",[t._v("4个值")]),t._v(" "),a("td",[t._v("padding:   上内边距        右内边距       下内边距 左内边距 ；")])])])]),t._v(" "),a("p",[t._v("当我们给盒子指定padding值之后，如果是采用标准和模型，发生了2件事情：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("内容和边框 有了距离，添加了内边距。")])]),t._v(" "),a("li",[a("p",[t._v("盒子会变大")])])]),t._v(" "),a("p",[t._v("解决措施：")]),t._v(" "),a("ol",[a("li",[t._v("通过给设置了宽高的盒子，减去相应的内边距的值，维持盒子原有的大小。")]),t._v(" "),a("li",[t._v("设置怪异盒模型"),a("code",[t._v("box-sizing: content-box;")])])]),t._v(" "),a("p",[t._v("padding不影响盒子大小情况：👉如果没有给一个盒子指定宽度， 此时，如果给这个盒子指定padding， 则不会撑开盒子。")]),t._v(" "),a("h2",{attrs:{id:"_4-外边距-margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-外边距-margin"}},[t._v("#")]),t._v(" 4. 外边距(margin)")]),t._v(" "),a("p",[t._v("margin属性用于设置外边距。margin就是控制盒子和盒子之间的距离")]),t._v(" "),a("h3",{attrs:{id:"_4-1-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-设置"}},[t._v("#")]),t._v(" 4.1 设置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("margin-left")]),t._v(" "),a("td",[t._v("左外边距")])]),t._v(" "),a("tr",[a("td",[t._v("margin-right")]),t._v(" "),a("td",[t._v("右外边距")])]),t._v(" "),a("tr",[a("td",[t._v("margin-top")]),t._v(" "),a("td",[t._v("上外边距")])]),t._v(" "),a("tr",[a("td",[t._v("margin-bottom")]),t._v(" "),a("td",[t._v("下外边距")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/cssImg/image-20230611171415002.png",alt:"image-20230611171415002"}})]),t._v(" "),a("p",[t._v("margin值的简写 （复合写法）代表意思跟 padding 完全相同。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-块级盒子水平居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-块级盒子水平居中"}},[t._v("#")]),t._v(" 4.2 块级盒子水平居中")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("盒子必须指定宽度（width）")])]),t._v(" "),a("li",[a("p",[t._v("然后就给左右的外边距都设置为auto")])])]),t._v(" "),a("p",[t._v("实际工作中常用这种方式进行网页布局，示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".header")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 960px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-3-清除元素的默认内外边距"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-清除元素的默认内外边距"}},[t._v("#")]),t._v(" 4.3 清除元素的默认内外边距")]),t._v(" "),a("ul",[a("li",[t._v("行内元素为了照顾兼容性,尽量只设置左右内外边距，不要设置上下内外边距。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("* {\n   padding:0;         /* 清除内边距 */\n   margin:0;          /* 清除外边距 */\n}\n")])])]),a("h2",{attrs:{id:"_5-外边距合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-外边距合并"}},[t._v("#")]),t._v(" 5.外边距合并")]),t._v(" "),a("p",[t._v("使用margin定义块元素的「垂直外边距」时，可能会出现外边距的合并。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-相邻块元素垂直外边距的合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-相邻块元素垂直外边距的合并"}},[t._v("#")]),t._v(" 5.1 相邻块元素垂直外边距的合并")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom")])]),t._v(" "),a("li",[a("p",[t._v("下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和")])]),t._v(" "),a("li",[a("p",[t._v("取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。")])])]),t._v(" "),a("p",[t._v("「解决方案：尽量给只给一个盒子添加margin值」。")]),t._v(" "),a("h3",{attrs:{id:"_5-2-嵌套块元素垂直外边距的合并-塌陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-嵌套块元素垂直外边距的合并-塌陷"}},[t._v("#")]),t._v(" 5.2 嵌套块元素垂直外边距的合并（塌陷）")]),t._v(" "),a("ul",[a("li",[t._v("对于两个嵌套关系的块元素，如果父元素没有上内边距及边框")]),t._v(" "),a("li",[t._v("父元素的上外边距会与子元素的上外边距发生合并")]),t._v(" "),a("li",[t._v("合并后的外边距为两者中的较大者")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("可以为父元素定义上边框。")])]),t._v(" "),a("li",[a("p",[t._v("可以为父元素定义上内边距")])]),t._v(" "),a("li",[a("p",[t._v("可以为父元素添加overflow: hidden。")])])]),t._v(" "),a("p",[t._v("还有其他方法，比如浮动、固定、绝对定位的盒子不会有问题，后面咱们再总结。。。")]),t._v(" "),a("h4",{attrs:{id:"盒子模型布局稳定性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型布局稳定性"}},[t._v("#")]),t._v(" 盒子模型布局稳定性")]),t._v(" "),a("p",[t._v("优先使用  宽度 （width）  其次 使用内边距（padding）    再次  外边距（margin）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("width >  padding  >   margin   \n")])])]),a("p",[t._v("原因：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("margin 会有外边距合并 还有 ie6下面margin 加倍的bug（讨厌）所以最后使用。")])]),t._v(" "),a("li",[a("p",[t._v("padding  会影响盒子大小， 需要进行加减计算（麻烦） 其次使用。")])]),t._v(" "),a("li",[a("p",[t._v("width   没有问题（嗨皮）我们经常使用宽度剩余法 高度剩余法来做。")])])]),t._v(" "),a("h2",{attrs:{id:"_5-css3-新增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-css3-新增"}},[t._v("#")]),t._v(" 5. CSS3 新增")]),t._v(" "),a("h3",{attrs:{id:"圆角边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圆角边框"}},[t._v("#")]),t._v(" 圆角边框：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("border-radius:length;\n\nborder-top-left-radius   定义了左上角的弧度\nborder-top-right-radius   定义了右上角的弧度\nborder-bottom-right-radius   定义了右下角的弧度\nborder-bottom-left-radius   定义了左下角的弧度\n")])])]),a("ul",[a("li",[a("p",[t._v("其中每一个值可以为 数值或百分比的形式。")])]),t._v(" "),a("li",[a("p",[t._v("技巧：让一个正方形 变成圆圈")])])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果要在四个角上一一指定，可以使用以下规则：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 左上角 右上角  右下角  左下角"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。")])]),t._v(" "),a("li",[a("p",[t._v("三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角")])]),t._v(" "),a("li",[a("p",[t._v("两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角")])]),t._v(" "),a("li",[a("p",[t._v("一个值：四个圆角值相同")])])]),t._v(" "),a("h3",{attrs:{id:"盒子阴影-box-shadow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒子阴影-box-shadow"}},[t._v("#")]),t._v(" 盒子阴影(box-shadow)：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" offset-x offset-y [blur [spread]] [color] [inset]\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("offset-x")]),t._v(" "),a("td",[t._v("阴影的水平偏移量。正数向右偏移，负数向左偏移。")])]),t._v(" "),a("tr",[a("td",[t._v("offset-y")]),t._v(" "),a("td",[t._v("阴影的垂直偏移量。正数向下偏移，负数向上偏移。")])]),t._v(" "),a("tr",[a("td",[t._v("blur")]),t._v(" "),a("td",[t._v("可选。阴影模糊距离，不能取负数。")])]),t._v(" "),a("tr",[a("td",[t._v("spread")]),t._v(" "),a("td",[t._v("可选。阴影大小")])]),t._v(" "),a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",[t._v("可选。阴影的颜色")])]),t._v(" "),a("tr",[a("td",[t._v("inset")]),t._v(" "),a("td",[t._v("可选。表示添加内阴影，默认为外阴影")])])])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   border"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, .4);  */")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */")]),t._v("\n   box-shadow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 15px 30px  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);