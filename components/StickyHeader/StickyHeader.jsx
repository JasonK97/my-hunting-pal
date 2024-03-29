import React from 'react'
import Link from 'next/link'
import { Link as NextUILink, Avatar, Dropdown } from '@nextui-org/react'
import Image from 'next/image'
import { 
  useSession,
  signIn,
  signOut, 
} from 'next-auth/react'

import { logo, logoAlt } from './data'
import { 
  Sticky,
  HeaderDropdown,
  HeaderSection,
  HeaderLinkSection,
  HeaderLink,
  HeaderImage,
  Hamburger,
} from '@/styles/styles'

export const StickyHeader = () => {
  return (
    <Sticky>
      <HeaderDropdown>
        <Hamburger />
      </HeaderDropdown>

      <HeaderSection>
        <Link href='/'>
          <HeaderImage
            src={logo}
            alt={logoAlt}
            height={100}
            width={100}
            priority
          />
        </Link>
      </HeaderSection>
      
      <HeaderLinkSection>
        <HeaderLink href='/'>
          Home
        </HeaderLink>
        <HeaderLink href='/about'>
          About
        </HeaderLink>
        <HeaderLink href='/map'>
          Map
        </HeaderLink>
      </HeaderLinkSection>

      <HeaderLinkSection>
        <AccountDropdownMenu />
      </HeaderLinkSection>
    </Sticky>
  )
}

const AccountDropdownMenu = () => {
  const { data: session } = useSession()

  if (!session) {
    return (
      <NextUILink style={{ color: '#64b6ac' }} onClick={() => signIn()}>
        Sign In
      </NextUILink>
    )
  } else {
    return (
      <Dropdown>
        <Dropdown.Button light>
          {/* <Avatar src={session.user.image} size='md' /> */}
          Hi, {session.user.name}
        </Dropdown.Button>
        <Dropdown.Menu variant="light">
          <Dropdown.Item key='account'>
            <NextUILink style={{ color: '#ffffff' }} href='/my-account'>
              My Account
            </NextUILink>
          </Dropdown.Item>
          <Dropdown.Item key='myMaps'>
            <NextUILink style={{ color: '#ffffff' }} href='/my-maps'>
              My Maps
            </NextUILink>
          </Dropdown.Item>
          <Dropdown.Item 
            key="signOut"
            color="error" 
            withDivider
          >
            <NextUILink style={{ color: '#f54c4c' }} onClick={() => signOut()}>
              Sign Out
            </NextUILink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
