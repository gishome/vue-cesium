<template>
  <i>
    <polyline-collection>
      <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines" :material="materialLine" :width="2" :loop="true"></polyline-primitive>
    </polyline-collection>
    <point-collection>
      <template v-for="(polyline, index) of polylines">
        <template  v-for="(position, subIndex) of polyline.positions">
          <point-primitive :position="position" :key="'polyline' + index + 'position' + subIndex" :color="colorPoint" :pixelSize="8"></point-primitive>
        </template>
      </template>
    </point-collection>
    <label-collection ref="labelCollection" @ready="labelCollectionReady">
      <label-primitive :position="label.position" :text="label.text" :key="index" v-for="(label, index) of labels" 
        :font="font" :outlineColor="outlineColorLabel" :showBackground="true" :backgroundColor="backgroundColorLabel"
        :backgroundPadding="backgroundPaddingLabel" :disableDepthTestDistance="0" :pixelOffsetScaleByDistance="pixelOffsetScaleByDistance"/>
    </label-collection>
  </i>
</template>

<script>
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'measure-height',
  render (h) {},
  mixins: [commonMixin('measure')],
  data () {
    return {
      measuring: false,
      height: 0,
      distanceH: 0,
      distanceS: 0,
      startPoint: undefined,
      polylines: [],
      labels: [],
      font: '100 20px SimSun',
      mode: 1
    }
  },
  watch: {
    measuring (val) {
      const { polylines } = this
      const polyline = polylines[polylines.length - 1]
      if (!val && polyline && !polyline.positions.length) {
        this.polylines.pop()
      } else if (val) {
        for (let $node of this.$parent.$slots.default || []) {
          if ($node.componentOptions && ($node.componentOptions.tag === 'measure-distance' ||
            $node.componentOptions.tag === 'measure-area')) {
            $node.child.measuring = false
          }
        }
        polylines.length && polylines.push({ positions: [], distance: 0 })
      }
      this.$emit('activeEvt', { type: 'heightMeasuring', isActive: val })
    }
  },
  methods: {
    load () {
      this.Cesium = this.$parent.Cesium
      this.viewer = this.$parent.viewer
      const { Cesium, viewer } = this
      this.outlineColorLabel = Cesium.Color.fromCssColorString('rgb(0,0,255)')
      this.backgroundColorLabel = Cesium.Color.fromCssColorString('rgba(42,42,42,0.8)')
      this.backgroundPaddingLabel = new Cesium.Cartesian2(7, 5)
      this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
      this.materialLine = Cesium.Material.fromType('Color')
      this.materialLine.uniforms.color = new Cesium.Color(0.3176470588235294, 1, 0, 1)
      this.pixelOffsetScaleByDistance = new Cesium.NearFarScalar(150, 3, 15000000, 0.5)
      let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
      handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
      handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    },
    LEFT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines } = this
      !polylines.length && polylines.push({ positions: [] })
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      if (polyline.positions.length === 0) {
        polyline.positions.push(cartesian)
        this.startPoint = cartesian
      }
    },
    MOUSE_MOVE (movement) {
      if (!this.measuring) {
        return
      }
      const { Cesium, viewer, polylines, labels } = this
      if (!polylines.length) {
        return
      }
      const polyline = polylines[polylines.length - 1]
      if (!polyline.positions.length) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.endPosition)
      if (!Cesium.defined(cartesian)) {
        return
      }

      let endPoint = cartesian
      let normalStart = {}
      Cesium.Cartesian3.normalize(this.startPoint, normalStart)
      let planeStart = new Cesium.Plane(normalStart, -Cesium.Cartesian3.distance(this.startPoint, new Cesium.Cartesian3(0, 0, 0)))
      let hypPoint = {}
      this.height = Cesium.Plane.getPointDistance(planeStart, endPoint)
      let labelPositonHeight = {}
      let labelPositonH = {}
      let labelPositonS = {}
      if (this.height >= 0) {
        Cesium.Plane.projectPointOntoPlane(planeStart, endPoint, hypPoint)
        Cesium.Cartesian3.midpoint(endPoint, hypPoint, labelPositonHeight)
        Cesium.Cartesian3.midpoint(this.startPoint, hypPoint, labelPositonH)
        this.distanceH = Cesium.Cartesian3.distance(this.startPoint, hypPoint)
      } else {
        let normalEnd = {}
        Cesium.Cartesian3.normalize(endPoint, normalEnd)
        let planeEnd = new Cesium.Plane(normalStart, -Cesium.Cartesian3.distance(endPoint, new Cesium.Cartesian3(0, 0, 0)))
        Cesium.Plane.projectPointOntoPlane(planeEnd, this.startPoint, hypPoint)
        Cesium.Cartesian3.midpoint(this.startPoint, hypPoint, labelPositonHeight)
        Cesium.Cartesian3.midpoint(endPoint, hypPoint, labelPositonH)
        this.distanceH = Cesium.Cartesian3.distance(endPoint, hypPoint)
      }
      this.distanceS = Cesium.Cartesian3.distance(this.startPoint, endPoint)
      Cesium.Cartesian3.midpoint(this.startPoint, endPoint, labelPositonS)
      this.height = Math.abs(this.height)
      if (polyline.positions.length !== 1) {
        polyline.positions.pop()
        polyline.positions.pop()
        labels.pop()
        labels.pop()
        labels.pop()
      }
      polyline.positions.push(endPoint)
      polyline.positions.push(hypPoint)
      let labelTextHeight = this.height > 1000 ? (this.height / 1000).toFixed(2) + 'km' : this.height.toFixed(2) + 'm'
      labels.push({
        text: '高度:' + labelTextHeight,
        position: labelPositonHeight
      })
      let labelTextH = this.distanceH > 1000 ? (this.distanceH / 1000).toFixed(2) + 'km' : this.distanceH.toFixed(2) + 'm'
      labels.push({
        text: '水平距离:' + labelTextH,
        position: labelPositonH
      })
      let labelTextS = this.distanceS > 1000 ? (this.distanceS / 1000).toFixed(2) + 'km' : this.distanceS.toFixed(2) + 'm'
      labels.push({
        text: '空间距离:' + labelTextS,
        position: labelPositonS
      })
    },
    RIGHT_CLICK (movement) {
      if (!this.measuring) {
        return
      }
      const { viewer, polylines, mode } = this
      if (!polylines.length) {
        return
      }
      let cartesian = viewer.scene.pickPosition(movement.position)
      if (!Cesium.defined(cartesian)) {
        return
      }
      if (mode === 0) {
        if (polylines.length) {
          this.distanceH = 0
          this.distanceS = 0
          this.height = 0
          polylines.push({ positions: [] })
        }
      } else {
        this.measuring = false
      }
    },
    getDistance (positions) {
      const { Cesium } = this
      let distance = 0
      for (let i = 0; i < positions.length - 1; i++) {
        let s = Cesium.Cartesian3.distance(positions[i], positions[i + 1])
        distance = distance + s
      }
      return distance
    },
    clear () {
      this.distance = 0
      this.polylines = []
      this.labels = []
    },
    labelCollectionReady () {
      this.$refs.labelCollection.originInstance._backgroundBillboardCollection._depthTestEnable = false
      this.$refs.labelCollection.originInstance._billboardCollection._depthTestEnable = false
    }
  }
}
</script>
