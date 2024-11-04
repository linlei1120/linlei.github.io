---
outline: deep
---

# 高德地图 JS API开发手册

&emsp;&emsp; 地图 JS API 2.0 是高德开放平台免费提供的第四代 Web 地图渲染引擎， 以 WebGL 为主要绘图手段。其新特性包括：多边形吸附、MultiPolygon、LabelMarker与主图标注避让、轨迹动画、高性能矢量标注等；

## 入门
### 1、JS API引入
    
&emsp;&emsp; **（1）同步加载：** 使用JSAPILoader进行加载、以`<script>`标签的方式进行加载；注意：只允许在线加载JSAPI。
```js
//方式一：使用script引入
<script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值"></script>
<script type="text/javascript">
    var map = new AMap.Map('container', {
       center:[117.000923,36.675807],
       zoom:11
    });
</script>
// 方式二：使用Loader使用
```  
&emsp;&emsp; **（2）异步加载：** 先准备一个全局的回调函数作为JSAPI异步的回调函数，并将函数名作为callback参数添加在的引用地址，需要注意回调函数应该在脚本请求发出之前进行声明。异步方式只有在回调之后才调用引入接口；
```js
// 方式一
    <script type="text/javascript">
        window.init = function(){
            var map = new AMap.Map('container', {
            center:[117.000923,36.675807],
            zoom:11
            });
        }
    </script>
    <script src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&callback=init"></script>
// 方式二
  window.onLoad  = function(){
        var map = new AMap.Map('container');
  }
  var url = 'https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&callback=onLoad';
  var jsapi = doc.createElement('script');
  jsapi.charset = 'utf-8';
  jsapi.src = url;
  document.head.appendChild(jsapi)
```
### 2、AMap实例声明及配置项
&emsp;&emsp; **（1）zoom：**    
&emsp;&emsp; **（2）center：**    
&emsp;&emsp; **（3）viewModel：**   
&emsp;&emsp; **（4）resizeEnable：**  
&emsp;&emsp; **（5）position：**  
&emsp;&emsp; **（6）path：**  
&emsp;&emsp; **（7）path：**  

### 3、插件使用
&emsp;&emsp; **（1）插件分类：**  
- 服务类：POI搜索、输入提示、路线规划、公交路线、公交站点、天气查询
- 地图空间：缩放工具条、比例尺、定位按钮、自定义绘制图层(CustomLayer)、灵活标记(ElasticMarker)
- 矢量图形编辑工具：折线/多边形编辑器、圆形编辑器
- 工具类：工具条(ToolBar)、鼠标绘制工具、测距工具

