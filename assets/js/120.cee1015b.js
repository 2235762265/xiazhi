(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{547:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"八、防止样式污染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、防止样式污染"}},[t._v("#")]),t._v(" 八、防止样式污染")]),t._v(" "),s("h2",{attrs:{id:"_1-css-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-modules"}},[t._v("#")]),t._v(" 1.CSS Modules")]),t._v(" "),s("p",[t._v("**因为：**react中前端自动化打包工具webpack默认配置了CSS Modules （注：vue是scoped")]),t._v(" "),s("p",[t._v("**所以：**可以直接用，但要遵循规则")]),t._v(" "),s("p",[s("strong",[t._v("规则：")])]),t._v(" "),s("ol",[s("li",[t._v("样式文件名  "),s("code",[t._v("名称.module.css")])]),t._v(" "),s("li",[t._v("导入       import styled from '路径/名称.module.css'")]),t._v(" "),s("li",[t._v("使用       className={styled.类名}")])]),t._v(" "),s("p",[t._v("缺点：没有用css预处理")]),t._v(" "),s("h2",{attrs:{id:"_2-less-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-less-modules"}},[t._v("#")]),t._v(" 2.LESS Modules")]),t._v(" "),s("p",[t._v("明确：咱们写项目肯定是用CSS预处理方便")]),t._v(" "),s("h3",{attrs:{id:"_2-1-弹出配置文件-eject-别动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-弹出配置文件-eject-别动"}},[t._v("#")]),t._v(" 2.1 弹出配置文件 eject（别动）")]),t._v(" "),s("p",[t._v("**步骤1：**安装  yarn  add  less@2.7.3  less-loader")]),t._v(" "),s("p",[t._v("**步骤2：**配置")]),t._v(" "),s("p",[t._v("在config/webpack.config.js文件中\n搜1：【const sassModuleRegex】\n增1：增加两行代码")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lessRegex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.less$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lessModuleRegex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.module\\.less$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("搜2：【test: sassModuleRegex】 在它的大括号【同级后面】加下述")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lessRegex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("exclude")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lessModuleRegex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStyleLoaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("importLoaders")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sourceMap")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isEnvProduction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" shouldUseSourceMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'less-loader'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sideEffects")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lessModuleRegex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStyleLoaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("importLoaders")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sourceMap")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isEnvProduction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" shouldUseSourceMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("modules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("getLocalIdent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" getCSSModuleLocalIdent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'less-loader'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("**步骤3：**验证")]),t._v(" "),s("blockquote",[s("p",[t._v("App.module.less  （注：类名推荐统一小驼峰")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".t1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("App.js")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" styled2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.module.less'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("styled2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("测试")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-2-🙅🏻‍♀️不弹出配置文件-用这个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-🙅🏻‍♀️不弹出配置文件-用这个"}},[t._v("#")]),t._v(" 3.2 🙅🏻‍♀️不弹出配置文件 （用这个)")]),t._v(" "),s("p",[s("code",[t._v("craco")]),t._v("是一个对 create-react-app 进行自定义配置的社区解决方案")]),t._v(" "),s("p",[t._v("现在我们安装 craco 并修改 "),s("code",[t._v("package.json")]),t._v(" 里的 "),s("code",[t._v("scripts")]),t._v(" 属性。")]),t._v(" "),s("h1",{attrs:{id:"用craco重写配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用craco重写配置"}},[t._v("#")]),t._v(" 用craco重写配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn add @craco/craco -D\n")])])]),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* package.json */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts start"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-scripts test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"craco start"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"craco build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"craco test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后安装 "),s("code",[t._v("craco-less")]),t._v(" 并修改 "),s("code",[t._v("craco.config.js")]),t._v(" 文件如下。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yarn add craco-less -D\n")])])]),s("p",[t._v("最后在项目根目录创建一个 "),s("code",[t._v("craco.config.js")]),t._v(" 用于修改默认配置。")]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CracoLessPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'craco-less'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      plugin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CracoLessPlugin\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"方案4-styled-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案4-styled-components"}},[t._v("#")]),t._v(" 方案4：Styled Components")]),t._v(" "),s("h3",{attrs:{id:"_4-2-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-语法"}},[t._v("#")]),t._v(" 4.2 语法")]),t._v(" "),s("p",[t._v("1.安装："),s("code",[t._v("yarn add styled-components")])]),t._v(" "),s("p",[t._v("2.多次（使用）")]),t._v(" "),s("blockquote",[s("p",[t._v("styled.js")])]),t._v(" "),s("div",{staticClass:"language-tsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-tsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" styled "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'styled-components'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一般用Container命名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("标签名"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n\tCSS支持sass、less语法\n\tdiv{\n\t\twidth: 200px;\n\t}\n\t\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("3.组件内使用")]),t._v(" "),s("p",[t._v("用"),s("code",[t._v("<Container>")]),t._v("标签包裹")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./styled.js'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Test")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Container")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        \t")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("你好")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Container")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("vscode插件  "),s("code",[t._v("vscode-styled-components")])])])}),[],!1,null,null,null);s.default=n.exports}}]);