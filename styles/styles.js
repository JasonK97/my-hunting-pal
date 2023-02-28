import styled from 'styled-components'
import { Text } from '@nextui-org/react'
import Link from 'next/link'

export const PageWrapper = styled.div`
  min-height: 90vh;
`

export const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 15%;
  margin-left: 15%;

  @media(max-width: 800px) {
    padding-top: 45%;
  }
`

export const ImageWrapper = styled.div`
  z-index: -1;

  img {
    filter: brightness(50%);
  }
`

export const HeroText = styled(Text)`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.5;
  textGradient: 45deg, #545454 -20%, #ffffff 50%;
`

export const SubText = styled.span`
  font-size: 24px;
`

export const BannerButton = styled(Link)`
  border: none;
  border-radius: 5px;
  background-color: #2e382e;
  color: #d7b377;
  padding: 10px 15px;
  margin-top: 10px;
  margin-right: auto;
  transition: .25s;

  &:hover {
    background-color: #262626;
    color: #8f754f;
    transition: .25s;
  }
`

export const HomeContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 150vh;
  overflow: hidden;

  @media(max-width: 800px) {
    height: 125vh;
  }
`

export const HomeContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 10%;
  margin-left: 15%;
`

export const ContentText = styled(Text)`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.5;
  margin-bottom: 35px;
  padding-bottom: 15px;
  border-bottom: solid white;
`

export const ContentSection = styled.div`
  margin-top: 2rem;
  max-width: 800px;
`

export const ContentSubText = styled.span`
  font-size: 20px;
`

export const HomeImageWrapper = styled.div`
  z-index: -1;

  img {
    position: absolute;
    right: -300px;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media(max-width: 800px) {
    img {
      width: 600px;
      height: 400px;
      right: -225px;
    }
  }
`

export const MapContainer = styled.div`
  margin-top: 4rem;
  align-items: center;
  height: 90vh;
`

export const Sticky = styled.header`
  display: flex;
  flex: 1;
  padding: 1.25rem;
  height: 4rem;
  border-bottom: 1px solid #eaeaea;
  justify-content: space-between;
  background: rgba(38, 38, 38, 0.8);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const HeaderSection = styled.div`
  align-self: center;
`

export const HeaderLink = styled(Link)`
  font-decoration: none;
  color: #d7b377;
  margin-left: 15px;
  margin-right: 15px;
  transition: .25s;

  &:hover {
    color: #8f754f;
    transition: .25s;
  }
`

export const BottomImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 50vh;
  overflow: hidden;
`
  
export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem;
  border-top: 1px solid #eaeaea;
  align-items: center;
  background-color: #171717;
`

export const FooterTextContainer = styled.div`
  display: inline;
  float: left;
  width: 93%;
`

export const FooterLinkContainer = styled.div`
  display: inline;
  float: right;
`
