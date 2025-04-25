import { css } from 'styled-system/css'
import { flex } from 'styled-system/patterns'

import { FooterContainer } from '~/app/read/lib/Footer/FooterContainer'

export const Footer = () => (
	<FooterContainer>
		<p className={flex({ align: 'center', placeContent: 'center' })}>
			Designed & developed by&nbsp;
			<a
				href="https://github.com/land-cap"
				target="_blank"
				className={css({ fontWeight: 'bold', textDecoration: 'underline' })}
			>
				land-cap
			</a>
		</p>
	</FooterContainer>
)
