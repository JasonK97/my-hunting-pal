import React, { useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { SEO } from '@/components'
import { PageWrapper, MapContainer } from '@/styles/styles'

export default function Map() {
  const [pageIsMounted, setPageIsMounted] = useState(false)
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  // Set bounds to just the US.
  // const bounds = [
  //   [24.521208, -124.736342], // Southwest coordinates
  //   [49.382808, -66.945392] // Northeast coordinates
  // ]

  useEffect(() => {
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      container: 'starter-map',
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-96, 39],
      zoom: 4,
      // maxBounds: bounds,
    });

    map
      .addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        }),
      )
      .addControl(
        new mapboxgl.NavigationControl()
      )
      .on('style.load', () => {
        map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
        })
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 2 })
        map.setFog({
          // 'range': [-4, 5],
          'horizon-blend': 0,
          'color': 'white',
          'high-color': '#add8e6',
          'space-color': '#d8f2ff',
          'star-intensity': 0.0
          })
        // map.addLayer(
        //   {
        //     'id': 'hillshading',
        //     'source': 'dem',
        //     'type': 'hillshade'
        //   },
        //   // Insert below land-structure-polygon layer,
        //   // where hillshading sits in the Mapbox Streets style.
        //   'land-structure-polygon'
        // )
      })
}, [])

  return (
    <PageWrapper>
      <SEO 
        page='Map'
        description='Take a look, map out, and plan your next hunting trip.'
      />

      <MapContainer id='starter-map' />
    </PageWrapper>
  )
}
