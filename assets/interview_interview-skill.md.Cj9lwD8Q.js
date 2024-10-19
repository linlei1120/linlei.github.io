import{_ as a,c as i,a2 as t,o as n}from"./chunks/framework.Cy5ZJKdt.js";const g=JSON.parse('{"title":"综合知识汇总","description":"","frontmatter":{},"headers":[],"relativePath":"interview/interview-skill.md","filePath":"interview/interview-skill.md"}'),r={name:"interview/interview-skill.md"};function e(l,s,h,o,p,k){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="综合知识汇总" tabindex="-1">综合知识汇总 <a class="header-anchor" href="#综合知识汇总" aria-label="Permalink to &quot;综合知识汇总&quot;">​</a></h1><p>综合知识涉及范围较广，方向较多，包括：计算机网络类知识、信息通信类知识、算法类知识、软件工程化知识等等。</p><h2 id="_1、对于mvc的理解" tabindex="-1">1、对于MVC的理解 <a class="header-anchor" href="#_1、对于mvc的理解" aria-label="Permalink to &quot;1、对于MVC的理解&quot;">​</a></h2><p>   MVC模型表示Model-VIew-Controller（模型-视图-控制器）模式，常用于应用程序分层开发；Model（模型）代表一个存储数据的对象或JavaPoJo，它能携带逻辑在数据变化时更新控制器；View（视图）代表模型包含的数据可视化；Controller控制器作用于模型和视图之上，用于控制数据流向模型对象，并在数据变化时更新视图，使视图和模型分离开，从而解决业务逻辑、数据和界面显示的耦合问题，让开发和维护更加清晰和简单。</p><h2 id="_2、对于mvvm的理解" tabindex="-1">2、对于MVVM的理解 <a class="header-anchor" href="#_2、对于mvvm的理解" aria-label="Permalink to &quot;2、对于MVVM的理解&quot;">​</a></h2><p>   MVVM是Model-View-ViewModel的缩写，是一种软件架构设计模式，Model代表数据模型、View代表视图、ViewModel即代表连接数据和视图的桥梁，视图处理用户的操作并更新模型，‌同时也从模型中获取数据以更新视图；其主要优势在于该模式的解耦性、可测试性和可维护性；其特点包括：双向数据绑定、事件驱动、命令绑定。</p><h2 id="_3、从输入url到页面呈现-其过程发生了什么" tabindex="-1">3、从输入URL到页面呈现，其过程发生了什么 <a class="header-anchor" href="#_3、从输入url到页面呈现-其过程发生了什么" aria-label="Permalink to &quot;3、从输入URL到页面呈现，其过程发生了什么&quot;">​</a></h2><p><strong>（1）DNS解析</strong>：将域名发送到DNS中解析出对应的IP地址<br><strong>（2）TCP连接</strong>：获取IP地址后，三次握手建立TCP连接<br><strong>（3）浏览器向服务器发送请求</strong>：浏览器对请求包装成请求报文，完整的HTTP请求包含请求起始行、请求头部、请求主体三部分<br><strong>（4）浏览器接收服务器的响应</strong>：服务器在接收到浏览器发送的HTTP请求之后，会将收到的HTTP报文封装成HTTP的Request对象，并通过不同的web服务器进行处理，处理完的结果以HTTP的Response对象返回，主要包含状态码，响应头，响应报文三个部分<br><strong>（5）浏览器进行语法解析并渲染页面</strong>：有浏览器通过解析HTML生成DOM树，解析CSS生成CSS规则树，合并DOM树和CSS规则树，生成render树；布局并绘制render树并发送给GPU完成渲染<br><strong>（6）关闭TCP连接</strong>：有效降低沟通成本、前后端解耦更加彻底、业务上更加灵活<br><strong>总结：DNS寻址→建立连接→发送请求→处理并回传→接受并渲染→释放连接</strong></p><h2 id="_4、概述一下浏览器的渲染原理" tabindex="-1">4、概述一下浏览器的渲染原理 <a class="header-anchor" href="#_4、概述一下浏览器的渲染原理" aria-label="Permalink to &quot;4、概述一下浏览器的渲染原理&quot;">​</a></h2><p>  浏览器的核心包括：1个浏览器主进程，1个GPU进程，1个网络进程，多个渲染进程和多个插件进程；浏览器进程：主要负责界面显示、用户交互、子进程管理、同时提供存储等功能；渲染进程：核心任务将HTML、CSS和JavaScript转化为用户可以交互的网页，排版引擎Blink和JavaScript引擎V8都是运行在该线程；GPU进程：执行图形渲染和相关计算任务的过程。‌‌<br>   浏览器的渲染原理包括：首先解析收到的文档，根据文档定义构建一棵 DOM 树，DOM 树是由 DOM 元素及属性节点组成的；然后对 CSS 进行解析，生成 CSSOM 规则树；再创建布局树，计算元素的布局信息，对布局树进行分层生成分层树，对每个图层生成绘制列表，并将其提交到合成线程；合成线程将图层分成图块，并在栅格化线程池中将图块转换成位图，合成线程发送绘制图块命令DrawQuad给浏览器进程，浏览器进程根据DrawQuad生成页面，显示在显示器上；<br><strong>总结：解析html生成DOM树→解析css生成CSSOM规则树→合并DOM树和CSSOM规则树生成render渲染树(注意渲染树只会包含需要显示的结点及其样式信息)→根据render渲染树布局和绘制</strong></p><h2 id="_5、概述一下tcp三次握手的过程" tabindex="-1">5、概述一下TCP三次握手的过程 <a class="header-anchor" href="#_5、概述一下tcp三次握手的过程" aria-label="Permalink to &quot;5、概述一下TCP三次握手的过程&quot;">​</a></h2><p><strong>在握手之前，主动打开连接的客户端结束 CLOSE 阶段，被动打开的服务器也结束 CLOSE 阶段，并进入 LISTEN 阶段。随后进入三次握手阶段：</strong><br><strong>（1）第一次握手</strong>：首先客户端向服务器发送一个 SYN 包，并等待服务器确认，其中：标志位为 SYN，表示请求建立连接；序号为 Seq = x（随机生成一个序列号）；随后客户端进入 SYN-SENT 阶段；<br><strong>（2）第二次握手</strong>：服务器接收到客户端发来的 SYN 包后，对该包进行确认后结束 LISTEN 阶段，并返回一段 TCP 报文，其中：标志位为 SYN 和 ACK，表示确认客户端的报文 Seq 序号有效，服务器能正常接收客户端发送的数据，并同意创建新连接；序号为 Seq = y；确认号为 Ack = x + 1，表示收到客户端的序号 Seq 并将其值加 1 作为自己确认号 Ack 的值，随后服务器端进入 SYN-RECV 阶段。<br><strong>（3）第三次握手</strong>：客户端接收到发送的 SYN + ACK 包后，明确了从客户端到服务器的数据传输是正常的，从而结束 SYN-SENT 阶段。并返回最后一段报文。其中：标志位为 ACK，表示确认收到服务器端同意连接的信号；序号为 Seq = x + 1，表示收到服务器端的确认号 Ack，并将其值作为自己的序号值；确认号为 Ack= y + 1，表示收到服务器端序号 seq，并将其值加 1 作为自己的确认号 Ack 的值。随后客户端进入 ESTABLISHED。<br>   <strong>总结：</strong>   简单来说，三次握手过程就是第一次客户端发送一个SYN包请求连接，服务端接收到请求后返回SYN+ACK包到客户端，客户端接收后又返回ACK包到服务端确认，至此连接建立；</p><p>  四次挥手过程在客户端和服务端都可以发起，以客户端为例，第一次挥手客户端向服务端发送一个FIN包请求关闭连接，然后进入终止等待1状态，第二次挥手，服务端接收后返回ACK包到客户端，服务端表示进入关闭等待状态，客户端进入终止等待2状态，该过程中依旧可以传输数据，第三次握手则是待数据发送完毕后服务端会再次发送FIN包到客户端进行最后确认，客户端接受后发送ACK包关闭连接则是第四次握手；</p><h2 id="_6、什么是闭包" tabindex="-1">6、什么是闭包 <a class="header-anchor" href="#_6、什么是闭包" aria-label="Permalink to &quot;6、什么是闭包&quot;">​</a></h2><p><strong>(1)定义</strong>：闭包也就是定义在一个函数内部的函数，既能够读取其他函数内部变量的函数，在本质上，闭包是将函数内部和函数外部连接起来的桥梁；<br><strong>(2)特点</strong>：①函数嵌套函数；②内部函数可以访问外部函数的变量；③参数和变量不会被回收；<br><strong>(3)缺点</strong>：常驻内存，会增大内存开销，使用不当很容易造成内存泄露。<br><strong>(4)应用场景</strong>：</p><ul><li>① 通过闭包，我们可以创建私有变量和方法，避免全局命名冲突和变量污染，适用于模块化开发；</li><li>② 实现迭代器功能，帮助我们遍历集合或序列，并对其中的元素进行操作；</li><li>③ 闭包也可以实现递归算法，可以保存递归中的状态和结果，并确保在每次递归调用时使用正确的值。</li><li>④ 闭包还可以实现私有方法，对于面向对象编程来说，私有方法是一种封装数据和行为的重要方式，可以防止外部直接访问和修改内部状态。</li></ul><h2 id="_7、tcp、udp以及http的特点区别" tabindex="-1">7、TCP、UDP以及HTTP的特点区别？ <a class="header-anchor" href="#_7、tcp、udp以及http的特点区别" aria-label="Permalink to &quot;7、TCP、UDP以及HTTP的特点区别？&quot;">​</a></h2><p><strong>( 1 ) TCP：</strong> 即传输控制协议，提供了一种可靠的、面向连接的、全双工的数据传输服务；TCP通过三次握手建立连接，确保数据按顺序到达，并提供错误检查和重传机制，确保数据的完整性和准确性。<br><strong>( 2 ) UDP：</strong> 即用户数据报协议，是一种不可靠的、无连接的协议，但是传输效率高；适用于对实时性要求较高，但对数据传输的可靠性要求不高的场景，如网络电话、网络视频会议等；<br><strong>( 3 ) HTTP：</strong> 即超文本传输协议，是一种应用层协议，HTTP本身是基于TCP的，利用TCP的可靠传输特性确保数据的正确传输。</p><h2 id="_8、http的状态码有哪些" tabindex="-1">8、HTTP的状态码有哪些 <a class="header-anchor" href="#_8、http的状态码有哪些" aria-label="Permalink to &quot;8、HTTP的状态码有哪些&quot;">​</a></h2><p><strong>( 1 ) 1XX：请求正在处理</strong></p><ul><li>100：请求者应当继续提出请求</li><li>101：请求者已要求服务器切换协议，服务器已确认并准备切换；</li></ul><p><strong>( 2 ) 2XX：请求成功</strong></p><ul><li>200：请求成功</li><li>201：请求成功并且服务器创建了新资源</li><li>202：服务器已接受请求，但尚未处理</li><li>204：服务器已正常处理请求，但是无内容返回</li><li>206：表示客户端进行部分GET请求；</li></ul><p><strong>( 3 ) 3XX：请求重定向类</strong></p><ul><li>300：多种选择：针对请求，服务器可以进行多种操作</li><li>301：永久移动：请求的网页已经永久移动到了新位置</li><li>302：临时移动：服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置进行后续请求</li><li>303：查看其他位置：请求者应当对不同的位置使用单独的 GET 请求来检索响 应时，服务器返回此代码</li><li>304：未修改：自从上次请求后，请求的网页未修改过；</li></ul><p><strong>( 4 ) 4XX：客户端错误</strong></p><ul><li>400：错误请求：服务器不理解请求的语法</li><li>401：未授权：请求缺失身份认证</li><li>403：禁止请求：服务端拒绝请求</li><li>404：未找到：服务端找不到请求的地址</li><li>405：方法禁用：服务端禁止请求中的指定方法</li><li>406：无法使用请求的内容特性响应请求的网页</li><li>407：需要代理授权</li><li>408：请求超时：服务器等候请求时发生超时</li><li>409：服务器在完成请求时发生冲突</li><li>410：请求资源删除：如果请求的资源已永久删除，服务器就会返回此响应</li><li>411：服务器不接受不含有效内容长度标头字段的请求</li><li>412：前提条件失败，未满足请求中设置的其中一个前提条件</li><li>413：请求的URI过长；</li></ul><p><strong>( 3 ) 5XX：服务端错误</strong></p><ul><li>500：服务器内部错误，无法完成请求</li><li>501：未实施，服务器无法完成请求的功能</li><li>502：错误网关</li><li>503：无法使用，服务器目前无法使用可能是停机或维护</li><li>504：网关超时</li><li>505：协议版本不支持</li></ul><h2 id="_9、常见的http组成有哪些" tabindex="-1">9、常见的HTTP组成有哪些 <a class="header-anchor" href="#_9、常见的http组成有哪些" aria-label="Permalink to &quot;9、常见的HTTP组成有哪些&quot;">​</a></h2><p><strong>(1)请求行：</strong> 由请求方法字段、URL字段和HTTP协议版本字段组成，以空格符号分隔。<br><strong>(2)请求头：</strong> 包含了客户端向服务端传递的关键信息，如请求类型、客户端类型、可接受的媒体类型等，这些信息以键值对的形式出现。<br><strong>(3)请求体：</strong> 包含了客户端向服务端发送的数据信息。</p><h2 id="_10、http和https的区别" tabindex="-1">10、HTTP和HTTPS的区别 <a class="header-anchor" href="#_10、http和https的区别" aria-label="Permalink to &quot;10、HTTP和HTTPS的区别&quot;">​</a></h2><p>  HTTP即超文本传输协议，是一种互联网应用最广泛的网络协议，但是协议本身存在安全隐患，因为它是以明文传输，无法对数据进行加密和身份进行验证，容易受到中间人攻击；HTTPS即安全的超文本传输协议，是在HTTP的基础上，通过传输加密和身份认证保证了传输过程的安全性，HTTPS协议使用SSL/TLS协议进行加密通信，可以对数据进行加密以及防止中间人切图和篡改数据，并且使用数字证书对双方通信进行身份验证，从而确保通信安全性。</p><h2 id="_11、https如何保护网站防止中间人攻击" tabindex="-1">11、HTTPS如何保护网站防止中间人攻击 <a class="header-anchor" href="#_11、https如何保护网站防止中间人攻击" aria-label="Permalink to &quot;11、HTTPS如何保护网站防止中间人攻击&quot;">​</a></h2><p><strong>(1)数据加密：</strong> 将使用SLL/TLS协议加密传输的数据，只有用于相应密钥才能解密成明文，使得攻击者无法截获和解析传输的数据，有效防止中间人攻击。<br><strong>(2)身份验证：</strong> HTTPS协议使用数字证书对通信双方进行身份验证。数字证书是由权威的证书颁发机构（CA）颁发的，包含了服务器的公钥和相关信息。当浏览器访问HTTPS网站时，会验证网站数字证书的有效性，确保与服务器建立的是安全的通信连接。如果数字证书无效或被篡改，浏览器会发出警告并阻止用户继续访问该网站。这有效地防止了攻击者伪造服务器身份进行中间人攻击。<br><strong>(3)完整性保护：</strong> HTTPS协议使用数字签名技术对传输的数据进行完整性保护。在数据传输过程中，发送方会对数据进行哈希运算并生成一个摘要值，然后使用私钥对摘要值进行加密生成数字签名。接收方在收到数据后，会使用公钥对数字签名进行解密并验证摘要值是否与原始数据一致。如果摘要值不一致，说明数据在传输过程中被篡改，浏览器会发出警告并阻止用户继续使用该数据。</p><h2 id="_12、概况一下restful-api" tabindex="-1">12、概况一下RestFul API <a class="header-anchor" href="#_12、概况一下restful-api" aria-label="Permalink to &quot;12、概况一下RestFul API&quot;">​</a></h2><p><strong>(1)定义：</strong> RestFulAPI一种设计风格/规范，它将一组数据视为资源，利用HTTP请求方式，描述对资源的操作(增删改查)，通过HTTP响应状态码，描述对资源的操作结果；<br><strong>(2)设计规范：</strong><br> ① Method统一：GET获取资源、POST新建资源、PUT更新资源(客户端提 供资源)、PATCH更新资源(客户端提供属性)、DELETE删除资源<br> ② URL命名规范：只能使用名词，不能使用动词，如：/api/getUser -&gt; /api/user<br> ③ Response规范：保持统一的响应数据结构。<br><strong>(3)优点：</strong> 有效降低沟通成本、前后端解耦更加彻底、业务上更加灵活。</p><h2 id="_13、什么是同源策略" tabindex="-1">13、什么是同源策略？ <a class="header-anchor" href="#_13、什么是同源策略" aria-label="Permalink to &quot;13、什么是同源策略？&quot;">​</a></h2><p><strong>(1)定义：</strong> 同源策略是一种浏览器安全机制，“同源”指的是地址、协议、端口号都是相同的来源，用于限制一个网页脚本与不同源的资源进行交互；<br><strong>(2)主要限制：</strong><br> ① Cookies、LocalStorage等浏览器存储中的数据只能被同源网页访问；<br> ② API接口网络请求只能向同源地址发送，不能向其他源发送，以防止跨域攻击；<br> ③ DOM操作也收到同源策略的限制；</p><h2 id="_14、什么是xss和crsf攻击-如何防御" tabindex="-1">14、什么是XSS和CRSF攻击？如何防御？ <a class="header-anchor" href="#_14、什么是xss和crsf攻击-如何防御" aria-label="Permalink to &quot;14、什么是XSS和CRSF攻击？如何防御？&quot;">​</a></h2><p><strong>(1) XXS：</strong><br><strong>① 定义</strong>：即跨站脚本攻击，是一种常见的网络安全漏洞，它允许攻击者在受害者的浏览器上执行恶意脚本，攻击者通过注入恶意脚本来利用用户对网站的信任，从而在其浏览器上执行恶意操作；<br><strong>② 类型</strong>：持久性XSS攻击（将恶意脚本存储在服务器上返回给用户，常见域用户留言、评论等地方）；反射型XSS攻击（将恶意脚本注入到URL中，通过用户点击恶意链接实行攻击）；DOMXSS攻击（基于文档对象模型DOM的攻击，通过修改页面的DOM结构注入恶意脚本，页面解释执行DOM时导致攻击）<br><strong>③ 预防</strong>：同输入验证和过滤；对输出进行编码；不直接将用户输入作为页面输出；使用安全框架和库（Vue\\React等）；设置CSP（一种浏览器中的安全策略，限制允许加载和执行的资源，简述注入恶意脚本可能性）；避免使用内联脚本和样式、定期更新依赖库；<br><strong>(1)CRSF：</strong><br><strong>① 定义</strong>：即跨站请求伪造，是一种常见的网络安全漏洞，它利用用户已经认证过的会话信息来伪造用户请求，从而在用户不知情的情况下执行恶意操作，如更改账户设置、发布内容等；<br><strong>② 攻击场景</strong>：持用户已登录认证；攻击者构建恶意页面；受害者访问恶意页面；受害者的会话信息被利用；<br><strong>③ 预防</strong>：使用CSRF Token（每次请求会生成一个CSRF Token存储在会话中或Cookies中，服务器接受请求时会验证请求中的Token是否与用户会话中的Token匹配，从而确保请求合法性）；使用SameSite Cookies属性（将敏感操作所需的会话Cookie设置成SameSite=Strict或SameSite=Lax，可以限制Cookies跨站发送，减少风险）；添加自定义请求头；要用户再次认证敏感操作；限制跨域请求（使用CORS策略来限制跨域请求）；禁止自动登录；</p><h2 id="_15、什么是跨域-其原理是什么" tabindex="-1">15、什么是跨域？其原理是什么？ <a class="header-anchor" href="#_15、什么是跨域-其原理是什么" aria-label="Permalink to &quot;15、什么是跨域？其原理是什么？&quot;">​</a></h2><p>  跨域指浏览器从一个域名请求另一个域名的资源，其原理是由于浏览器的同源策略导致不同来源的域名资源无法相互访问；</p><h2 id="_16、如何解决跨域问题" tabindex="-1">16、如何解决跨域问题？ <a class="header-anchor" href="#_16、如何解决跨域问题" aria-label="Permalink to &quot;16、如何解决跨域问题？&quot;">​</a></h2><p><strong>(1) 前端处理</strong>：iframe、jsonp、postMessage、webSocket协议<br><strong>(2) 服务端处理</strong>：跨域资源共享、Nginx代理、NodeJS中间件代理</p><h2 id="_17、什么是认证和授权-认证和授权的方式有哪些" tabindex="-1">17、什么是认证和授权？认证和授权的方式有哪些？ <a class="header-anchor" href="#_17、什么是认证和授权-认证和授权的方式有哪些" aria-label="Permalink to &quot;17、什么是认证和授权？认证和授权的方式有哪些？&quot;">​</a></h2><p><strong>(1) 认证：</strong><br>   <strong>① 定义</strong>：根据凭据证明访问者身份的过程，认证的过程涉及加密和解密的交换；<br>   <strong>② 方式</strong>：用户名/密码认证、JWT令牌认证、生物认证、摘要算法认证和基于PKI的认证；</p><p><strong>(2) 授权：</strong><br><strong>① 定义</strong>：指向经过身份认证的访问者授予执行某项操作的权限；<br><strong>② 方式</strong>：OAuth2.0；</p><h2 id="_18、概括一下什么是哈希函数" tabindex="-1">18、概括一下什么是哈希函数？ <a class="header-anchor" href="#_18、概括一下什么是哈希函数" aria-label="Permalink to &quot;18、概括一下什么是哈希函数？&quot;">​</a></h2><p>  Hash哈希函数也称为单向散列函数，其作用是输入一段长度不固定的字符串，返回一串长度固定的字符串，称为哈希值，因为其唯一性、单向不可逆（非加密，加密可逆），可以用于处理验证身份和数字签名等不可抵赖性的问题。<br>   由于哈希函数不同的输入可能会有相同输出的情况发生，因此会出现冲突/碰撞的情况，解决这一情况可以使用<code>封闭寻址法</code>即<code>链表法</code>，但是容易发生集群现象影响查找性能；也可以使用<code>开放寻址法</code>中的<code>限制线性探测方法</code>；</p><h2 id="_19、什么是原型链" tabindex="-1">19、什么是原型链？ <a class="header-anchor" href="#_19、什么是原型链" aria-label="Permalink to &quot;19、什么是原型链？&quot;">​</a></h2><p><strong>(1) 原型(Prototype)</strong>：每个函数都有prototype属性，称为原型因为这个属性的值是一个对象，也称为原型对象，原型中定义了一些可共享的属性和方法，并且原型对象还可以实现继承；</p><p><strong>(2) 原型链(Prototype Chain)</strong>：访问一个对象的属性时，JavaScript引擎会首先在该对象本身上查找该属性。如果找不到，它会在对象的原型上查找，如果原型上也没有，则会在原型的原型上查找，依此类推，直到找到属性或者到达原型链的终点，若顶层也没有则返回null，这一过程所访问的路径就称为原型链，实例化后的每个对象中存在_proto_指向了prototype原型对象；</p><h2 id="_20、介绍一下函数柯里化及其应用" tabindex="-1">20、介绍一下函数柯里化及其应用？ <a class="header-anchor" href="#_20、介绍一下函数柯里化及其应用" aria-label="Permalink to &quot;20、介绍一下函数柯里化及其应用？&quot;">​</a></h2><p>  属于函数化编程的一个内容，主要用于将一个接收多个参数的函数转换成一个接受单一参数的函数，并且返回一个新的函数来处理剩余的参数；应用场景包括：参数复用、动态创建函数、延迟计算等；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//正常函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输出3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输出4</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//柯里化函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> curry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> curry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输出3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//输出4</span></span></code></pre></div><h2 id="_21、概述一下什么是微前端" tabindex="-1">21、概述一下什么是微前端？ <a class="header-anchor" href="#_21、概述一下什么是微前端" aria-label="Permalink to &quot;21、概述一下什么是微前端？&quot;">​</a></h2><p>‌  ‌微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。‌ 微前端借鉴了‌微服务的架构理念，将一个庞大的前端应用拆分为多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用联合为一个完整的应用。‌ 常见的微前端框架有single-spa、qiankun、wujie、micro app等等；<br> ‌  主要解决问题：<br> ‌  ① 随着项目迭代应用越来越庞大，难以维护。<br> ‌  ② 跨团队或跨部门协作开发项目导致效率低下的问题。 <a href="https://single-spa.js.org/" target="_blank" rel="noreferrer">single-spa官网文档地址</a><br><a href="https://qiankun.umijs.org/zh/" target="_blank" rel="noreferrer">qiankun官网文档地址</a><br><a href="https://micro-zoe.github.io/micro-app/" target="_blank" rel="noreferrer">micro-app官网文档地址</a></p><h2 id="_22、概述一下什么是低代码平台" tabindex="-1">22、概述一下什么是低代码平台？ <a class="header-anchor" href="#_22、概述一下什么是低代码平台" aria-label="Permalink to &quot;22、概述一下什么是低代码平台？&quot;">​</a></h2><p>‌  ‌低代码平台是一种通过可视化和参数化配置的方式，快速构建应用程序的开发工具。‌ 它允许开发人员使用拖拽组件和模型驱动的逻辑来创建网页和移动应用程序，无需或仅需少量编码。如APICloud、Hybrid Start等</p><h2 id="_23、spa首屏加载优化如何处理" tabindex="-1">23、SPA首屏加载优化如何处理 <a class="header-anchor" href="#_23、spa首屏加载优化如何处理" aria-label="Permalink to &quot;23、SPA首屏加载优化如何处理&quot;">​</a></h2><p>‌  <strong>首屏加载</strong>（首屏渲染）是指在用户第一次访问网页时，浏览器加载并显示的页面内容。常见的几种SPA首屏优化方式：① 减小入口文件体积、② 本地缓存静态资源、③ UI框架按需加载、④ 图片资源压缩等；</p><h2 id="_24、概述一下浏览器中http的缓存机制" tabindex="-1">24、概述一下浏览器中HTTP的缓存机制 <a class="header-anchor" href="#_24、概述一下浏览器中http的缓存机制" aria-label="Permalink to &quot;24、概述一下浏览器中HTTP的缓存机制&quot;">​</a></h2><p>‌  首先开发人员将浏览器的缓存机制分为了强缓存和弱缓存，也称为本地缓存和协商缓存。本地缓存是在浏览器本地进行有效时间设置的缓存方式；协商缓存则是浏览器通过携带有效事件与服务端协商是否使用缓存，由服务器告知结果；</p><p>‌  本质上浏览器的缓存机制是业务端根据不同的响应报文来实现对应的缓存动作，主要有4中缓存字段：</p><p><strong>cache-control</strong>：指定缓存有效时间，有效时间内再次请求不会访问服务器，而是读取浏览器缓存；</p><p><strong>expires</strong>：指定缓存过期时间，在过期时间之前请求不会访问浏览器，而是读取浏览器缓存</p><p><strong>ETag/If-None-Match</strong>：首次请求服务端会将结果签名缓存在服务端并设置在响应头<code>ETag</code>中,业务层需要缓存<code>ETag</code>并在下次浏览器请求时将<code>ETag</code>带在<code>If-None-Match</code>中，服务端再次接收到判断两者是否相等，若相等证明没有变化，返回状态码304，业务端判断读取缓存数据；</p><p><strong>Last-Modified-Since/If-Modified-Since</strong>：两者需要搭配使用，首次请求业务的将<code>Last-Modified-Since</code>传给服务端，服务端接受后将其及结果缓存，再次请求时业务的带上<code>If-Modified-Since</code>，服务端接收后判断两者是否相等，相等则返回状态码304，浏览器判断读取缓存数据；</p><h2 id="_25、对于nginx的了解" tabindex="-1">25、对于Nginx的了解 <a class="header-anchor" href="#_25、对于nginx的了解" aria-label="Permalink to &quot;25、对于Nginx的了解&quot;">​</a></h2><p>‌  Nginx是一款 轻量级 的 HTTP服务器、反向代理服务器，由于它的内存占用少，启动极快，高并发能力强，在互联网项目中广泛应用。事实上Nginx的并发能力确实在同类型的网页服务器中表现较好；Nginx的四种常用功能：<code>正向代理</code>、<code>反向代理</code>、<code>负载均衡</code>、<code>HTTP服务器</code>；</p><h2 id="_26、什么是负载均衡" tabindex="-1">26、什么是负载均衡 <a class="header-anchor" href="#_26、什么是负载均衡" aria-label="Permalink to &quot;26、什么是负载均衡&quot;">​</a></h2><p>‌  负载均衡（Load balancing）是一种将工作负载（例如网络流量、数据请求、计算任务等）分配到多个计算资源（例如服务器、虚拟机、容器等）的技术，以便优化性能、提高可靠性和增加可扩展性。负载均衡可以通过多种方式实现，例如基于轮询、基于最少连接数、基于IP散列等算法来分配请求。负载均衡也可以采用硬件设备或软件实现，或者是结合两者的混合解决方案。负载均衡器可以防止任何一个资源过载或失效而导致应用程序的性能下降或停止响应。</p><p>‌  常用的负载均衡方式有：<code>DNS负载均衡</code>、<code>CDN负载均衡</code>、<code>防火墙负载均衡</code>、<code>虚拟IP负载均衡</code>等；</p><h2 id="_27、发布订阅模式的理解" tabindex="-1">27、发布订阅模式的理解 <a class="header-anchor" href="#_27、发布订阅模式的理解" aria-label="Permalink to &quot;27、发布订阅模式的理解&quot;">​</a></h2><p>‌  发布-订阅模式是软件设计模式”观察者模式”的一种别称，或者说是“订阅-发布模式”，订阅者和订阅目标是联系在一起的，当订阅目标发生改变时，逐个通知订阅者。发布订阅模式相比观察者模式多了个事件通道，事件通道作为调度中心，管理事件的订阅和发布工作，彻底隔绝了订阅者和发布者的依赖关系。即订阅者在订阅事件的时候，只关注事件本身，而不关心谁会发布这个事件；发布者在发布事件的时候，只关注事件本身，而不关心谁订阅了这个事件。</p><h2 id="_28、简述数字签名的过程" tabindex="-1">28、简述数字签名的过程 <a class="header-anchor" href="#_28、简述数字签名的过程" aria-label="Permalink to &quot;28、简述数字签名的过程&quot;">​</a></h2><p>‌  发送者利用Hash函数生成信息摘要并使用私钥对其加密，然后将信息本身以及加密后的信息摘要发送出去；接收者使用相同的Hash函数对该信息生成新的信息摘要，在使用发送者公钥对其进行验证，以确保信息完整；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hash函数 → 信息摘要 → 私钥加密 → 接收者 → 相同Hash函数生成新信息摘要 → 发送者公钥验证解密</span></span></code></pre></div><h2 id="_29、数字加密过程" tabindex="-1">29、数字加密过程 <a class="header-anchor" href="#_29、数字加密过程" aria-label="Permalink to &quot;29、数字加密过程&quot;">​</a></h2><p>‌  发送者生成对称密钥，选择加密算法以及密钥对信息进行加密生成密文，利用接收者的公钥加密对称密钥可以生成数字信封，然后发送；接收者使用自己的私钥解密数字信封中的对称密钥，再利用对称密钥解密密文即可；</p><h2 id="_30、进程与线程的关系" tabindex="-1">30、进程与线程的关系? <a class="header-anchor" href="#_30、进程与线程的关系" aria-label="Permalink to &quot;30、进程与线程的关系?&quot;">​</a></h2><p>‌  进程 (Process) 和 线 程 (Thread) 是操作系统中的两个并发执行的概念。 一个进程可以看作是一个程序的执行实例，它拥有独立的内存空间、文件句柄和其他系统资源。每个进程都是独立运行的，它们之间相互隔离，互不干扰。进程是操作系统进行资源分配和调度的基本单位。而线程是进程内部的一个执行单元， 一个进程可以包含多个线程。线程共享进程的资源，如内存、文件句柄等。线程之间可以并发执行，每个线程有自己的程序计数器、栈和局部变量。线程之间的切换开销较小，可以更高效地利用系统资源。 ‌  进程和线程之间的关系是一对多的关系， 一个进程可以包含多个线程，而一个线程只能属于一个进程。进程提供了线程之间的资源隔离和保护，同时也提供了线程之间的通信和同步机制，使得多个线程可以协同工作完成任务。</p>`,83)]))}const c=a(r,[["render",e]]);export{g as __pageData,c as default};
