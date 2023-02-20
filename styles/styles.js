import styled from 'styled-components'
import { Text } from '@nextui-org/react'
import Link from 'next/link'

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

  &:hover {
    background-color: #262626;
  }
`
