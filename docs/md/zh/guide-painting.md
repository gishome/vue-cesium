<template lang="markdown">

# 绘制

## 说明

由于 MVVM 数据驱动视图的特性，绘制很方便。

## 示例

### 绘制实体线

#### 代码

```html
<template>
  <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 100px; z-index: 9999; color: white">
        <md-button class="md-raised md-accent" @click="toggle">{{ editing ? '停止绘制' : '开始绘制' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
    <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
      <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
      <polyline-entity :positions="polyline.positions" :key="index" :material="material" v-for="(polyline, index) of polylines"
        :width="5"></polyline-entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        material: undefined,
        editing: false,
        polylines: [],
        options: [],
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        window.viewer = viewer
        this.cesiumInstance = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.material = new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.CYAN
        })
      },
      toggle (name) {
        this.editing = !this.editing
        const { polylines } = this
        if (this.editing){
          polylines.push({positions: []})
        } else {
          if (!polylines.length) {
            return
          }
          const polyline = polylines[polylines.length - 1]
          if (polyline.positions.length === 0) {
            polylines.pop()
          }
        }
      },
      clear () {
        this.polylines = []
      },
      LEFT_CLICK (movement) {
        if (!this.editing) {
          return
        }
        const {Cesium, viewer} = this.cesiumInstance
        const { polylines } = this
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (!Cesium.defined(cartesian)) {
          return
        }
        polylines[polylines.length - 1].positions.push(cartesian)
      },
      MOUSE_MOVE (movement) {
        if (!this.editing) {
          return
        }
        const { polylines } = this
        if (!polylines.length) {
          return
        }
        const polyline = polylines[polylines.length - 1]
        if (!polyline.positions.length) {
          return
        }
        const {Cesium, viewer} = this.cesiumInstance
        let cartesian = viewer.scene.pickPosition(movement.endPosition)
        if (!Cesium.defined(cartesian)) {
          return
        }
        if (polyline.positions.length === 1) {
          polyline.positions.push(cartesian)
        }
        this.$set(polyline.positions, polyline.positions.length - 1, cartesian)
      },
      RIGHT_CLICK (movement) {
        if (!this.editing) {
          return
        }
        const { polylines } = this
        if(!polylines.length) {
          return
        }
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (!Cesium.defined(cartesian)) {
          return
        }
        const polyline = polylines[polylines.length - 1]
        polyline.positions.pop()
        polyline.positions.push(cartesian)
        if (polylines.length) {
          polylines.push({positions: []})
        }
      }
    }
  }
</script>
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div style="position: absolute; left: 1%; top: 1%; width: 100px; z-index: 9999; color: white">
        <md-button class="md-raised md-accent" @click="toggle">{{ editing ? '停止绘制' : '开始绘制' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
      <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
        <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
        <polyline-entity :ref="'line'+index" :positions="polyline.positions" :key="index" :material="material" v-for="(polyline, index) of polylines"
          :width="5"></polyline-entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          material: undefined,
          editing: false,
          polylines: [],
          options: []
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.cesiumInstance = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          this.material = new Cesium.PolylineDashMaterialProperty({
            color: Cesium.Color.CYAN
          })
        },
        toggle (name) {
          this.editing = !this.editing
          const { polylines } = this
          if (this.editing){
            polylines.push({positions: []})
          } else {
            if (!polylines.length) {
              return
            }
            const polyline = polylines[polylines.length - 1]
            if (polyline.positions.length === 0) {
              polylines.pop()
            }
          }
        },
        clear () {
          this.polylines = []
        },
        LEFT_CLICK (movement) {
          if (!this.editing) {
            return
          }
          const {Cesium, viewer} = this.cesiumInstance
          const { polylines } = this
          !polylines.length && polylines.push({positions: []})
          let cartesian = viewer.scene.pickPosition(movement.position)
          if (!Cesium.defined(cartesian)) {
            return
          }
          polylines[polylines.length - 1].positions.push(cartesian)
        },
        MOUSE_MOVE (movement) {
          if (!this.editing) {
            return
          }
          const { polylines } = this
          if (!polylines.length) {
            return
          }
          const polyline = polylines[polylines.length - 1]
          if (!polyline.positions.length) {
            return
          }
          const {Cesium, viewer} = this.cesiumInstance
          let cartesian = viewer.scene.pickPosition(movement.endPosition)
          if (!Cesium.defined(cartesian)) {
            return
          }
          if (polyline.positions.length === 1) {
            polyline.positions.push(cartesian)
          }
          this.$set(polyline.positions, polyline.positions.length - 1, cartesian)
        },
        RIGHT_CLICK (movement) {
          if (!this.editing) {
            return
          }
          const { polylines } = this
          if(!polylines.length) {
            return
          }
          const {viewer} = this.cesiumInstance
          let cartesian = viewer.scene.pickPosition(movement.position)
          if (!Cesium.defined(cartesian)) {
            return
          }
          const polyline = polylines[polylines.length - 1]
          polyline.positions.pop()
          polyline.positions.push(cartesian)
          if (polylines.length) {
            polylines.push({positions: []})
          }
        }
      }
    }
  </script>
</doc-preview>