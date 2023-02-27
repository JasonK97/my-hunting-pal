import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  Footer,
  FooterLinkContainer,
  FooterTextContainer,
} from '../../styles/styles'
import { gitHubLink, emailLink } from './data'

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
        <Link href={gitHubLink} target='_blank'>
          <FaGithub size='1.5rem' style={{ color: 'white', marginRight: '15px' }}/>
        </Link>

        <Link href={emailLink} target='_blank'>
          <MdEmail size='1.5rem' style={{ color: 'white', marginRight: '15px' }}/>
        </Link>
      </FooterLinkContainer>
		</Footer>
	)
}