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
  HeaderSection,
  HeaderLink,
} from '@/styles/styles'

export const StickyHeader = () => {
  return (
    <Sticky>
      <HeaderSection>
        <Link href='/'>
          <Image
            src={logo}
            alt={logoAlt}
            height={100}
            width={100}
          />
        </Link>
      </HeaderSection>
      
      <HeaderSection>
        <HeaderLink href='/'>
          Home
        </HeaderLink>
        <HeaderLink href='/about'>
          About
        </HeaderLink>
        <HeaderLink href='/maps'>
          Maps
        </HeaderLink>
      </HeaderSection>

      <HeaderSection>
        <DropdownMenu />
      </HeaderSection>
    </Sticky>
  )
}

const DropdownMenu = () => {
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
          <Dropdown.Item key='account'>My Account</Dropdown.Item>
          <Dropdown.Item key='myMaps'>My Maps</Dropdown.Item>
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
