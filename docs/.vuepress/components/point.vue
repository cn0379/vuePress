<template>
  <div>
    <div id="map"></div>
    <btn  @click.native.once="setPoint" >添加点</btn>
    <btn  @click.native.once="remove" >删除点</btn>
  </div>
</template>

<script>
let map
import SsiMap from '../../../../../../ssimspro/ssimspro/packages/ssi-map-core/index'
import { point } from '../../../data/index'
export default {
  mounted() {
    const mapId = document.getElementById('map')
    
    map = new SsiMap.SsiMap('814600D0-7B9D-411B-A26E-D3AC3B3026BD', {
      container: mapId,
      center: [121.13055, 31.457735],
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v11'
    })
  },
  methods: {
    setPoint() {
      map.setPoint(point)
    },
    remove() {
      map.removeLayer(point.id)
    }
  }
}
</script>

<style>
#map {
  width: 740px;
  height: 400px;
}

.mapboxgl-control-container {
  display: none;
}
</style>