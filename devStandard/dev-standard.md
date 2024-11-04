# HTML编码规范

规范的编码标准可以增强团队开发协作、提高代码质量和打造开发基石的编码规范，

## DOCTYPE 声明
HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：
````html
```团队约定
<!DOCTYPE html>
```
````
## Lang页面语言属性
推荐使用属性值 cmn-Hans-CN（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 zh-CN 属性值：
````html
```团队约定
<html lang="zh-CN">
```
````
常用地区语言参考：
````md
zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)
````
## Character编码属性
Unicode 使文本的处理、存储和运输，独立于平台和语言。
HTML-5 中默认的字符编码是 UTF-8
````html
```团队约定
<meta charset="UTF-8">
```
````

## 元素及标签闭合
HTML元素的类型：
- 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
- 原始文本元素：script、style
- RCDATA元素：textarea、title
- 外来元素：来自MathML命名空间和SVG命名空间的元素。
- 常规元素：其他HTML允许的元素都称为常规元素。
为了浏览器更好解析代码以及规范编码保持可读性，需要遵守规范包括：
- 所有具有开始标签和结束标签的元素必须使元素闭合；
- 原始文本元素、RCDATA元素都需要闭合标签元素；
- 空元素标签都不加“/”字符，也没有闭合标签；

**示例**

````md
```html
<br>
<hr>
<title>Title</title>
<style></style>
<link rel="stylesheet" href="mycss.css">
```
````
## HTML代码大小写
TML标签名、类名、标签属性和大部分属性值统一用小写
````html
```团队约定
<div class="demo"></div>
```
````
## 元素属性
- 元素属性值使用双引号语法
- 元素属性值可以写上的都写上
````html
```团队约定
<input type="text">
	
<input type="radio" name="name" checked="checked" >
```
````

## 代码缩进
统一使用四个空格/两个Tab进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）
````html
```团队约定
<div class="jdc">
    <a href="#"></a>
</div>
```
````

## 代码嵌套
元素嵌套规范，每个块状元素独立一行，内联元素可选
````html
```团队约定
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>
```
````
段落元素与标题元素只能嵌套内联元素
````html
```团队约定
<h1><span></span></h1>
<p><span></span><span></span></p>
```
````

## 注释规范
注释的类型包括：单行注释、模块注释、嵌套模块注释，不同的类型使用的符号不同，需要注意；
````html
单行注释：一般用于简单的描述，如某些状态描述、属性描述等
<!-- 单行注释 -->
<div>...</div>
```
模块注释：一般用于简单的描述，如某些状态描述、属性描述等
<!-- 模块注释开始 -->	
<div class="mod_a">
    ...
</div>
<!-- 模块注释结束 -->
```
嵌套模块注释：当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用
<!-- 模块注释开始 -->
<div class="mod_a">
		
    <div class="mod_b">
        ...
    </div>
    <!-- /嵌套模块开始 -->
    	
    <div class="mod_c">
    	...
    </div>
    <!-- /嵌套模块结束 -->
		
</div>
<!-- 模块注释结束 -->
```
````

## HTML5标准模板
````md
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>HTML5标准模版</title>
</head>
<body>
	
</body>
</html>
```
````

## 移动端标准模板
````md
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" >
<meta name="format-detection" content="telephone=no" >
<title>移动端HTML模版</title>
	
<!-- S DNS预解析 -->
<link rel="dns-prefetch" href="">
<!-- E DNS预解析 --> 

<!-- S 线上样式页面片，开发请直接取消注释引用 -->
<!-- #include virtual="" -->
<!-- E 线上样式页面片 -->

<!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --> 
<link rel="stylesheet" href="css/index.css" >
<!-- /本地调试方式 -->

<link rel="stylesheet" href="http://srcPath/index.css" >
<!-- /开发机调试方式 -->
<!-- E 本地调试 -->

</head>
<body>

</body>
</html>
```
````

## PC端标准模板
````md
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="keywords" content="your keywords">
<meta name="description" content="your description">
<meta name="author" content="author,email address">
<meta name="robots" content="index,follow">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<meta name="renderer" content="ie-stand">
<title>PC端HTML模版</title>

<!-- S DNS预解析 --> 
<link rel="dns-prefetch" href="">
<!-- E DNS预解析 --> 

<!-- S 线上样式页面片，开发请直接取消注释引用 -->
<!-- #include virtual="" -->
<!-- E 线上样式页面片 -->

<!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --> 
<link rel="stylesheet" href="css/index.css" >
<!-- /本地调试方式 -->

<link rel="stylesheet" href="http://srcPath/index.css" >
<!-- /开发机调试方式 -->
<!-- E 本地调试 -->

</head>
<body>

</body>
</html>
```
````
<!-- **Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
``` -->

<!-- ## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown). -->
