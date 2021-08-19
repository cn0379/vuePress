<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  mounted() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiY2JsYW4yMyIsImEiOiJja2xoaWtnMXkwM205MnFubXlheXQxcGluIn0.l7jWRkbA5gBJTTl6jpmtiA'
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    })
    console.log(map)
  }
}
</script>

<style>
#map {
  width: 800px;
  height: 800px;
}
</style>