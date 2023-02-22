import Image from 'next/image'
import { 
  BannerButton,
  HeroContent,
  HeroWrapper,
  ImageWrapper,
  HeroText,
  SubText,
} from '../styles/styles'

import { SEO } from '../components'

export default function Home() {
  const background = '/static/unsplash/byron-johnson-lQ0gPL_0Bt8-unsplash.jpg'

  return (
    <>
      <SEO
        page='Home'
        description='My Hunting Pal, your new companion for hunting trips.'
      />

      <HeroWrapper>
        <ImageWrapper>
          <Image 
            src={background}
            alt='A herd of Elk.'
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            fill
            priority
          />
        </ImageWrapper>

        <HeroContent>
          <HeroText>
            Welcome to My Hunting Pal.
          </HeroText>
          <SubText>Your best friend for your next trip.</SubText>
          <BannerButton href='/maps'>Start Exploring</BannerButton>
        </HeroContent>
      </HeroWrapper>
    </>
  )
}
