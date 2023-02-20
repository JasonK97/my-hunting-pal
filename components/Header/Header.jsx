import React from 'react'
import Image from 'next/image'
import { Navbar, Text, Link } from '@nextui-org/react'
import { collapseItems, socialLinks } from './data'

export const Header = () => {
	return (
    <Navbar variant='sticky' maxWidth='fluid'>
      <Navbar.Toggle showIn='xs' />
      <Navbar.Brand>
        <a href='/' style={{ color: '#8f754f', padding: '15px' }}>
          <Image 
            src='/static/MHP_logo.png'
            alt='My Hunting Pal logo antlers'
            width={100}
            height={100}
            priority
          />
        </a>
        <Text b color="#64b6ac">
          My Hunting Pal
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn='xs'>
        {collapseItems.map(item => (
            <Link key={item.title} href={item.link} style={{ color: '#d7b377' }}>{item.title}</Link>
        ))}
      </Navbar.Content>
      {/* <Navbar.Content>
        {socialLinks.map(({ link, image, alt }) => (
          <Link key={alt} href={link} target='_blank'>
            <img src={image} alt={alt} width='20px' height='20px' />
          </Link>
        ))}
      </Navbar.Content> */}
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.link}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
	)
}
