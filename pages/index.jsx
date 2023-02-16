import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { SEO } from '../components'

export default function Home() {
  return (
    <>
      <SEO
        page='Home'
        description='My Hunting Pal, your new companion for hunting trips.'
      />

      <main className={styles.main}>
        {/* <Image 
          src='/static/unsplash/byron-johnson-lQ0gPL_0Bt8-unsplash.jpg'
          alt='elk bleeting'
          width={'100%'}
          height={'100%'}
        /> */}
      </main>
    </>
  )
}
