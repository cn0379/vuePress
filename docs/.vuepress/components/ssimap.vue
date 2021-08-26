<template>
  <div>
    <button @click="setPoint">示例</button>
    <div id="map"></div>
  </div>
</template>

<script>
import SsiMap from '../../../../../ssimspro/ssimspro/packages/ssi-map-core/index'
export default {
  mounted() {
    const mapId = document.getElementById('map')
    const map = new SsiMap.SsiMap('testkey', {
      container: mapId,
      center: [121.13055, 31.457735],
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v11'
    })
    map.setPoint('point',)
  },
  methods: {
    setPoint() {}
  }
}
</script>

<style>
#map {
  width: 740px;
  height: 400px;
}
</style>