import { css } from 'styled-system/css'
import { flex } from 'styled-system/patterns'

import { Icon } from '../atoms'

export const Footer = () => (
	<footer
		className={flex({
			align: 'center',
			color: 'fg.subtle',
			column: 'content',
			fontSize: 'xs',
			lineHeight: 'relaxed',
			mb: 'calc(token(spacing.20) + token(spacing.14) + token(spacing.safe_area_bottom))',
			mt: '20',
			mx: 'auto',
			placeContent: 'center',
			sm: {
				mb: 'calc(token(spacing.32) + token(spacing.14) + token(spacing.safe_area_bottom))',
				mt: '32',
			},
			textAlign: 'center',
			w: 'full',
		})}
	>
		<p className={flex({ align: 'center', placeContent: 'center' })}>
			Designed & developed with&#32;
			<Icon
				name="favorite"
				fill
				size={4}
				className={css({ color: 'fg.faded', display: 'inline-flex', mx: '1' })}
			/>
			by&nbsp;
			<a
				href="https://github.com/land-cap"
				target="_blank"
				className={css({ fontWeight: 'bold', textDecoration: 'underline' })}
			>
				land-cap
			</a>
		</p>
	</footer>
)
