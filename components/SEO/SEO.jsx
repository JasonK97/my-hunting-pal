import React from 'react'
import Head from 'next/head'

import { siteTitle } from './data'

export const SEO = ({ page, description }) => {
  const metaDescription = description || 'My Hunting Pal, your new companion for hunting trips.'

  return (
    <Head>
      <title>{page} | {siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
  )
}
