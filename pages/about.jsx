import React from 'react'

import { SEO } from '@/components'
import { PageWrapper } from '@/styles/styles'

export default function About() {
  return (
    <PageWrapper>
      <SEO 
        page='About'
        description='My Hunting Pal is made by hunters, for hunters.'
      />
    </PageWrapper>
  )
}
