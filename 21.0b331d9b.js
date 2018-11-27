(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0cFi":function(t,s,v){var e,_,a;_=[s],void 0===(a="function"==typeof(e=function(s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{url:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",options:[{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",label:"数据1"},{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json",label:"数据2"}]}},methods:{ready:function(t){t.Cesium,t.viewer}}},t.exports=s.default})?e.apply(s,_):e)||(t.exports=a)},"0dCN":function(t,s,v){"use strict";v.r(s);var e=v("0cFi"),_=v.n(e);for(var a in e)"default"!==a&&function(t){v.d(s,t,function(){return e[t]})}(a);var l=v("3sgU"),r=v("JFUb"),n=Object(r.a)(_.a,l.a,l.b,!1,null,null,null);n.options.__file="docs/md/zh/cesium-3dtileset.md",s.default=n.exports},"3sgU":function(t,s,v){"use strict";v.d(s,"a",function(){return e}),v.d(s,"b",function(){return _});var e=function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("section",[[v("h1",[t._v("3DTiles模型")]),t._v(" "),t._m(0),t._v(" "),v("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),v("hr"),t._v(" "),v("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),v("h2",[t._v("示例")]),t._v(" "),v("h3",[t._v("3DTiles模型")]),t._v(" "),v("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),v("h4",[t._v("预览")]),t._v(" "),v("doc-preview",[[v("div",{staticClass:"viewer"},[v("div",{staticStyle:{position:"absolute",left:"1%",top:"1%",width:"150px","z-index":"9999",color:"white"}},[v("span",[t._v("切换地址")]),t._v(" "),v("md-select",{attrs:{placeholder:"切换地址"},model:{value:t.url,callback:function(s){t.url=s},expression:"url"}},t._l(t.options,function(s){return v("md-option",{key:s.value,attrs:{value:s.value}},[t._v("\n            "+t._s(s.label)+"\n          ")])}))],1),t._v(" "),v("cesium-viewer",[v("cesium-3dtileset",{ref:"tileset",attrs:{url:t.url},on:{ready:t.ready}})],1)],1)]],2)]],2)},_=[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("cesium-3dtileset")]),this._v("用于加载3DTiles模型。")])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("url")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("required")]),t._v("tileset json文件地址。")])]),t._v(" "),v("tr",[v("td",[t._v("show")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("是否显示tileset模型。")])]),t._v(" "),v("tr",[v("td",[t._v("modelMatrix")]),t._v(" "),v("td",[t._v("Matrix4")]),t._v(" "),v("td",[t._v("Matrix4.IDENTITY")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 一个4x4变换矩阵，用于转换tileset的根块。")])]),t._v(" "),v("tr",[v("td",[t._v("shadows")]),t._v(" "),v("td",[t._v("ShadowMode")]),t._v(" "),v("td",[t._v("ShadowMode.ENABLED")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 确定tileset是否投射或接收来自每个光源的阴影。")])]),t._v(" "),v("tr",[v("td",[t._v("maximumScreenSpaceError")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("16")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 用于驱动细节细化级别的最大屏幕空间错误。")])]),t._v(" "),v("tr",[v("td",[t._v("maximumMemoryUsage")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("512")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" tileset可以使用的最大内存量（MB）。")])]),t._v(" "),v("tr",[v("td",[t._v("cullWithChildrenBounds")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 是否使用子绑定卷的并集来剔除切片。")])]),t._v(" "),v("tr",[v("td",[t._v("dynamicScreenSpaceError")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 减少远离相机的瓷砖的屏幕空间错误。")])]),t._v(" "),v("tr",[v("td",[t._v("dynamicScreenSpaceErrorDensity")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("0.00278")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 用于调整动态屏幕空间误差密度，类似于雾密度。")])]),t._v(" "),v("tr",[v("td",[t._v("dynamicScreenSpaceErrorFactor")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("4.0")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 用于增加计算的动态屏幕空间错误的因子。")])]),t._v(" "),v("tr",[v("td",[t._v("dynamicScreenSpaceErrorHeightFalloff")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("0.25")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" tileset高度开始下降的比率。")])]),t._v(" "),v("tr",[v("td",[t._v("skipLevelOfDetail")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 确定在遍历期间是否应该应用详细信息跳过级别。")])]),t._v(" "),v("tr",[v("td",[t._v("baseScreenSpaceError")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("1024")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 当skipLevelOfDetail为true时，在跳过详细级别之前必须达到的屏幕空间错误。")])]),t._v(" "),v("tr",[v("td",[t._v("skipScreenSpaceErrorFactor")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("16")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 当skipLevelOfDetail为true时，定义要跳过的最小屏幕空间错误的乘数。 与skipLevels结合使用以确定要加载的切片。")])]),t._v(" "),v("tr",[v("td",[t._v("skipLevels")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v("当skipLevelOfDetail为true时，一个常量定义加载切片时要跳过的最小级别数。 当它为0时，不会跳过任何级别。与skipScreenSpaceErrorFactor结合使用以确定要加载的切片。")])]),t._v(" "),v("tr",[v("td",[t._v("immediatelyLoadDesiredLevelOfDetail")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 当skipLevelOfDetail为true时，将只下载满足最大屏幕空间错误的切片。跳过因子将被忽略，并且只加载所需的切片。")])]),t._v(" "),v("tr",[v("td",[t._v("loadSiblings")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 当skipLevelOfDetail为true时，确定在遍历期间是否始终下载可见切片的兄弟节点。")])]),t._v(" "),v("tr",[v("td",[t._v("clippingPlanes")]),t._v(" "),v("td",[t._v("ClippingPlaneCollection")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" ClippingPlaneCollection用于有选择地禁用渲染tileset。")])]),t._v(" "),v("tr",[v("td",[t._v("classificationType")]),t._v(" "),v("td",[t._v("ClassificationType")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 确定此tileset是否会对terrain，3D Tiles或两者进行分类。 有关限制和限制的详细信息，请参阅Cesium3DTileset＃classificationType。")])]),t._v(" "),v("tr",[v("td",[t._v("ellipsoid")]),t._v(" "),v("td",[t._v("Ellipsoid")]),t._v(" "),v("td",[t._v("Ellipsoid.WGS84")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 决定地球的大小和形状参考椭球体。")])]),t._v(" "),v("tr",[v("td",[t._v("pointCloudShading")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 用于构造PointCloudShading对象以基于几何误差和光照控制点衰减的选项。")])]),t._v(" "),v("tr",[v("td",[t._v("imageBasedLightingFactor")]),t._v(" "),v("td",[t._v("Cartesian2")]),t._v(" "),v("td",[t._v("new Cartesian2(1.0, 1.0)")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 地球、天空、大气层的光照缩放因子。")])]),t._v(" "),v("tr",[v("td",[t._v("lightColor")]),t._v(" "),v("td",[t._v("Cartesian3")]),t._v(" "),v("td"),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 模型阴影的颜色和强度。")])]),t._v(" "),v("tr",[v("td",[t._v("debugFreezeFrame")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，确定是否只使用最后一帧的切片进行渲染。")])]),t._v(" "),v("tr",[v("td",[t._v("debugColorizeTiles")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则给每个tile一个随机颜色。")])]),t._v(" "),v("tr",[v("td",[t._v("debugWireframe")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用， 如果为ture，则渲染每个tile content为线框。")])]),t._v(" "),v("tr",[v("td",[t._v("debugShowBoundingVolume")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则渲染每个tile的边界体积。")])]),t._v(" "),v("tr",[v("td",[t._v("debugShowContentBoundingVolume")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则渲染每个tile content的边界体积。")])]),t._v(" "),v("tr",[v("td",[t._v("debugShowViewerRequestVolume")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则渲染每个tile的请求量。")])]),t._v(" "),v("tr",[v("td",[t._v("debugShowGeometricError")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则绘制标签表示每个tile的几何误差。")])]),t._v(" "),v("tr",[v("td",[t._v("debugShowRenderingStatistics")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则绘制标签以表示每个tile的commonds、points、triangles、features的数量。")])]),t._v(" "),v("tr",[v("td",[t._v("debugShowMemoryUsage")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则绘制标签表示每个tile的纹理和几何内存，以mb为单位。")])]),t._v(" "),v("tr",[v("td",[t._v("debugShowUrl")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为true，则绘制标签表示每个tile的网址。")])]),t._v(" "),v("tr",[v("td",[t._v("isZoomTo")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[v("code",{pre:!0},[t._v("optional")]),t._v(" 加载到scene之后是否定位到该模型。")])])])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("事件名")]),t._v(" "),v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ready")]),t._v(" "),v("td",[t._v("{Cesium, viewer}")]),t._v(" "),v("td",[t._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),t._v(" "),v("tr",[v("td",[t._v("allTilesLoaded")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("所有tiles加载完毕后触发该事件。")])]),t._v(" "),v("tr",[v("td",[t._v("initialTilesLoaded")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("触发该事件以指示已加载满足此帧的屏幕空间错误的所有切片。")])]),t._v(" "),v("tr",[v("td",[t._v("loadProgress")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("该事件指示tile加载进度。")])]),t._v(" "),v("tr",[v("td",[t._v("tileFailed")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("tile加载失败时触发该事件。")])]),t._v(" "),v("tr",[v("td",[t._v("tileLoad")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("tile加载完成后触发该事件。")])]),t._v(" "),v("tr",[v("td",[t._v("tileUnload")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("tile加载未成功加载时触发该事件。")])]),t._v(" "),v("tr",[v("td",[t._v("tileVisible")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("tile可见性发生改变时触发该事件。")])])])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("pre",{pre:!0},[v("code",{attrs:{"v-pre":"",class:"language-html"}},[v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white"')]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("切换地址"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"切换地址"')]),t._v(">")]),t._v("\n        "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v("\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"item in options"')]),t._v("\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v("\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(">")]),t._v("\n          {{item.label}}\n        "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(">")]),t._v("\n      "),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("cesium-3dtileset")]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"tileset"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(" "),v("span",{attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),v("span",{attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v("/>")]),t._v("\n    "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(">")]),t._v("\n  "),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),v("span",{attrs:{class:"hljs-tag"}},[t._v("<"),v("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),v("span",{attrs:{class:"javascript"}},[t._v("\n  "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n        "),v("span",{attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": [{\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'数据1'")]),t._v("\n        }, {\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json'")]),t._v(",\n          "),v("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),v("span",{attrs:{class:"hljs-string"}},[t._v("'数据2'")]),t._v("\n        }],\n      }\n    },\n    "),v("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready (cesiumInstance) {\n        "),v("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" {Cesium, viewer} = cesiumInstance\n      }\n    }\n  }\n")]),v("span",{attrs:{class:"hljs-tag"}},[t._v("</"),v("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])}];e._withStripped=!0},"D+wI":function(t,s,v){t.exports=v("0dCN")}}]);