&emsp;&emsp; **（2）插件使用：**   
- 引入插件  
- 创建插件实列    
- 调用实例的方法  
```js
    //异步同时加载多个插件
    AMap.plugin(['AMap.ToolBar','AMap.Driving'],function(){
      var toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
      var driving = new AMap.Driving();//驾车路线规划
      driving.search(/*参数*/)
  });
    // 同步加载多个插件：需要现在script连接中加入需要引入的插件类型，在进行引入
    <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值&plugin=AMap.ToolBar,AMap.Driving"></script> 
        var toolbar = new AMap.ToolBar();
        map.plugin(toolbar);
        var driving = new AMap.Driving();
        driving.search(/*参数*/)
```
### 4、地图组成和名词解释
**使用高德地图JS API创建的地图通常由以下几个部分组成**：  
&emsp;&emsp; **（1）地图容器Container**:作为创建阶段承载所有图层、点标记的容器；  
&emsp;&emsp; **（2）图层Layers**:在视觉上覆盖一定地图范围，用来描述地图要素的抽象概念，通常是柴鱼整个地图容器最下方的图层，常见的图层包括：卫星图层、路网图层、路况图层、自定义图层等等；  
&emsp;&emsp; **（3）矢量图形Vector Overlays**:    矢量图形，一般覆盖于底图图层之上，通过矢量的方式(路径或者实际大小)来描述其形状，用几何的方式来展示真实的地图要素，会随着地图缩放而发生视觉大小的变化，但其代表的实际路径或范围不变。  
&emsp;&emsp; **（4）点标记 Markers**:点标记是用来标示某个位置点信息的一种地图要素，覆盖于图层之上，包括：比如圆点标记 (CircleMarker) 、文本标记 (Text)、灵活点标记 (ElasticMarker) 。同时我们提供了海量点（MassMarks）、点聚合（MarkerCluster）等；   
&emsp;&emsp; **（5）地图控件 Map Controls**:控件浮在所有图层和地图要素之上，用于满足一定的交互或提示功能；   
 **常用名词**:插件(Plugins)、地图级别(ZoomLevel)、经纬度(LngLat)、底层(BaseLayer)、地图要素(Map Features)、标注(Labels)、地图平面像素坐标(Plane Coordinates)、投影(Projection)、三维空间坐标(3D Coordinates)；

 ### 5、基础类型
 **JS API常用5种常用基础类型包括：**
 - 经纬度类：AMap.LngLat
 - 像素点类：AMap.Pixel
 - 像素尺寸类：AMap.Size
 - 经纬度矩形边界类：AMap.Bounds
 - 经纬度路径边界类：AMap.ArrayBounds

 &emsp;&emsp; **（1）经纬度类 AMap.LngLat**:利用三维全面空间来描述地球上一个位置的坐标系统，每个经纬度坐标由经度lng和维度lat组成，常用来表示中心点、点标记位置、折线和多边形的路径等等，范围为精度`-180~+180`，维度`-85~+85`；  
 ```js
//  基本用法

  var position = new AMap.LngLat(116, 39);//标准写法

  var position = [116, 39]; //简写

  var map = new AMap.Map('conatiner',{
     center:position
  })

//   创建一个折线路径
    var path = [new AMap.LngLat(116,39), new AMap.LngLat(116,40), new AMap.LngLat(117,39)] // 标准写法
    var path = [[116,39], [116,40], [117,39]] 
    var polyline = new AMap.Ployline({
        path:path,
    })
    map.add(polyline)
 ```
 &emsp;&emsp; 使用经纬度还可以做一些简单的位置计算，如点到点、点到线的距离等
 ```js
    var lnglat1 = new AMap.LngLat(116, 39);
    var lnglat2 = new AMap.LngLat(117, 39);
    var distance = lnglat1.distance(lnglat2);//计算lnglat1到lnglat2之间的实际距离(m)
    var lnglat3 = lnglat1.offset(100,50)//lnglat1向东100m，向北50m的位置的经纬度
 ```
&emsp;&emsp; **（2）像素点 AMap.Pixel**:由`x`和`y`两个分量组成，常用来描述地图容器坐标、地理像素坐标、点标记和信息窗体的锚点：  
```js
  var offset  = new AMap.Pixel(-16,-30);
  var marker = new AMap.Marker({
      offset:offset,
      icon:'xxx.png',
  });
  map.add(marker);
```
&emsp;&emsp; **（3）经纬度矩形边界 AMap.Bounds**:经纬度矩形边界为一个矩形的经纬度范围，用西南角和东北角的两个经纬度来描述，这两个经纬度分别代表边界的最小值和最大值。矩形经纬度边界通常用来描述：地图的当前边界、覆盖物的外包矩形边界、图片图层的覆盖范围等。
```js
  var southWest = new AMap.LngLat(110,20);
  var northEast = new AMap.LngLat(120,30);
  var bounds = new AMap.Bounds(southWest, northEast);
  map.setBounds(bounds);

```

&emsp;&emsp; **（4）经纬度路径边界 AMap.ArrayBounds**:3D视图下，由于地图的倾斜和旋转，由于地图边界已经不在是矩形边界，我们提供了ArrayBounds来描述地图当前视口的边界范围，它使用一组经纬度路径来表述一个闭合的区域边界。ArrayBounds提供了contains方法可用来判断经纬度点是否在其内部。  
```js
  var map = new AMap.Map('container',{
      zoom:17,
      viewMode:'3D'
  })
  var arrayBounds = map.getBounds();
  var path = arrayBounds.bounds//经纬度的路径
  var isPointInBounds =  arrayBounds.contains(new AMap.LngLat(116, 39))//判断点是否在边界内
```
## 地图
### 1、地图生命周期
**地图对象的生命周期主要分为三个阶段**：创建地图对象、地图加载完成、销毁地图对象
&emsp;&emsp; **（1）创建**:创建地图对象的主要内容包括：创建地图实例、创建地图常用参数、创建多个地图等
```js
// 准备容器
<div id="container" style="width:500px; height:300px"></div>
<div id="containerTwo" style="width:500px; height:300px"></div>

// 创建地图实例及配置常用参数
var map = new AMap.Map('container',{
    zoom: 10,  //设置地图显示的缩放级别
    center: [116.397428, 39.90923],//设置地图中心点坐标
    layers: [new AMap.TileLayer.Satellite()],  //设置图层,可设置成包含一个或多个图层的数组
    mapStyle: 'amap://styles/whitesmoke',  //设置地图的显示样式
    viewMode: '2D',  //设置地图模式
    lang:'zh_cn',  //设置地图语言类型
});

// 也可以创建多个实例
var mapTwo = new AMap.Map('containerTwo');
```
&emsp;&emsp; **（2）地图加载完成**:
地图加载完成后会触发`complete`事件
```js
map.on('complete', function(){
    // 地图图块加载完成后触发
});
```

