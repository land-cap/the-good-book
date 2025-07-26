import { css } from 'styled-system/css'
import { flex } from 'styled-system/patterns'

import { FooterContainer } from './FooterContainer'

export const Footer = () => (
   <FooterContainer>
      <p className={flex({ align: 'center', placeContent: 'center' })}>
         Designed & developed by&nbsp;
         <a
            href="https://github.com/land-cap"
            target="_blank"
            className={css({ textDecoration: 'underline', fontWeight: 'bold' })}
            rel="noreferrer"
         >
            land-cap
         </a>
      </p>
   </FooterContainer>
)
