# Vue面试题集

‌&emsp;&emsp;‌Vue.js是一个用于构建用户界面的渐进式‌JavaScript框架。‌‌Vue.js遵循MVVM模式（Model-View-ViewModel），实现了数据双向绑定，简化了DOM操作，使得开发者可以更加专注于应用逻辑而非页面渲染。[查看Vue官网文档地址](https://cn.vuejs.org/)。

## 1、Vue的生命周期以及各自的作用？
**（1）beforeCreate**：该阶段是`new Vue()`之后触发的第一个钩子，在当前阶段`data、methods、computed`以及`watch`上的数据和方法都不能被访问；  

**（2）created**：将该阶段在实例创建完成后发生，当前已完成数据观测，可以使用数据或更改数据，但是不会触发`updated`函数，只能做一些初始数据的获取，无法与DOM进行交互，但是可以通过`vm.$nextTick`来访问DOM；  

**（3）beforeMount**：该阶段发生在挂载之前，此时`template模板`已导入渲染函数编译，而该阶段虚拟DOM已经创建完成，即将开始渲染，此时可以操作数据，但不会触发`updated`；  

**（4）mounted**：该阶段发生在挂载之后，此时真实的DOM已经挂载完成，数据完成双向绑定，可以访问到DOM节点并使用`$ref`对节点进行操作；  

**（5）beforeUpdate**：该阶段发生在数据更新之前，此时虚拟DOM还未重渲染，在当前阶段修改数据不会发生重渲染；  

**（6）updated**：该阶段发生在数据更新之后，此时组件DOM已完成更新，在该阶段要避免修改数据；  

**（7）beforeDestory**：该阶段发生实例销毁之前，此时实例依然可以使用，通常在该阶段进行善后收尾工作，如清除定时器等；  

**（8）destoryed**：该阶段发生在实例销毁之后，此时组件已经被拆解，数据绑定已被卸除，监听被移除，子实例等也全部销毁；  

**（9）setup**：该阶段由vue3.0新增，发生在`beforeCreate`之前，此时不需要使用`data、methods`等方法，所以属性和方法都利用return返回出去；  

## 2、Vue2.0和Vue3.0有何不同？

**Vue3.0的主要变化**：① 新增setup函数以替代beforeCreate和created函数、② 新增CompositionAPI组织组件逻辑更加灵活、③ 响应式改为Proxy实现、④ 源码开发更适合于TS编写 、⑤ templete模板支持多个根标签、⑥ VueX状态管理创建由new Store改为createStore等;

## 3、Vue2.0和Vue3.0的响应式有何不同？
**（1）Vue2.0响应式**：使用了`Object.defineProperty`来实现响应式，当我们创建Vue实例时，它会遍历data选项中的所有属性，并使用`Object.defineProperty`将它们转换为`getter`和`setter`，从而捕获修改操作并触发视图更新；但是无法对数组进行操作以及无法监听数组API；    

**（2）Vue3.0响应式**：使用`Proxy`替代`Object.defineProperty`，因为`Proxy`可以创建一个对象的代理，拦截并自定义基本操作并直接监听对象和数组的变化，并且有多种拦截方法，三个主要过程：响应式创建、依赖收集(`track`函数)、依赖触发(`trigger`函数)；且可以直接监听数组对象；   

**（3）如何处理Proxy只能代理对象的第一层的问题**：判断当前`Reflect.get`的返回值是否为Object，若是则通过`reactive`方法进行代理，从而实现深度监听；  

**（4）如何避免检测数组时可能会触发多次get/set**：可以判断key是否为当前被代理对象`target`自身属性，也可以判断旧值与新值是否相同，只有满足以上两个条件才有可能执行`trigger`；

**（5）Vue3.0为何使用Proxy**：可以在Vue2.0中`Object.defineProperty`会改变原始数值，而`Proxy`则是创建对象的虚拟表示，并且提供了`set、get、deleteProperty`等处理器可以在访问和修改原始对象时进行拦截，也支持`Map、Set、Weakmap`和`Weakset`等。其实现原理为：`get收集依赖`、`set/delete`等触发依赖；

## 4、v-model双向数据绑定的原理是什么？
&emsp;&emsp;v-model是一种语法糖，是v-on和v-bind的语法糖，它基于数据劫持机制，通过劫持表单中的value和input事件，建立视图与数据之间的双向绑定关系，使其数据可以同步；

## 5、keep-alive的常用属性有哪些以及实现原理？
**（1）概述**：`keep-alive`是一种Vue的内置组件，用于对组件进行缓存，当切换组件时避免其频繁被创建和销毁；常用属性有`include/exclude/max`，指定需要缓存或排除缓存的组件的名称，`max`定义最大缓存个数；有两个生命周期`activated/deactivated`，用来得知当前组件是否处于活跃状态；
```js
<keep-alive>
  <router-view :include="includedComponents"></router-view>
</keep-alive>
```  

**（2）原理**：该`keep-alive`缓存时会先标记该虚拟节点是否被缓存过，若是则不再重新初始化或销毁，而内部采用了`LRU算法`用来维护缓存列表，若缓存个数超出则会销毁最久没有被访问的组件；

**（3）LRU算法**：也称为最近最少使用算法，是一种常用的缓存淘汰策略，根据数据的历史访问记录来决定那些数据应该被淘汰，其核心思想就是：最近访问的优先级最高，最少访问的优先删除，从而有效地优化缓存性能；

## 6、next-Tick的作用以及实现原理？
&emsp;&emsp;用于等待下一次 DOM 更新的工具方法，是一种异步更新DOM机制，由于Vue在更改响应式状态时，DOM的更新并不是同步生效的，而是先将他们缓存到一个队列中，nextTick() 则可以在状态改变后立即使用，然后在下一次DOM更新循环结束后返回一个回调函数。
```js
//vue2.0使用
this.$nextTick(() => {
  console.log(this.nodeInfo)
})

//vue3.0使用
import { ref, nextTick } from 'vue'
const count = ref(0)
async function increment() {
  count.value ++
  //此时未更新 0
  console.log(document.getElementById('counter').textContent)
  await nextTick()
  // 此时已更新 1
  console.log(document.getElementById('counter').textContent)
}
```

## 7、什么是虚拟DOM？
&emsp;&emsp;虚拟DOM其实是真实DOM的JS对象，对象中包含的字段有标签名，标签属性以及子标签名子标签属性，文本节点；当真实DOM节点发生变化，会产生新旧两个虚拟DOM，然后通过diff算法对两者进行对比不同。

## 8、Vue2.0和Vue3.0渲染器的diff算法有何区别？
**（1）Vue2的diff算法**：  
&emsp;&emsp;**原理**：核心就是比较两个虚拟DOM 树的差异，返回一个 `patch(补丁) 对象`，这	个对象的作用就是存储两个节点不同的地方，最后用 patch 里记录的信息更	新真实DOM；  
&emsp;&emsp;**特点**：①只会在同级进行比较，然后再比较子节点，不会跨级比较、②循环从两	端向中间进行比较；    

**（2）Vue3的快速diff算法**：  
&emsp;&emsp;**原理**：该借鉴了 `ivi 算法`和 `inferno 算法`加上纯文本`diff算法`，主要分为五个阶段		完成，预处理前置节点、预处理后置节点、处理仅有新增节点、处理仅有卸载		节点、处理其他新增卸载移动情况；在创建`VNode`时就确定其类型，以及在`mout/path`的过程中采用VNode的类型，在此基础上又配合核心的diff	算法提高性能；  
&emsp;&emsp;**特点**：该算法中还运用到了动态规划的思想求解最长递归子序列;

## 9、Vue组件通信方式有哪些？
**（1）父子组件通信**：props（父传子）、$on/$emit（子传父）、$parent/$children;  
**（2）跨级组件通信**：VueX、$attrs、$ref;

## 10、Vue中data为很么必须是函数？
&emsp;&emsp;一个组件若被复用多次，则会创建多个实例。本质上，这些实例用的都是同一个构造函数。若data是对象的话，则属于引用类型，会影响到所有的实例，所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

## 11、Vue中Key的作用是什么？
&emsp;&emsp;key 的作用主要是为了高效的更新虚拟 DOM 。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。

## 12、接口请求一般放在哪个生命周期中？为什么要这样做？
&emsp;&emsp;接口请求可以放在钩子函数 `created、beforeMount、mounted` 中进行调用，因为在这三个钩子函数中，data已经创建，可以将服务端返回的数据进行赋值。  
&emsp;&emsp;推荐在 `created` 钩子函数中调用异步请求，因为在 `created` 钩子函数中调用异步请求有以下优点：① 获取服务端数据更快；② SSR不支持`beforeMount、mounted`函数，所以使用created函数有助于代码一致性；③ 在mounted函数中可能会出现闪屏问题,因为此时页面已经渲染完成。

## 13、Vue中computed和watch的区别是什么？
**（1）computed**：  
&emsp;&emsp;① 计算属性会混入到vue实例中，需监听自定义变量;  
&emsp;&emsp;② 计算属性有缓存，所依赖的值发生变化才会重新计算;  
&emsp;&emsp;③ 不支持异步，本质是一个惰性观察者;  
````js[4]
computed: {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  formattedName() {
    return this.fullName.toUpperCase();
  }
}
````
**（2）watch**：  
&emsp;&emsp;① watch监听data、props中的数据变化;  
&emsp;&emsp;② 没有缓存;  
&emsp;&emsp;③ 支持异步，有两个参数分别是deep深度监听、immediate组件加载立即触发回调函数执行;
````js
watch: {
  firstName: 'updateFullName',
  lastName: 'updateFullName'
},
methods: {
  updateFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
````
**注意**：某些情况下，可以使用watch选项来替代computed属性，以实现更细粒度的控制和性能优化。

## 14、VueX的核心属性分别是？
**（1）State**：用于存储数据状态，类似于Vue中的`Data`，可以通过 `this.$store.state`访问； 

**（2）Getter**：用于从store中的state派生出一些状态，可以将其看作是store的计算属性，通过`store.getters`访问； 

**（3）Mutation**：用于提交修改`store`中数据状态的事务，只能进行同步事务，不支持异步；    
```js{3}
  //辅助函数调用
  import { mapMutations } from 'vuex'
  methods: {
    ...mapMutations(['myAction']),
    // 其他组件方法
  },
```

**（4）Action**：使类似于`mutation`，区别在于`action`不是直接更改数据状态，而是提交mutation之前做异步操作；    
**注**：在组件中使用mapActions辅助函数将action映射到组件的methods中，以便在组件中调用。  
```js{3}
  import { mapActions } from 'vuex'
  methods: {
    ...mapActions(['myAction']),
    // 其他组件方法
  },
```

**（5）Module**：使用于将`store`切割成不同模块，每个模块都拥有自己的`state、getter、mutation、action，`避免了`store`对象因为应用复杂而变得过于臃肿； 

## 15、VueX中的Action和Mutation有什么区别？
&emsp;&emsp;Mutation专注于修改Vuex状态，是修改状态的唯一途径，且必须是同步执行，适合用于响应事件时同步更新状态；而Action主要用于处理异步操作，适合用于执行异步操作，如从服务器获取数据后通过提交Mutation来更新状态‌。

## 16、VueX和Pinia有什么不同？
**（1）体积和性能**：Pinia相较于VueX更加轻量级，文件体积更小，加载速度更快，性能表现也更好；
**（2）对TS的支持**：Vuex主要用于Vue2.0中，早期对TS的支持较弱，需要一些额外的插件来实现类型推导和类型检查，而Pinia则会有更好的支持；
**（3）架构设计**：VueX是采用集中式架构，所有状态都存储在单一的全局状态数中，而Pinia则是采用分布式架构，每个模块都有自己的状态树；


## 17、VueRouter的实现原理是什么？
&emsp;&emsp;VueRouter作为前端路由，其作用是在无需刷新页面的情况下更新视图；VueRouter的底层原理主要有两种模式，一种是Hash模式，另外一种是History模式：  
&emsp;&emsp;① Hash模式：关键技术为`hashchange`事件，利用URL的hash来模拟一个完整的URL，路径中会存在`#`符号；  
&emsp;&emsp;② History模式：通关键技术为HTML5History中新增的`pushState()`和`replaceState()`2个方法来修改历史信息，并更新URL及视图且不会刷新页面；

## 18、在使用Vue种常遇到那些棘手的问题？ 
**① 组件状态管理问题**：在复杂的应用中，组件之间共享状态可能会导致混乱，可使用 Vuex 这样的状态管理模式和库，它集中管理应用的所有组件的状态，并以一种可预测的方式改变状态。   

**② 路由传参的功能问题**：之前一直使用路由传参，但是当本页面刷新的时候，页面上是没有参数的，因为参数是从上个页面传入进来的。 解决办法：使用了缓存，和vuex状态管理。但是由于项目并不是很大型的项目，所以使用最多的是缓存。

**③ 组件之间的通信问题**：组件间通信可能会变得复杂，尤其是在非父子组件之间。对于简单的父子组件通信，使用 props 和事件。对于非父子组件，可以使用事件总线或 Vuex 进行通信。  

## 19、Vue的导航守卫是什么？
&emsp;&emsp;**(1) 定义**：导航守卫也称为路由守卫，是VueRouter中的一种机制，用于实时监控路由跳转的过程以及在路由跳转的各个过程中设置执行相关操作；应用场景包括：全局检查用户是否登录、权限检查、验证路由参数等等；分为`全局守卫`、`路由独享的守卫`和`组件内的守卫`；  
&emsp;&emsp;**(2) 全局路守卫**：主要分为三种`router.beforeEach()`全局前守卫、`router.beforeResolve()`全局解析守卫、`router.afterEach()`全局后置守卫；  
&emsp;&emsp;**(3) 路由独享守卫**：组只有`router.beforeEnter()`，只有在路由跳转配置后才会有效；  
&emsp;&emsp;**(4) 组件内守卫**：主要分为三种`router.beforeRouterEnter()`进入该路由时执行、`router.beforeRouteUpdate()`该路由中参数改变时执行、`router.beforeRouteLeave()`离开该路由时执行；  

## 20、Vue2.0为什么要求组件模板只能有一个根元素
&emsp;&emsp;Vue 要求组件模板必须只有一个根元素是因为 Vue 的 Virtual DOM 机制要求模板内有且只有一个根节点来进行diff算法比对。如果有多个根元素，Vue 将无法确定如何正确地进行DOM更新和渲染。  
&emsp;&emsp;**注意**：Vue3.0 支持了 `Fragment` 的语法，即组件可以有多个根节点。  

## 21、Vue3.0为什么对TS更友好
&emsp;&emsp;**(1) 更好的类型推导和类型检查**：Vue3.0使用了更强大的类型推导和类型检查，使得开发中更早发现潜在错误并且可以自动提示补齐，与TS的强类型相兼容；  
&emsp;&emsp;**(2) ComponsitionAPI**：Vue3.0提供了一种更灵活、可组合的组件编码方式，在使用CompositionAPI时可以更好的推导出函数的参数及返回值，使得代码质量更高，也更方便扩展维护；  
&emsp;&emsp;**(3) 模块化支持更好**：Vue 3.0中的模块化支持得到了改进，在使用TypeScript开发项目时，可以更好地结合模块化开发的思想，使得代码更具可读性和可维护性。

## 22、Vue模板语法的解析原理
&emsp;&emsp;模板语法是一种基于HTML语法，模板语法使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上；模板模板语法的解析原理主要是将模板解析成AST抽象语法树，对AST进行优化，然后将其转换为渲染函数的JS代码，最终生成能够接受数据并返回虚拟DON的JS函数。

## 23、Vue中父组件/子组件的执行顺序
**（1）渲染过程**：父beforeCreate()→父created()→父beforeMounte()→子beforeMounte()→子beforeCreate()→子created()→子beforeMounte()→子mounted()→父mounted()  

**（2）更新过程**：父beforeUpdate()→子beforeUpdate()→子updated())→父updated()   

**（3）销毁过程**：父beforeDestory()→子beforeDestory()→子destory()→父子destory()  

## 24、Vue中常用的修饰符有哪些？
&emsp;&emsp;**（1）表单修饰符**`.lazy`懒加载、`.trim`过滤空格、`.number`自动转为数值类型；  

&emsp;&emsp;**（2）事件修饰符**`.stop`阻止事件冒泡、`.prevent`阻止事件默认行为、`.self`只在自身触发事件、`.once`仅触发一次、`.native`转为原生事件监听；  

&emsp;&emsp;**（3）鼠标键盘按钮修饰符**`.left`鼠标左键、`.right`鼠标右键、`.middle`鼠标空格、`.keyCode`键盘修饰符；

## 25、Vue3的Suepose是什么
&emsp;&emsp;`<Suepense></Suepense>
`是vue3 中新增的内置组件，用于处理异步组件加载的状态，使页面视觉可以更加平滑的过渡，用于异步组件异步数据的获取与处理，并提供一种新的组件加载状态，直到组件解析加载完成；其作用包括：异步组件加载、数据异步获取、代码分割、用户体验更好；应用场景包括：懒加载组件、组件异步渲染、路由懒加载、动态导入等；

## 26、v-if和v-for为什么不能一起用
&emsp;&emsp;通常不建议在同一个元素上同时使用‌和v-for指令，主要原因包括：  

**（1）优先级问题**：在Vue2.0中v-if的优先级高于v-for，而Vue3.0中优先级则是相反的，导致v-if 和 v-for 在渲染顺序上存在冲突；  

**（2）性能问题**：当v-if和v-for同时使用时，Vue需要为每个在v-for中的项目检查v-if的条件。如果列表很大，这会增加不必要的计算量，导致性能下降；  

## 27、Vite和Webpack有什么不同
&emsp;&emsp;**（1）开发模式不同**：Webpack在开发模式下依然会对所有模块进行打包操作，虽然提供了热更新，但大型项目中依然可能会出现启动和编译缓慢的问题；而Vite则采用了基于ES Module的开发服务器，只有在需要时才会编译对应的模块，大幅度提升了开发环境的响应速度。    

&emsp;&emsp;**（2）打包效率不同**：Webpack在打包时，会把所有的模块打包成一个bundle，这会导致初次加载速度较慢；而Vite则利用了浏览器对ES Module的原生支持，只打包和缓存实际改动的模块，从而极大提高了打包效率。 

&emsp;&emsp;**（3）配置复杂度不同**：Webpack的配置相对复杂，对新手不够友好；而Vite在设计上更注重开箱即用，大部分场景下用户无需自己写配置文件。   

&emsp;&emsp;**（4）热更新机制不同**：Webpack的热更新需要整个模块链重新打包和替换，对于大型项目可能会有延迟；Vite的热更新则只会针对改动的模块进行更新，提高了更新速度。


## 28、‌简单概述Vue3的CompositionAPI
&emsp;&emsp;Vue3的Composition API是一种新的API，旨在提供一种更加灵活和可组合的方式来组织和复用组件逻辑。‌ 它基于函数式编程的思想，允许开发者将组件的逻辑分散到多个可复用的函数中，从而提高代码的可读性、可维护性和复用性‌；  
&emsp;&emsp;Composition API通过提供一系列的函数和钩子函数来实现组件的逻辑编写。这些函数包括：`ref`、`reactive`、`setup`等等；相比与Vue2.0的OptionAPI选项式API灵活性更高、可维护性更好、能更好的复用代码；

## 29、Vue中data为什么必须是函数？
&emsp;&emsp;一个组件若被复用多次，则会创建多个实例。本质上，这些实例用的都是同一个构造函数。若data是对象的话，则属于引用类型，会影响到所有的实例，所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

## 30、Vue中Key的作用是什么？
&emsp;&emsp;key 的作用主要是为了高效的更新虚拟 DOM 。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。

## 34、OptionsAPI与CompositionAPI的区别
**(1)OptionsAPI选项式：** 

&emsp;&emsp;① 通过定义data、method、computed等属性和方法共同处理页面逻辑；

&emsp;&emsp;② 使用组件开发过程中当组件变得复杂时页面所对应的属性列表也会增加，	从而可能会导致组件难以阅读且维护成本变高；

**(2)CompositionAPI组合式：**  

&emsp;&emsp;① 在逻辑组织和逻辑复用这方面，组合式API优于选项式API的；

&emsp;&emsp;② 组合式API中见不到this的使用，减少了this指向不明的情况；

## 35、Vue的混入是什么？如何使用Mixin抽离组件公共逻辑
&emsp;&emsp;混入对象（mixins）是一个JavaScript对象，它可以包含任意组件选项，如data、methods、computed、watch等。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项，从而实现代码复用‌，公共代码抽离到mixin，然后再利用import和mixin注册在需要使用的页面或组件中，就可以共同使用，一个页面可以有多个mixin。
```js{1,3}
import mixin from "../mixin/mixin01";
export default {
  mixins: [mixin],
  data() {
  }
}
```

## 36、Vue2 和Vue3 的 Tree Shaking 的区别
&emsp;&emsp;Vue2中的代码是基于CommonJS编写的，所以它不支持Tree Shaking,这意味着即使你只使用了 Vue 的一部分功能，你的最终打包文件仍然会包含整个 Vue 库的代码。在Vue3中源码被重写为ES Module格式，这使得 Vue 3 支持 tree shaking。这意味着如果你只使用了 Vue 的一部分功能，那么你的最终打包文件只会包含你实际使用的那部分代码，未使用的代码会被移除。这可以帮助减小最终打包文件的大小，提高应用的加载性能。
```js
//Vue3的ES Module格式
import { setup, ref ,reactive } from "vue";
```

## 37、Vue3.0的生命周期有那些改变？
&emsp;&emsp;在vue3中，新增了一个`setup`生命周期函数，`setup`执行的时机是在`beforeCreate`生命函数之前执行，因此在这个函数中是不能通过`this`来获取实例的；
&emsp;&emsp;同时为了命名的统一，将`beforeDestroy`改名为`beforeUnmount`，`destroyed`改名为`unmounted`，因此vue3有以下生命周期函数：`beforeCreate`（建议使用setup代替）、`created`（建议使用setup代替）setup、beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted；

## 38、Vue2.0不能监听数组操作，如何实现数组响应式？
&emsp;&emsp;**数据无法监听的原因：** 数组的元素发生变化时，Vue.js无法触发视图的更新，因为数组的属性（例如长度）是只读的，因此数组的原型中的方法并不会触发这样的 getter 和 setter，从而无法监听到这些变化，也就不能及时地更新视图；且Object.definedProperty只能监听到属性的读写，无法监听属性的删除和增加(Proxy可以)；

&emsp;&emsp;**数组响应式方法：** 在 Vue 中对于数组的响应式处理是通过重写数组的一系列方法来实现的，如 `push()`、`pop()`、`shift()`、`unshift()` 等，添加上需要通知的更新，即可实现数组的响应式

## 39、Vue2.0响应式的主要步骤是什么：
&emsp;&emsp;响应式主要是基于基于发布订阅模式和数据劫持来实现的，原理主要是如下几步实现的：

&emsp;&emsp;**1、数据劫持：** 在vue中，当你把一个普通js对象传给vue实例作为data选项时，vue将遍历次对象所有的属性，并使用Object.defineProperty()把这些属性全部转为getter/setter。这样，vue能够追踪到属性的变化，并在属性被访问和修改时执行相应的操作

&emsp;&emsp;**2、依赖追踪：** vue内部维护了一个依赖收集的系统，每个响应式对象都有一个对应的依赖集合，当数据被访问时，会把当前的Watcher（观察者）记录下来。这样，当数据发生变化时，依赖于这个数据的所有Watcher都会被通知，进而更新相应的视图。

&emsp;&emsp;**3、派发更新：** 当响应式数据发生变化时，vue会遍历依赖集合，通知相关的Watcher更新视图