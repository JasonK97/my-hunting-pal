import Image from 'next/image'
import { TfiMapAlt } from 'react-icons/tfi'
import { BiNavigation } from 'react-icons/bi'
import { 
  BannerButton,
  HeroContent,
  HeroWrapper,
  ImageWrapper,
  HeroText,
  SubText,
  HomeContentWrapper,
  HomeImageWrapper,
  HomeContent,
  ContentSection,
} from '../styles/styles'

import { SEO } from '../components'
import useWindowDimensions from '../utils/useWindowDimensions'

export default function Home() {
  const { width } = useWindowDimensions()
  const background = '/static/unsplash/byron-johnson-lQ0gPL_0Bt8-unsplash.jpg'
  const mobileBackground = '/static/unsplash/elk-herd-mobile.png'
  const contentBackground = '/static/animals/moose-brown.png'

  return (
    <>
      <SEO
        page='Home'
        description='My Hunting Pal, your new companion for hunting trips.'
      />

      <HeroWrapper>
        <ImageWrapper>
          {width < 800 ? (
            <Image 
              src={mobileBackground}
              alt='A herd of Elk.'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              fill
              priority
            />
          ) : (
            <Image 
              src={background}
              alt='A herd of Elk.'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              fill
              priority
            />
          )}
        </ImageWrapper>

        <HeroContent>
          <HeroText>
            Welcome to My Hunting Pal.
          </HeroText>
          <SubText>Your best friend for your next trip.</SubText>
          <BannerButton href='/maps'>Start Exploring</BannerButton>
        </HeroContent>
      </HeroWrapper>

      <HomeContentWrapper>
        <HomeImageWrapper>
          <Image 
            src={contentBackground}
            alt='Stylized image of a moose.'
            width={700}
            height={700}
            priority
          />
        </HomeImageWrapper>

        <HomeContent>
          <ContentSection>
            <HeroText>
              <TfiMapAlt 
                style={{ 
                  marginRight: '15px',
                }}
              />
              Section off your favorite areas.
            </HeroText>
            <SubText>
              Our maps allow you to easily demarcate 
              the land you hunt and conveniently 
              identify your stands for future reference.
            </SubText>
          </ContentSection>
          

          <ContentSection>
            <HeroText>
              <BiNavigation 
                style={{ 
                  marginRight: '15px',
                }}
              />
              Easy Navigation.
            </HeroText>
            <SubText>
              With the assistance of our mapping technology, 
              you can conveniently navigate to your specific 
              stands and sectioned off land, no matter where 
              you find yourself.
            </SubText>
          </ContentSection>
        </HomeContent>
      </HomeContentWrapper>
    </>
  )
}
