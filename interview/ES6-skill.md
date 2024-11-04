# ES6面试题集

‌&emsp;&emsp;ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。[查看ES6官网文档地址](https://es6.ruanyifeng.com/#docs/intro)。

## 1、对于Babel的了解？
&emsp;&emsp;Babel是一个广泛的ES6转码器，其主要作用就是将ES6代码转换为ES5代码，从而可以在老版本的浏览器中执行，以至于又不用担心现有环境是否支持ES6语法；
```js
//安装方式
npm install --save-dev @babel/core
//Babel转换原理：箭头函数
input.map(item => item + 1)
// 转码后
input.map(function (item) {
  return item + 1;
});
```
Babel 的配置文件是.babelrc，存放于项目的根目录下

## 2、Map和Set是什么如何使用？
**（1）Map（字典）**  
&emsp;&emsp;① 定义 ：Map是一种类对象数据结构，可以保存键值对，并且能够记住键的原始插入顺序，任何对象或者原始值都可以作为一个键或值；Map的键不可重复也不可以修改，但值可以修改；（关键字：顺序存储、任意类型的键、键唯一）  
&emsp;&emsp;② 使用 ：  
```js
let defaultMap = new Map([['name', '张三'], ['age', 20]])
```
&emsp;&emsp;③ 常用方法 ：set() 、delete()、has()   
**（2）Set（集合）**  
&emsp;&emsp;① 定义 ：Set与Map类似，但它是一个类数组对象，允许存储任意类型的唯一值，即存储的值不重复，因此常用来做去重处理，但非键值对模式存储；Set对象只能通过迭代器来修改值；（关键字：数组形式、唯一不重复）  
&emsp;&emsp;② 使用 ：  
```js
let defaultSet = new Set(['张三', 12, true])
```
&emsp;&emsp;③ 常用方法 ：add() 、delete()、has()

## 3、介绍一下Promise
&emsp;&emsp;Promise 是一种编程结构，用于处理异步操作。它允许开发者以更清晰、更简单和更优雅的方式处理异步操作，从而避免回调地狱的问题。以下是 Promise 的一些核心特点和用法：

&emsp;&emsp;**定义与状态:** Promise 有三种状态pending（等待中）、fulfilled（已完成）和 rejected（已拒绝）

&emsp;&emsp;**基本用法:** 使用 then(), catch(), 和 finally() 方法来处理 Promise 的成功、失败和最终处理。
then() 方法用于注册成功和失败状态的回调函数。
catch() 方法用于捕获并处理 Promise 的失败状态。
finally() 方法无论 Promise 是成功还是失败，都会执行。

## 4、Pormise和回调函数有何不同
&emsp;&emsp;从基本概念上来看，回调函数是一种将函数作为参数传递给另一个函数的方式，当外部函数完成某项任务后，会调用这个回调函数；而Promise是一个代表了异步操作最终完成或失败及其结果值的对象，Promise通过.then()链式调用来组织异步代码，可以有效避免回调地狱；  

## 5、Async和Await的了解
&emsp;&emsp;Async/Await是一种基于Generate生成器的语法糖，它可以使异步操作代码更加简洁可读，在JavaScript中，Async函数返回一个Promise对象，并且在函数内部使用了Generate生成器的特性来实现暂停和恢复。

&emsp;&emsp;Await操作符用于等待一个Promise对象的解决，并且只能在Async函数内部使用。当在Async函数中使用Await操作符时，实际上是在告诉JavaScript引擎在这里暂停执行，直到后面的Promise对象被解决。这种暂停和恢复的机制正是基于生成器实现的。

## 6、箭头函数是什么，与普通函数有何区别
&emsp;&emsp;箭头函数（Arrow Functions）是JavaScript ES6引入的一种简洁的函数语法，它允许开发者以更直观和高效的方式编写函数。以下是箭头函数与普通函数的主要区别：

&emsp;&emsp;**① this指向：** 箭头函数的this指向始终是定义时的上下文对象，而普通函		数的this指向会根据调用方式发生变化；

&emsp;&emsp;**② arguments对象：** 箭头函数中没有arguments对象，而普通函数中则		可以通过arguments对象访问函数的参数列表；

&emsp;&emsp;**③ 构造函数：** 箭头函数不能作为构造函数使用，而普通函数则可以；

&emsp;&emsp;**④ prototype属性函数：** 箭头函数没有prototype属性，而普通函数则		可以通过prototype属性为函数添加方法；

## 7、ES6中的Generator生成器是什么？开发中如何使用
&emsp;&emsp;Generator生成器是ES6提出的一种异步编程解决方案，Generator生成器有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态;Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行，需要每次都调用next()来执行，每次遍历从上到下或上一次终止的地方执行遇到yield便会终止
```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```