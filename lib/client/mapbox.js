import mapboxgl from 'mapbox-gl'

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

mapboxgl.accessToken = mapboxToken

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
})