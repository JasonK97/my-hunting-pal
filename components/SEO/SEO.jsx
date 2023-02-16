import React from 'react'
import Head from 'next/head'

export const SEO = ({ page, description }) => {
  return (
    <Head>
      <title>My Hunting Pal | {page}</title>
      <meta name="description" content={description ? description : 'My Hunting Pal, your new companion for hunting trips.'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
  )
}
