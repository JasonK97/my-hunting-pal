import React, { useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { SEO } from '@/components'
import { PageWrapper, MapContainer } from '@/styles/styles'

export default function Maps() {
  const [pageIsMounted, setPageIsMounted] = useState(false)
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  useEffect(() => {
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      container: 'starter-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-96, 39],
      zoom: 4,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
    );
}, [])

  return (
    <PageWrapper>
      <SEO 
        page='Maps'
        description='Take a look, map out, and plan your next hunting trip.'
      />

      <MapContainer id='starter-map' />
    </PageWrapper>
  )
}
