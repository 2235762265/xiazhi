# Canvas

## 1.什么是canvas

是一个可以使用脚本 (通常为**JavaScript来绘制图形的 HTML 元素**)。

例如，它可以用于绘制图表、制作图片构图或者制作简单的动画。



## 2.canvas基本用法

### 1.canvas元素

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

`<canvas>`看起来和 `<img>`元素很相像，唯一的不同就是它并没有 src 和 alt 属性。实际上，`<canvas>` 标签只有两个属性可选属性**width**和**height**。

`canvas` 会初始化宽度为 300 像素和高度为 150 像素。该元素可以使用CSS来定义大小，但在绘制时图像会伸缩以适应它的框架尺寸：如果 CSS 的尺寸与初始画布的比例不一致，它会出现扭曲。



### 2.替换内容

`<canvas>`标签中提供了替换内容。不支持`<canvas>`的浏览器将会忽略容器并在其中渲染后备内容。

而支持`<canvas>`的浏览器将会忽略在容器中包含的内容，并且只是正常渲染 canvas。

举个例子，我们可以提供对 canvas 内容的文字描述或者是提供动态生成内容相对应的静态图片，如下所示：

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

### 3.渲染上下文

`canvas` 起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。

`<canvas>`  元素有一个叫做 `getContext()` 的方法，这个方法是**用来获得渲染上下文和它的绘画功能。**

`getContext()`接受**一个参数**，即**上下文的类型**。对于 2D 图像而言，使用下面方法来确定2d环境

```js
// 获取画布
var canvas = document.getElementById('tutorial');

// 获取画笔
var ctx = canvas.getContext('2d');
```



## 2.使用canvas

### 1.绘制矩形

#### 1.绘制填充矩形

绘制的图形默认是黑色填充

`x`,`y`为相对于浏览器窗口左上角的坐标

`width`,`height`为矩形的宽高

```js
fillRect(x,y,width,height)
```

#### 2.绘制边框矩形

绘制一个只有黑色边框的矩形

```js
strokeRect(x,y,width,height)
```

#### 3.清除矩形区域

清除指定矩形区域，让清除部分完全透明。

```
clearRect(x,y,width,height)
```



#### 举例

```js
var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}
```



### 2.绘制路径

