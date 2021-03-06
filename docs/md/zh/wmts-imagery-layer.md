<template lang="markdown">

# WMTS服务图层

`wmts-imagery-layer`用于加载WMTS服务的影像图层，示例将加载天地图的服务。

## 属性

|属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`指定wmts服务地址。|
|format|String|'image/jpeg'|`optional` 指定服务的MIME类型。|
|layer|String||指定WMTS请求图层名称。|
|style|String||指定WMTS请求样式名称。|
|tileMatrixSetID|String||指定WMTS请求的TileMatrixSet的标识符。|
|tileMatrixLabels|Array||`optional` 指定TileMatrix中用于WMTS请求的标识符列表，每个TileMatrix级别一个。|
|clock|Clock||`optional` 确定时间维度值时使用的Clock实例。 指定options.times时必需。|
|times|TimeIntervalCollection||`optional` TimeIntervalCollection，其data属性是一个包含时间动态维度及其值的对象。|
|dimensions|Object||`optional` 指定包含静态尺寸及其值的对象。|
|tileWidth|Number|256|`optional` 像元宽度。|
|tileHeight|Number|256|`optional` 像元高度。|
|tilingScheme|TilingScheme||`optional` 指定切片方案。|
|rectangle|Rectangle|Rectangle.MAX_VALUE|`optional` 图层的矩形范围,此矩形限制了影像可见范围。|
|minimumLevel|Number|0|`optional` 图层可以显示的最小层级。|
|maximumLevel|Number||`optional` 图层可以显示的最大层级，undefined表示没有限制。|
|ellipsoid|Ellipsoid||`optional` 参考椭球体，没指定默认WGS84椭球。|
|credit|Credit | String||`optional` 数据源描述信息。|
|subdomains|String| Array |'abc'|`optional` 指定URL模板中{s}占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是子域。 如果是数组，则数组中的每个元素都是子域。|
|rectangle|Cesium.Rectangle||`optional`图层的矩形范围,此矩形限制了影像可见范围。|
|alpha|Number\|function|1.0|`optional`图层透明度值，取值范围为0.0~1.0。|
|brightness|Number\|function|1.0|`optional`图层亮度值。值为1.0表示使用原图；值大于1.0时图像将变亮；值小于1.0时图像将变暗。|
|contrast|Number\|function|1.0|`optional`图层对比度。值为1.0表示使用原图；值大于1.0表示增加对比度；值小于1.0表示降低对比度。|
|hue|Number\|function|0.0|`optional`图层色调。值为0.0表示使用原图。|
|saturation|Number\|function|1.0|`optional`图层饱和度。值为1.0表示使用原图；值大于1.0表示增加饱和度；值小于1.0表示降低饱和度。|
|gamma|Number\|function|1.0|`optional`图层伽马校正。值为1.0表示使用原图。|
|show|Boolean|true|`optional`指定图层是否显示，true表示显示此图层，false表示不显示。|
|splitDirection|Number||`optional`指定影像图层分割方向。0始终显示影像图层，-1在Scene#imagerySplitPosition的左侧显示影像图层，1在Scene#imagerySplitPosition右侧显示影像图层。|
|minimumTerrainLevel|Number||`optional`最小地形细节层次。level 0是最小细节层次。|
|maximumTerrainLevel|Number||`optional`最大地形细节层次。|
---

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
|errorEvent|TileProviderError|当图层的提供者发生异步错误时触发, 返回一个TileProviderError实例。|

## 示例

### 添加天地图WMTS服务图层到CesiumViewer

#### 代码

```html
<template>
  <div class="viewer">
    <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
      <span>切换服务</span>
      <md-select v-model="url" placeholder="请选择服务">
        <md-option
          v-for="item in options"
          :key="item.value"
          :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
    <cesium-viewer @ready="ready">
      <wmts-imagery-layer :url="url" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains" :tilingScheme="tilingScheme"       :tileMatrixLabels="tileMatrixLabels" :alpha="alpha" :brightness="brightness" :contrast="contrast"/>
      <wmts-imagery-layer :url="urlText" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains" :tilingScheme="tilingScheme"       :tileMatrixLabels="tileMatrixLabels" :alpha="alpha" :brightness="brightness" :contrast="contrast"/>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        url: 'http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        urlText: 'http://{s}.tianditu.com/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
        style: 'default',
        tileMatrixSetID: 'c',
        tileMatrixLabels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'],
        credit : '天地图WMTS服务',
        subdomains : ['t0','t1','t2','t3','t4','t5','t6','t7'],
        tilingScheme: undefined,
        options: [{
          label: '天地图全球影像地图服务（经纬度投影）',
          value: 'http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
        }, {
          label: '天地图全球矢量地图服务（经纬度投影）',
          value: 'http://{s}.tianditu.com/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
        }],
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        viewer.imageryLayers.removeAll()
        this.tilingScheme = new Cesium.GeographicTilingScheme()
      }
    }
  }
</script>

<style scoped>
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 150px; z-index: 9999; color: white">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01" tooltip="hover" ></vue-slider>
        <span>切换服务</span>
        <md-select v-model="url" placeholder="请选择服务">
          <md-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
      <cesium-viewer @ready="ready">
        <wmts-imagery-layer :url="url" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains" :tilingScheme="tilingScheme"
          :tileMatrixLabels="tileMatrixLabels" :alpha="alpha" :brightness="brightness" :contrast="contrast"></wmts-imagery-layer>
        <wmts-imagery-layer :url="urlText" :wmtsStyle="style" :tileMatrixSetID="tileMatrixSetID" :credit="credit" :subdomains="subdomains"
          :tilingScheme="tilingScheme" :tileMatrixLabels="tileMatrixLabels" :alpha="alpha" :brightness="brightness" :contrast="contrast"></wmts-imagery-layer>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          url: 'http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
          urlText: 'http://{s}.tianditu.com/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
          style: 'default',
          tileMatrixSetID: 'c',
          tileMatrixLabels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'],
          credit : '天地图WMTS服务',
          subdomains : ['t0','t1','t2','t3','t4','t5','t6','t7'],
          tilingScheme: undefined,
          options: [{
            label: '天地图全球影像地图服务（经纬度投影）',
            value: 'http://{s}.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          }, {
            label: '天地图全球矢量地图服务（经纬度投影）',
            value: 'http://{s}.tianditu.com/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'
          }],
          alpha: 1,
          brightness: 1,
          contrast: 1
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          viewer.imageryLayers.removeAll()
          this.tilingScheme = new Cesium.GeographicTilingScheme()
        }
      }
    }
  </script>

  <style scoped>
  .viewer {
    width: 100%;
    height: 400px;
  }
  </style>
</doc-preview>