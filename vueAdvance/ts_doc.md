# TypeScript 开发文档

## 基础入门

### 1、JS存在的一些弊端
&emsp;&emsp;**（1）** JS中的相等运算符会强制转换其操作对象的类型  
```js
if("" == 0 || '1' == 1){

}
```
&emsp;&emsp;**（2）** JS中对于不存在的值进行访问也不会抛出异常,依然会进行计算  
```js
const obj = { width: 10};
const area = obj.width * obj.heigth;
// area = NaN
```  
在TS中由于静态类型检查器的存在，对于以上的代码语句这会提前做出警告提示。
### 2、TS与JS之间的联系
&emsp;&emsp;**（1）**TypeScript是一种语言，是JavaScript的类型超集，因此JS语法是合法的TS，因此TS不会将任何JS代码视为错误，因此有效的JS代码也可以在TS中使用。  
&emsp;&emsp;TS的特点在于它添加了关于如何让使用不同类型的值的规则。
```js
// js中正常执行，TS中回对[]和初0进行异常提示
console.log(4 / []);
console.log(4 / 0);
```
注意：原则上TS不会改变JS代码的运行时行为，因此在JS迁移到TS中即使存在代码类型错误也只会进行提示也不会影响运行。
&emsp;&emsp;**（2）推断类型**：TS会在许多情况下为JS生成类型，如根据赋值类型判断变量类型；
```js
let helloworld = 'helloworld'
// let helloworld:string
```
&emsp;&emsp;**（3）定义类型**：为了保证某些设计模式下自动推断类型正常，因此可以通过对JS语言的扩展，提前告诉TS类型在什么地方；
&emsp;&emsp;比如创建一个多类型属性的对象：
```js
// 使用interface提前声明类型
    interface User {
        name: string;
        id: number;
    }
//然后再使用:TypeName的来声明对应的对象
    const user: User = {
        name: 'Tom',
        id: 0
    }
```
&emsp;&emsp; 在TS中对于类和面向对象编程，可以使用以下方式：
```js
interface User{
    name: string;
    id: number;
}
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id
    }
}
const user: User = new UaerAccount("Bob",12)
```
**TS中常用的类型声明：boolean、bigint、null、string、symbol、undefined、any、unknown、void;**

&emsp;&emsp;**（4）组合类型**：对于复杂类型，可以通过使用联合与泛型两种方式创建：  
&emsp;&emsp; **联合**  
联合模式下可以为一个变量创建多个可选类型或值；
```js
// 字面量集合
type MyBool = true | false
type WindowStates = "open" | "closed" | "minimized"

// 处理不用类型的函数
function getLength(obj: string | string[]){
    return obj.length;
}
```
&emsp;&emsp; **泛型**    
泛型为类型提供变量，如数组，没有泛型的数组可以包含任何东西，但是具有泛型的数组则可以描述所包含的值；
```js
 type StringArray = Array<string>;
 type ObjectWithNameArray = Array<{ name: string}>;

//  提前声明所使用的泛型的类型
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
declare const backpack: Backpack<string>;
const object = backpack.get();

```

&emsp;&emsp;**（5）结构类型系统**：TS的核心原则之一是类型检查侧重于值得形状，在结构类型系统中，如果两个对象具有相同得形状，则认为它们属于同一类型；
```js
    interface Point {
        x: number;
        y: nunber;
    }
    // 为函数得传参对象提前声明类型
    function logPoint(p: Ponit){
        console.log(`${p.x}, ${p.y}`)
    }

    const point = { x: 12, y: 26}
    logPoint(point);
    // TypeScript 在类型检查中将 point 的形状与 Point 的形状进行比较。它们具有相同的形状，因此代码通过。
```
形状匹配配可以只匹配对象字段的子集；
```js
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
```
## 工作手册
&emsp;&emsp;随着JS的广泛应用，对于大型复杂的项目而言，JS缺乏了代码单元之间关系的能力，包括类型错误，拼写错误或者其他错误；TS相对于JS而言其主要工作就是确保在代码运行之前程序的类型正确；
&emsp;&emsp;**1、基础知识**：
&emsp;&emsp;**（1）静态类型检查**：
在运行代码之前，TS会提前检查我们的代码，并对不规范的代码进行提示：
```js
const message = "hello!";
message();
//This expression is not callable.Type 'String' has no call signatures.
```
&emsp;&emsp;**（1）常见异常**：
除了类型异常之外，开发过程中常见的异常错误还包括：未定义错误、错别字错误、函数调用异常、基本逻辑错误等；
```js
// 未定义
const user = {
  name: "Daniel",
  age: 26,
};
// 错别字
const announcement = "Hello World!";
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
user.location;
```

&emsp;&emsp;**2、日常类型**：
&emsp;&emsp;**（1）基础类型**：
JS中常用的三种基础类型：string、number、boolean;
&emsp;&emsp;**（2）数组类型**：
在TS中声明数组可以使用`[]`，也可以提前为数组声明类型如`number[]`和`string[]`或者使用`Array<number>`更标准；  
**any**  
any是TS中的一种页数类型，使用any声明类型时，可以访问它的任何属性，即可以表示任何类型；几乎任何其他东西这在语法上是合法的：
```js
    let obj: any = {x: 0};
    obj.foo();
    obj();
    obj.bar = 100;
    obj.bar = 'Hello';
```
**注意**：当没有指定类型，且TS不能从上下文推断时，默认为`any`类型；
## 参考文档

## 模板参考
