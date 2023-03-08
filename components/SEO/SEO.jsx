import React from 'react'
import NextHead from 'next/head'

import { siteTitle } from './data'

export const SEO = ({ page, description }) => {
  const pageTitle = page || 'Page'
  const metaDescription = description || 'My Hunting Pal, your new companion for hunting trips.'

  return (
    <NextHead>
      <title>{pageTitle} | {siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
    </NextHead>
  )
}
