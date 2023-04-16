import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  Footer,
  FooterLinkContainer,
  FooterTextContainer,
} from '../../styles/styles'
import { gitHubLink, emailLink, twitterLink } from './data'

export const FooterContainer = () => {
    const currentYear =  new Date().getFullYear()
    
	return (
		<Footer>
      <FooterTextContainer>
        <p>
          &copy; {currentYear} My Hunting Pal. All Rights Reserved.
        </p>
      </FooterTextContainer>

      <FooterLinkContainer>
        <Link href={twitterLink} target='_blank' style={{ color: 'white' }}>
          <FaTwitter size='1.5rem' style={{ marginRight: '15px' }}/>
        </Link>

	<Link href={gitHubLink} target='_blank' style={{ color: 'white' }}>
          <FaGithub size='1.5rem' style={{ marginRight: '15px' }}/>
        </Link>

        <Link href={emailLink} target='_blank' style={{ color: 'white' }}>
          <MdEmail size='1.5rem' style={{ marginRight: '15px' }}/>
        </Link>
      </FooterLinkContainer>
		</Footer>
	)
}
