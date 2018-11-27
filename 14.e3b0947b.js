(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2WvQ":function(t,s,e){t.exports=e("oO4i")},"Gl+9":function(t,s,e){"use strict";e.d(s,"a",function(){return a}),e.d(s,"b",function(){return v});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[[e("h1",[t._v("polyline实体")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),e("hr"),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("3DTiles模型")]),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("div",{staticStyle:{position:"absolute",left:"1%",top:"1%",width:"150px","z-index":"9999",color:"white"}},[e("span",[t._v("切换地址")]),t._v(" "),e("md-select",{attrs:{placeholder:"切换地址"},model:{value:t.url,callback:function(s){t.url=s},expression:"url"}},t._l(t.options,function(s){return e("md-option",{key:s.value,attrs:{value:s.value}},[t._v("\n            "+t._s(s.label)+"\n          ")])}))],1),t._v(" "),e("cesium-viewer",[e("cesium-3dtileset",{ref:"tileset",attrs:{url:t.url},on:{ready:t.ready}})],1)],1)]],2)]],2)},v=[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("polyline-entity")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v("id")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A unique identifier for this object. If none is provided, a GUID is generated.")])]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A human readable name to display to users. It does not have to be unique.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("availability")]),t._v(" "),e("td",[t._v("TimeIntervalCollection")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The availability, if any, associated with this object.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean value indicating if the entity and its children are displayed.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("description")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A string Property specifying an HTML description for this entity.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",[t._v("PositionProperty")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the entity position.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("orientation")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the entity orientation.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("viewFrom")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A suggested initial offset for viewing this object.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("parent")]),t._v(" "),e("td",[t._v("Entity")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A parent entity to associate with this entity.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("positions")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the array of Cartesian3 positions that define the line strip.")])]),t._v(" "),e("tr",[e("td",[t._v("followSurface")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying whether the line segments should be great arcs or linearly connected.")])]),t._v(" "),e("tr",[e("td",[t._v("clampToGround")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying whether the Polyline should be clamped to the ground.")])]),t._v(" "),e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[t._v("1.0")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the width in pixels.")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying the visibility of the polyline.")])]),t._v(" "),e("tr",[e("td",[t._v("material")]),t._v(" "),e("td",[t._v("MaterialProperty")]),t._v(" "),e("td",[t._v("Color.WHITE")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the material used to draw the polyline.")])]),t._v(" "),e("tr",[e("td",[t._v("depthFailMaterial")]),t._v(" "),e("td",[t._v("MaterialProperty")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A property specifiying the material used to draw the polyline when it is below the terrain.")])]),t._v(" "),e("tr",[e("td",[t._v("granularity")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[t._v("Cesium.Math.RADIANS_PER_DEGREE")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the angular distance between each latitude and longitude if followSurface is true.")])]),t._v(" "),e("tr",[e("td",[t._v("shadows")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[t._v("ShadowMode.DISABLED")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" An enum Property specifying whether the polyline casts or receives shadows from each light source.")])]),t._v(" "),e("tr",[e("td",[t._v("distanceDisplayCondition")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying at what distance from the camera that this polyline will be displayed.")])]),t._v(" "),e("tr",[e("td",[t._v("zIndex")]),t._v(" "),e("td",[t._v("Property")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the zIndex used for ordering ground geometry. Only has an effect if "),e("code",{pre:!0},[t._v("clampToGround")]),t._v(" is true and polylines on terrain is supported.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回Cesium类, viewer实例。")])]),t._v(" "),e("tr",[e("td",[t._v("allTilesLoaded")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("所有tiles加载完毕后触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("initialTilesLoaded")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("触发该事件以指示已加载满足此帧的屏幕空间错误的所有切片。")])]),t._v(" "),e("tr",[e("td",[t._v("loadProgress")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("该事件指示tile加载进度。")])]),t._v(" "),e("tr",[e("td",[t._v("tileFailed")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("tile加载失败时触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("tileLoad")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("tile加载完成后触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("tileUnload")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("tile加载未成功加载时触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("tileVisible")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("tile可见性发生改变时触发该事件。")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-html"}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white"')]),t._v(">")]),t._v("\n      "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("切换地址"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"切换地址"')]),t._v(">")]),t._v("\n        "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v("\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"item in options"')]),t._v("\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v("\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(">")]),t._v("\n          {{item.label}}\n        "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v(">")]),t._v("\n      "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(">")]),t._v("\n      "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("cesium-3dtileset")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"tileset"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v("/>")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("cesium-viewer")]),t._v(">")]),t._v("\n  "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{attrs:{class:"javascript"}},[t._v("\n  "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data () {\n      "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n        "),e("span",{attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": [{\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'数据1'")]),t._v("\n        }, {\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json'")]),t._v(",\n          "),e("span",{attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'数据2'")]),t._v("\n        }],\n      }\n    },\n    "),e("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready (cesiumInstance) {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" {Cesium, viewer} = cesiumInstance\n      }\n    }\n  }\n")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])}];a._withStripped=!0},oO4i:function(t,s,e){"use strict";e.r(s);var a=e("zTFJ"),v=e.n(a);for(var _ in a)"default"!==_&&function(t){e.d(s,t,function(){return a[t]})}(_);var r=e("Gl+9"),l=e("JFUb"),n=Object(l.a)(v.a,r.a,r.b,!1,null,null,null);n.options.__file="docs/md/en/polyline-graphics.md",s.default=n.exports},zTFJ:function(t,s,e){var a,v,_;v=[s],void 0===(_="function"==typeof(a=function(s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{url:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",options:[{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",label:"数据1"},{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json",label:"数据2"}]}},methods:{ready:function(t){t.Cesium,t.viewer}}},t.exports=s.default})?a.apply(s,v):a)||(t.exports=_)}}]);