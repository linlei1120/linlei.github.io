# HTML5面试题集

HTML5是互联网的新一代Web内容构建标准，是构建以及呈现互联网内容的一种语言方式，被认为是互联网的核心技术之一。[查看HTML文档](https://www.w3school.com.cn/html/index.asp)
### 1、行内元素和块级元素都有哪些？
**（1）行内元素**：div、h1~h6、hr、p、li、ul、ol、table、from、blockquote；  
**（2）块级元素**：a、span、img、input、textarea、select；

### 2、HTML5的拖拽如何实现，有哪些API？
dragstart: 事件主体为被拖拽元素，在开始拖放元素时触发

dragend: 事件主体是被拖放元素，整个拖拽操作结束时触发

drag: 事件主体是被拖放元素，正在拖放元素时触发

dragenter: 事件主体是目标元素，被拖放元素进入时触发

dragover: 事件主体是目标元素，被拖放元素在目标元素内移
动时触发

dragleave: 事件主体是目标元素，被拖放元素移出时触发

drop: 事件主体是目标元素，整个拖放操作完全结束时触发

### 3、HTML5新增的标签有那些？
H5新增的标签包括：

`<section>`定义文档中的节、`<header>`定义 section 或 document 的页眉、`<footer>`定义 section 或 document 的页脚、

`<article>`定义外部的内容、`<aside>`定义 article 以外的内容、

`<audio>`定义声音如音乐或其他音频流、`<canvas>`定义画布，比如矢量图表和其他图像、`<video>`定义视频如电影片段或其他视频流、`<source>`为媒介元素（比如 `<video> `和` <audio>`）定义媒介资源、

`<time>`定义日期或时间，或者两者、`<progress>`显示 JavaScript 中耗费时间的函数的进程;

# CSS3面试题集

CSS3 是CSS（层叠样式表）技术的最新标准。主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局、过渡动画、2D/3D转换等模块。

### 1、px/em/rem的区别？

- px：绝对单位长度，相对于显示器屏幕分辨率来定义，大小固定，不随浏览器的缩放而改变；
- em：相对单位长度，相对于当前元素的父元素字体大小定义；
- rem：CSS3引入的一种相对单位长度，它相对于HTML根元素的字体大小，优点是可以通过直接修改根元素字体大小来控制长度比例；初始：1em = 1rem = 16px

### 2、什么是回流和重绘？
**（1）定义及区别**：  
&emsp;&emsp;① 回流也叫重排，指的是浏览器重新计算并绘制经修改后的元素的过程，并重新渲染页面，元素的几何属性发生改变（比如修改元素的宽、高或隐藏元素等）‌；  
&emsp;&emsp;② 重绘指的是浏览器根据元素的样式信息重新绘制页面，‌但没有改变元素的几何属性（比如修改了颜色或背景色）。  
**（2）如何避免**：  
&emsp;&emsp;① 尽量使用class属性来批量修改样式；  
&emsp;&emsp;② 使用CSS3动画或transform来实现动画效果，因为这些属性通常会在GPU层面处理，而不会引起回流，性能更好；  
&emsp;&emsp;③避免频繁读取布局信息，如获取offsetTop、offsetLeft等信息；  
**注意**：重绘不一定导致回流，回流一定会导致重绘，回流的性能开销更大

## 3、CSS常用的伪元素有哪些，如何使用
&emsp;&emsp;常用的伪元素有：  
&emsp;&emsp;`::before`（在元素之前插入内容并修改样式）、`::after`（在元素之后插入内容并修改样式）、:`:first-letter`（设置第一个字符的样式）、`::first-line`（设置第一行的样式）、`::placeholder`（设置输入字段的占位符）

## 4、CSS选择器的优先级
!important > 内联样式1000 > Id选择器100 > 属性选择器10 > 伪类选择器10 > Class选择器10 > 伪元素选择器1 > 元素选择器1

## 5、标准盒模型和怪异盒模型的区别
**标准盒模型**：width = content + margin 

**怪异盒模型**：width = content + border + padding + margin  

## 6、Flex弹性布局常用属性有哪些
**flex-direction:** 弹性容器中子元素排列方式,其包含的值有：row、row-reverse、column、column-reverse

**flex-warp:** 设置弹性盒子的子元素的换行

**flex-flow:** 上面这两种属性的简写形式

**align-item:** 设置弹性盒子元素在侧轴上的对齐方式

**align-content:** 设置行对齐

**justify-content:** 设置弹性盒子元素在主轴上的对齐方式

**flex-basis:**   设置子元素在主轴上的初始大小，其值有：auto、%、px

**flex-grow:** 设置flex的增长系数，与flex-basis类似，以比例设置

## 7、对于BFC的理解
&emsp;&emsp;BFC块级格式化上下文可以理解为CSS元素的一个属性，它属于普通流元素，可以创建一个隔离的独立的渲染容器，并且可以用于处理外边距重叠现象，清除浮动、阻止元素被浮动元素覆盖等问题；触发BFC的方式有：html根元素、浮动元素、绝对定位元素、overflow属性元素等；

## 8、requir和import的区别，加载模块的区别
&emsp;&emsp;‌require和import的主要区别在于它们所属的模块化规范不同，加载时机不同，以及动态绑定和缓存方式的不同。
&emsp;&emsp;**(1)所属规范不同：** require是CommonJS规范的一部分，主要用于Node.js环境，无法直接用于浏览器端。import是ES6（ECMAScript 2015）引入的关键字，属于ES模块化语法规范，主要用于浏览器端。
&emsp;&emsp;**(2)加载时机不同：** import是静态引入，必须在文件的顶部使用，提高了加载效率，但也限制了其使用位置‌；编译时加载。require是动态引入，可以在代码的任何位置使用，运行时加载，更加灵活但可能影响性能‌。
&emsp;&emsp;**(3)动态绑定和缓存方式不同：** import提供静态分析，支持宏和类型检验，但无法实现动态绑定；require提供动态绑定，适合服务器或浏览器环境。多次要求相同的模块时，只会执行一次，因为缓存机制的存在‌。