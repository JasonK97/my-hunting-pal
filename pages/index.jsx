import Image from 'next/image'
import { TfiMapAlt } from 'react-icons/tfi'
import { BiNavigation, BiShareAlt } from 'react-icons/bi'
import { 
  PageWrapper,
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
  ContentText,
  ContentSubText,
  BottomImageWrapper,
} from '../styles/styles'

import { SEO } from '../components'

export default function Home() {
  const background = '/static/unsplash/byron-johnson(1).png'
  const contentBackground = '/static/animals/moose-brown.png'
  const bottomImage = '/static/patrick-hendry-trees.png'

  return (
    <PageWrapper>
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
          <BannerButton href='/map'>Start Exploring</BannerButton>
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
            <ContentText>
              <TfiMapAlt 
                style={{ 
                  marginRight: '15px',
                }}
              />
              Section Off Your Favorite Areas.
            </ContentText>
            <ContentSubText>
              Our maps allow you to easily demarcate 
              the land you hunt and conveniently 
              identify your stands for future reference.
            </ContentSubText>
          </ContentSection>
          

          <ContentSection>
            <ContentText>
              <BiNavigation 
                style={{ 
                  marginRight: '15px',
                }}
              />
              Easy Navigation.
            </ContentText>
            <ContentSubText>
              With the assistance of our mapping technology, 
              you can conveniently navigate to your specific 
              stands and sectioned off land, no matter where 
              you find yourself.
            </ContentSubText>
          </ContentSection>

          <ContentSection>
            <ContentText>
              <BiShareAlt 
                style={{ 
                  marginRight: '15px',
                }}
              />
              Share Your Best Spots with Friends.
            </ContentText>
            <ContentSubText>
              Once you&apos;ve identified your ideal spot, our 
              platform allows you to effortlessly share the 
              marked land and stands with your friends!
            </ContentSubText>
          </ContentSection>
        </HomeContent>
      </HomeContentWrapper>

      <BottomImageWrapper>
        <Image 
          src={bottomImage}
          alt='black and white trees'
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          fill
          priority
        />
      </BottomImageWrapper>
    </PageWrapper>
  )
}
