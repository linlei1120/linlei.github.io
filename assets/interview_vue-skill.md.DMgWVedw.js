import{_ as a,c as s,a2 as t,o as i}from"./chunks/framework.Cy5ZJKdt.js";const k=JSON.parse('{"title":"Vue面试题集","description":"","frontmatter":{},"headers":[],"relativePath":"interview/vue-skill.md","filePath":"interview/vue-skill.md"}'),n={name:"interview/vue-skill.md"};function o(r,e,d,l,h,p){return i(),s("div",null,e[0]||(e[0]=[t(`<h1 id="vue面试题集" tabindex="-1">Vue面试题集 <a class="header-anchor" href="#vue面试题集" aria-label="Permalink to &quot;Vue面试题集&quot;">​</a></h1><p>‌  ‌Vue.js是一个用于构建用户界面的渐进式‌JavaScript框架。‌‌Vue.js遵循MVVM模式（Model-View-ViewModel），实现了数据双向绑定，简化了DOM操作，使得开发者可以更加专注于应用逻辑而非页面渲染。<a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">查看Vue官网文档地址</a>。</p><h2 id="_1、vue的生命周期以及各自的作用" tabindex="-1">1、Vue的生命周期以及各自的作用？ <a class="header-anchor" href="#_1、vue的生命周期以及各自的作用" aria-label="Permalink to &quot;1、Vue的生命周期以及各自的作用？&quot;">​</a></h2><p><strong>（1）beforeCreate</strong>：该阶段是<code>new Vue()</code>之后触发的第一个钩子，在当前阶段<code>data、methods、computed</code>以及<code>watch</code>上的数据和方法都不能被访问；</p><p><strong>（2）created</strong>：将该阶段在实例创建完成后发生，当前已完成数据观测，可以使用数据或更改数据，但是不会触发<code>updated</code>函数，只能做一些初始数据的获取，无法与DOM进行交互，但是可以通过<code>vm.$nextTick</code>来访问DOM；</p><p><strong>（3）beforeMount</strong>：该阶段发生在挂载之前，此时<code>template模板</code>已导入渲染函数编译，而该阶段虚拟DOM已经创建完成，即将开始渲染，此时可以操作数据，但不会触发<code>updated</code>；</p><p><strong>（4）mounted</strong>：该阶段发生在挂载之后，此时真实的DOM已经挂载完成，数据完成双向绑定，可以访问到DOM节点并使用<code>$ref</code>对节点进行操作；</p><p><strong>（5）beforeUpdate</strong>：该阶段发生在数据更新之前，此时虚拟DOM还未重渲染，在当前阶段修改数据不会发生重渲染；</p><p><strong>（6）updated</strong>：该阶段发生在数据更新之后，此时组件DOM已完成更新，在该阶段要避免修改数据；</p><p><strong>（7）beforeDestory</strong>：该阶段发生实例销毁之前，此时实例依然可以使用，通常在该阶段进行善后收尾工作，如清除定时器等；</p><p><strong>（8）destoryed</strong>：该阶段发生在实例销毁之后，此时组件已经被拆解，数据绑定已被卸除，监听被移除，子实例等也全部销毁；</p><p><strong>（9）setup</strong>：该阶段由vue3.0新增，发生在<code>beforeCreate</code>之前，此时不需要使用<code>data、methods</code>等方法，所以属性和方法都利用return返回出去；</p><h2 id="_2、vue2-0和vue3-0有何不同" tabindex="-1">2、Vue2.0和Vue3.0有何不同？ <a class="header-anchor" href="#_2、vue2-0和vue3-0有何不同" aria-label="Permalink to &quot;2、Vue2.0和Vue3.0有何不同？&quot;">​</a></h2><p><strong>Vue3.0的主要变化</strong>：① 源码开发更适合于TS编写、② 新增CompositionAPI组织组件逻辑更加灵活、③ 响应式改为Proxy实现、④ 生命周期变化，新增setup函数以替代beforeCreate和created函数、⑤ templete模板支持多个根标签、⑥ VueX状态管理创建由new Store改为createStore等</p><h2 id="_3、vue2-0和vue3-0的响应式有何不同" tabindex="-1">3、Vue2.0和Vue3.0的响应式有何不同？ <a class="header-anchor" href="#_3、vue2-0和vue3-0的响应式有何不同" aria-label="Permalink to &quot;3、Vue2.0和Vue3.0的响应式有何不同？&quot;">​</a></h2><p><strong>（1）Vue2.0响应式</strong>：使用了<code>Object.defineProperty</code>来实现响应式，当我们创建Vue实例时，它会遍历data选项中的所有属性，并使用<code>Object.defineProperty</code>将它们转换为<code>getter</code>和<code>setter</code>，从而捕获修改操作并触发视图更新；但是无法对数组进行操作以及无法监听数组API；</p><p><strong>（2）Vue3.0响应式</strong>：使用<code>Proxy</code>替代<code>Object.defineProperty</code>，因为<code>Proxy</code>可以创建一个对象的代理，拦截并自定义基本操作并直接监听对象和数组的变化，并且有多种拦截方法，三个主要过程：响应式对象创建、依赖收集(<code>track</code>函数)、依赖触发(<code>trigger</code>函数)；且可以直接监听数组对象；</p><p><strong>（3）如何处理Proxy只能代理对象的第一层的问题</strong>：判断当前<code>Reflect.get</code>的返回值是否为Object，若是则通过<code>reactive</code>方法进行代理，从而实现深度监听；<br><strong>（4）如何避免检测数组时可能会触发多次get/set</strong>：可以判断key是否为当前被代理对象<code>target</code>自身属性，也可以判断旧值与新值是否相同，只有满足以上两个条件才有可能执行<code>trigger</code>； <strong>（5）Vue3.0为何使用Proxy</strong>：可以在Vue2.0中<code>Object.defineProperty</code>会改变原始数值，而<code>Proxy</code>则是创建对象的虚拟表示，并且提供了<code>set、get、deleteProperty</code>等处理器可以在访问和修改原始对象时进行拦截，也支持<code>Map、Set、Weakmap</code>和<code>Weakset</code>等。其实现原理为：<code>get收集依赖</code>、<code>set/delete</code>等触发依赖；</p><h2 id="_4、v-model双向数据绑定的原理是什么" tabindex="-1">4、v-model双向数据绑定的原理是什么？ <a class="header-anchor" href="#_4、v-model双向数据绑定的原理是什么" aria-label="Permalink to &quot;4、v-model双向数据绑定的原理是什么？&quot;">​</a></h2><p>  v-model本质是一种语法糖，是v-on和v-bind的语法糖，基于数据劫持机制，通过劫持表单元素的value属性和input事件，建立视图与数据间的双向绑定关系，实现数据同步。</p><h2 id="_5、keep-alive的常用属性有哪些以及实现原理" tabindex="-1">5、keep-alive的常用属性有哪些以及实现原理？ <a class="header-anchor" href="#_5、keep-alive的常用属性有哪些以及实现原理" aria-label="Permalink to &quot;5、keep-alive的常用属性有哪些以及实现原理？&quot;">​</a></h2><p><strong>（1）概述</strong>：<code>keep-alive</code>是vue的一种内置组件，可以实现组件实例缓存，当组件切换时避免组件被重复创建和销毁；常用属性有<code>include/exclude/max</code>，指定需要缓存或排除的组件的名称，<code>max</code>定义最大缓存个数；有两个生命周期<code>activated/deactivated</code>，用来得知当前组件是否处于活跃状态；<br><strong>（2）原理</strong>：该<code>keep-alive</code>缓存时会先标记该虚拟节点是否被缓存过，若是则不再重新初始化或销毁，而内部采用了<code>LRU算法</code>用来维护缓存列表，若缓存个数超出则会销毁最久没有被访问的组件；</p><h2 id="_6、next-tick的作用以及实现原理" tabindex="-1">6、next-Tick的作用以及实现原理？ <a class="header-anchor" href="#_6、next-tick的作用以及实现原理" aria-label="Permalink to &quot;6、next-Tick的作用以及实现原理？&quot;">​</a></h2><p>  用于等待下一次 DOM 更新的工具方法，由于Vue在更改响应式状态时，DOM的更新并不是同步生效的，而是先将他们缓存到一个队列中，nextTick() 则可以在状态改变后立即使用，以等待 DOM 更新完成。</p><h2 id="_7、什么是虚拟dom" tabindex="-1">7、什么是虚拟DOM？ <a class="header-anchor" href="#_7、什么是虚拟dom" aria-label="Permalink to &quot;7、什么是虚拟DOM？&quot;">​</a></h2><p>  虚拟DOM其实是真实DOM的JS对象，对象中包含的字段有标签名，标签属性以及子标签名子标签属性，文本节点；当真实DOM节点发生变化，会产生新旧两个虚拟DOM，然后通过diff算法对两者进行对比不同。</p><h2 id="_8、vue2-0和vue3-0渲染器的diff算法有何区别" tabindex="-1">8、Vue2.0和Vue3.0渲染器的diff算法有何区别？ <a class="header-anchor" href="#_8、vue2-0和vue3-0渲染器的diff算法有何区别" aria-label="Permalink to &quot;8、Vue2.0和Vue3.0渲染器的diff算法有何区别？&quot;">​</a></h2><p><strong>（1）Vue2的diff算法</strong>：<br>   <strong>原理</strong>：核心就是比较两个虚拟DOM 树的差异，返回一个 <code>patch(补丁) 对象</code>，这 个对象的作用就是存储两个节点不同的地方，最后用 patch 里记录的信息更 新真实DOM；<br>   <strong>特点</strong>：①只会在同级进行比较，然后再比较子节点，不会跨级比较、②循环从两 端向中间进行比较；</p><p><strong>（2）Vue3的快速diff算法</strong>：<br>   <strong>原理</strong>：该借鉴了 <code>ivi 算法</code>和 <code>inferno 算法</code>加上纯文本<code>diff算法</code>，主要分为五个阶段 完成，预处理前置节点、预处理后置节点、处理仅有新增节点、处理仅有卸载 节点、处理其他新增卸载移动情况；在创建<code>VNode</code>时就确定其类型，以及在<code>mout/path</code>的过程中采用VNode的类型，在此基础上又配合核心的diff 算法提高性能；<br>   <strong>特点</strong>：该算法中还运用到了动态规划的思想求解最长递归子序列;</p><h2 id="_9、vue组件通信方式有哪些" tabindex="-1">9、Vue组件通信方式有哪些？ <a class="header-anchor" href="#_9、vue组件通信方式有哪些" aria-label="Permalink to &quot;9、Vue组件通信方式有哪些？&quot;">​</a></h2><p><strong>（1）父子组件通信</strong>：props（父传子）、$on/$emit（子传父）、$parent/$children;<br><strong>（2）跨级组件通信</strong>：VueX、$attrs、$ref;</p><h2 id="_10、vue中data为很么必须是函数" tabindex="-1">10、Vue中data为很么必须是函数？ <a class="header-anchor" href="#_10、vue中data为很么必须是函数" aria-label="Permalink to &quot;10、Vue中data为很么必须是函数？&quot;">​</a></h2><p>  一个组件若被复用多次，则会创建多个实例。本质上，这些实例用的都是同一个构造函数。若data是对象的话，则属于引用类型，会影响到所有的实例，所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。</p><h2 id="_11、vue中key的作用是什么" tabindex="-1">11、Vue中Key的作用是什么？ <a class="header-anchor" href="#_11、vue中key的作用是什么" aria-label="Permalink to &quot;11、Vue中Key的作用是什么？&quot;">​</a></h2><p>  key 的作用主要是为了高效的更新虚拟 DOM 。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。</p><h2 id="_12、接口请求一般放在哪个生命周期中-为什么要这样做" tabindex="-1">12、接口请求一般放在哪个生命周期中？为什么要这样做？ <a class="header-anchor" href="#_12、接口请求一般放在哪个生命周期中-为什么要这样做" aria-label="Permalink to &quot;12、接口请求一般放在哪个生命周期中？为什么要这样做？&quot;">​</a></h2><p>  接口请求可以放在钩子函数 <code>created、beforeMount、mounted</code> 中进行调用，因为在这三个钩子函数中，data已经创建，可以将服务端返回的数据进行赋值。<br>   推荐在 <code>created</code> 钩子函数中调用异步请求，因为在 <code>created</code> 钩子函数中调用异步请求有以下优点：① 获取服务端数据更快；② SSR不支持<code>beforeMount、mounted</code>函数，所以使用created函数有助于代码一致性；③ 在mounted函数中可能会出现闪屏问题,因为此时页面已经渲染完成。</p><h2 id="_13、vue中computed和watch的区别是什么" tabindex="-1">13、Vue中computed和watch的区别是什么？ <a class="header-anchor" href="#_13、vue中computed和watch的区别是什么" aria-label="Permalink to &quot;13、Vue中computed和watch的区别是什么？&quot;">​</a></h2><p><strong>（1）computed</strong>：<br>   ① 计算属性会混入到vue实例中，需监听自定义变量;<br>   ② 计算属性有缓存，所依赖的值发生变化才会重新计算;<br>   ③ 不支持异步，本质是一个惰性观察者;</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fullName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firstName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lastName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  formattedName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.fullName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toUpperCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>（2）watch</strong>：<br>   ① watch监听data、props中的数据变化;<br>   ② 没有缓存;<br>   ③ 支持异步，有两个参数分别是deep深度监听、immediate组件加载立即触发回调函数执行;</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  firstName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;updateFullName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lastName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;updateFullName&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  updateFullName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.fullName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firstName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lastName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>注意</strong>：某些情况下，可以使用watch选项来替代computed属性，以实现更细粒度的控制和性能优化。</p><h2 id="_14、vuex的核心属性分别是" tabindex="-1">14、VueX的核心属性分别是？ <a class="header-anchor" href="#_14、vuex的核心属性分别是" aria-label="Permalink to &quot;14、VueX的核心属性分别是？&quot;">​</a></h2><p><strong>（1）State</strong>：用于存储数据状态，类似于Vue中的<code>Data</code>，可以通过 <code>this.$store.state</code>访问；</p><p><strong>（2）Getter</strong>：用于从store中的state派生出一些状态，可以将其看作是store的计算属性，通过<code>store.getters</code>访问；</p><p><strong>（3）Mutation</strong>：用于提交修改<code>store</code>中数据状态的事务，只能进行同步事务，不支持异步；</p><p><strong>（4）Action</strong>：使类似于<code>mutation</code>，区别在于<code>action</code>不是直接更改数据状态，而是提交mutation；</p><p><strong>（5）Module</strong>：使用于将<code>store</code>切割成不同模块，每个模块都拥有自己的<code>state、getter、mutation、action，</code>避免了<code>store</code>对象因为应用复杂而变得过于臃肿；</p><h2 id="_15、vue中data为很么必须是函数" tabindex="-1">15、Vue中data为很么必须是函数？ <a class="header-anchor" href="#_15、vue中data为很么必须是函数" aria-label="Permalink to &quot;15、Vue中data为很么必须是函数？&quot;">​</a></h2><p>  一个组件若被复用多次，则会创建多个实例。本质上，这些实例用的都是同一个构造函数。若data是对象的话，则属于引用类型，会影响到所有的实例，所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。</p><h2 id="_16、vue中key的作用是什么" tabindex="-1">16、Vue中Key的作用是什么？ <a class="header-anchor" href="#_16、vue中key的作用是什么" aria-label="Permalink to &quot;16、Vue中Key的作用是什么？&quot;">​</a></h2><p>  key 的作用主要是为了高效的更新虚拟 DOM 。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。</p><h2 id="_17、在使用vue种常遇到那些棘手的问题" tabindex="-1">17、在使用Vue种常遇到那些棘手的问题？ <a class="header-anchor" href="#_17、在使用vue种常遇到那些棘手的问题" aria-label="Permalink to &quot;17、在使用Vue种常遇到那些棘手的问题？&quot;">​</a></h2><ul><li>组件状态管理问题：在复杂的应用中，组件之间共享状态可能会导致混乱，可使用 Vuex 这样的状态管理模式和库，它集中管理应用的所有组件的状态，并以一种可预测的方式改变状态。</li><li>路由传参的功能问题：之前一直使用路由传参，但是当本页面刷新的时候，页面上是没有参数的，因为参数是从上个页面传入进来的。 解决办法：使用了缓存，和vuex状态管理。但是由于项目并不是很大型的项目，所以使用最多的是缓存。</li><li>组件之间的通信问题：组件间通信可能会变得复杂，尤其是在非父子组件之间。对于简单的父子组件通信，使用 props 和事件。对于非父子组件，可以使用事件总线或 Vuex 进行通信。</li></ul>`,55)]))}const u=a(n,[["render",o]]);export{k as __pageData,u as default};
