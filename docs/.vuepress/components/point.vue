<template>
  <div>
    <div id="map"></div>
    <btn @click.native.once="setPoint">添加点</btn>
    <btn @click.native.once="remove">删除点</btn>
  </div>
</template>

<script>
let map
import SsiMap from '../../../../../../ssimspro/ssimspro/packages/ssi-map-core/index'
import { point } from '../../../data/index'
export default {
  data() {
    return {
      id:  ''
    }
  },
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
      const data = [
        {
          label: 'first',
          icon: 'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
          position: [121.13055, 31.457735],
          offset: [0, 0],
          iconSize: .1
        },
        {
          label: 'first',
          icon: 'http://10.10.1.147:1446//icon-%E5%85%AC%E5%85%B1%E8%87%AA%E8%A1%8C%E8%BD%A6.png',
          position: [121.13055, 31.257735],
          offset: [0, 0],
          iconSize: 1
        }
      ]
      const id = map.setPoint(data)
      console.log(id);
      this.id = id
    },
    remove() {
      map.removeAllLayer(this.id)
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