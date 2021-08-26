<template>
  <div>
    <div id="map"></div>
    <button @click.once="setPoint">添加点</button>
  </div>
</template>

<script>
let map
import SsiMap from '../../../../../ssimspro/ssimspro/packages/ssi-map-core/index'
import { point } from '../../../data/index'
export default {
  mounted() {
    const mapId = document.getElementById('map')
    map = new SsiMap.SsiMap('testkey', {
      container: mapId,
      center: [121.13055, 31.457735],
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v11'
    })
  },
  methods: {
    setPoint() {
        map.setPoint(point)
    }
  }
}
</script>

<style>
#map {
  width: 740px;
  height: 400px;
}
</style>