&emsp;&emsp; **（3）销毁地图对象**:
通过调用`destory`方法来销毁地图对象，该方法执行后，地图对象被注销、内存释放、地图容器被清空；
```js
// 销毁地图，并清空地图容器
map.destroy( );
```
### 2、地图状态  
&emsp;&emsp; **地图的状态包括：地图中心点、地图缩放级别等等，以下是常用的地图状态的获取及设置方法**：
| 方法     | 说明     |
| -------- | -------- |
| getZoom() | 获取房前地图缩放级别 |
| setZoom() | 设置地图显示的缩放级别 |
| getCenter() | 获取地图中心点经纬度坐标值 |
| setZoomAndCenter() | 同时设置缩放级别和中心点 |
| getBounds() | 获取地图视图范围 |
| setBounds() | 设置地图视图范围 |
| getCity(callback) | 获取地图中心点所在位置，回调函数返回对象对应省/市/区/县 |
| setCity(city:String, callback) | 按照行政区名称或adcode来设置地图显示的中心点 |
| panTo(positon:LngLat) | 地图中心点平移到指定点位置 |
| setStatus(status:Object) | 设置当前地图显示状态，包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转（rotateEnable）、是否可双击放大地图、是否可以通过键盘控制地图旋转（keyboardEnable）等。 |

### 3、地图的交互与事件
地图事件是对Map底层操作后触发的事件，通常使用`map.on(event, callback)`来绑定事件并获得回到函数，回调含糊中包括了地图当前的各种信息参数；
```js
map.on('click', function(ev) {
  // 触发事件的对象
  var target = ev.target;
  // 触发事件的地理坐标，AMap.LngLat 类型
  var lnglat = ev.lnglat;
  // 触发事件的像素坐标，AMap.Pixel 类型
  var pixel = ev.pixel;
  // 触发事件类型
  var type = ev.type;
});
```
### 4、自定义地图样式
&emsp;&emsp; **（1）使用官方地图样式**：
官方地图样式有多种选择，包括：标准样式、马卡龙样式、涂鸦样式、远山黛样式、幻影黑样式、草色青样式、极夜蓝样式等等，通过`setMapStyle`方法来进行修改；
```js
var map = new AMap.Map('container', {
    zoom:10
})
// 样式设置
map.setMapStyle('amap://styles/whitesmoke')
```

&emsp;&emsp; **（2）创建和使用自定义地图**：自定义样式的地图需要到专门的GeoHUB平台进行编辑设置，然后将编辑号的样式码进行复制，用同样的方法进行载入即可；
&emsp;&emsp; **（3）设置地图的显示内容**：图层的显示内容可以通过`setFeatures`方法来进行设置，设置的内容可以有4种：bg区域面、point标注点、road道路、building建筑物；
```js
map.setFeatures("road");  // 单一种类要素显示
map.setFeatures(['road','point']); // 多个种类要素显示
```

## 覆盖物
### 1、点标记及海量点标记
&emsp;&emsp; **点标记主要用来表示某个位置点信息，主要包括4种**：点标记、灵活点标记、圆形标记、文本标记；  
&emsp;&emsp; **（1）点标记 Marker**:  
&emsp;&emsp; **（2）灵活标记 ElasticMarker**:  
&emsp;&emsp; **（3）圆形标记 CircleMarker**:  
&emsp;&emsp; **（4）文本标记 TextMarker**:  
### 2、矢量图形及编辑
### 3、覆盖物群组
### 4、信息窗体和右键菜单
### 5、地图控件
<!-- ```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata). -->
