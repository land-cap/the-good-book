import { styled } from 'styled-system/jsx'
import { css } from 'styled-system/css'
import { Icon } from '~/components/atoms/Icon/Icon'

const FooterContainer = styled('footer', {
	base: {
		display: 'flex',
		flexFlow: 'column nowrap',
		gap: '8',
		alignItems: 'center',
		textAlign: 'center',
		fontSize: 'xs',
		color: 'fg.subtle',
		mx: 'auto',
		w: 'full',
		maxW: '2xl',
		px: '8',
		my: { base: '10', md: '12' },
	},
})

export const Footer = () => (
	<FooterContainer>
		<p>
			© Drepturi de autor British and Foreign Bible Society (BFBS) și
			Societatea Biblică Interconfesională din România (SBIR) 1924,&nbsp;2014
			<br />© copyright British and Foreign Bible Society and the
			Interconfessional Bible Society of Romania 1924,&nbsp;2014
		</p>
		<p>
			<span className={css({ display: 'inline-flex', alignItems: 'center' })}>
				Made with{' '}
				<Icon
					name="favorite"
					className={css({
						mx: '1',
						color: { base: 'red.500', _osDark: 'red.400' },
					})}
				/>{' '}
				in Moldova by
			</span>{' '}
			<a
				href="https://github.com/land-cap"
				target="_blank"
				className={css({
					fontWeight: 'bold',
					textDecoration: 'underline',
				})}>
				land-cap
			</a>
		</p>
	</FooterContainer>
)
