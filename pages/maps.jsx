import React, { useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { SEO } from '@/components'

export default function Maps() {
  const mapContainer = useRef(null)

  return (
    <>
      <SEO 
        page='Maps'
        description='Take a look, map out, and plan your next hunting trip.'
      />


    </>
  )
}
