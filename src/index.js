import {
    Map
  } from 'maptalks'
  import {
    WMTSTileLayer
  } from 'maptalks.wmts'
  
  const mapContainer = document.getElementById('root')
  const map = new Map(mapContainer, {
    center: [105.08052356963802, 36.04231948670001],
    zoom: 4,
    minZoom: 1,
    maxZoom: 18,
    spatialReference: {
        projection: 'EPSG:4326'
    },
    baseLayer: new WMTSTileLayer('base', {
        tileSystem: [1, -1, -180, 90],
        layer: 'vec',
        tilematrixset: 'c',
        format: 'tiles',
        urlTemplate: 'http://t{s}.tianditu.com/vec_c/wmts?tk=34e168d12e2b79f61dc1e6e220659c71',
        subdomains: ['1', '2', '3', '4', '5'],
        attribution: '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>'
    }),
    layers: [
        new WMTSTileLayer('road', {
            layer: 'cva',
            tilematrixset: 'c',
            format: 'tiles',
            urlTemplate: 'http://t{s}.tianditu.com/cva_c/wmts?tk=34e168d12e2b79f61dc1e6e220659c71',
            subdomains: ['1', '2', '3', '4', '5'],
            opacity: 1
        })
    ]
  });
  
  console.log(map)