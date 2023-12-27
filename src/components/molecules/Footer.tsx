import { css } from 'styled-system/css'
import { Icon } from '~/components/atoms/Icon/Icon'
import { flex } from '../../../styled-system/patterns'

export const Footer = () => (
	<footer
		className={css({
			color: 'fg.subtle',
			fontSize: 'xs',
			gridColumn: 'content',
			lineHeight: 'relaxed',
			mb: 'calc(token(spacing.20) + token(spacing.14) + token(spacing.safe_area_bottom))',
			mt: '20',
			mx: 'auto',
			sm: {
				mb: 'calc(token(spacing.32) + token(spacing.14) + token(spacing.safe_area_bottom))',
				mt: '32',
			},
			textAlign: 'center',
			w: 'full',
		})}
	>
		<p className={flex({ placeContent: 'center' })}>
			Designed & developed with&#32;
			<Icon
				name="favorite"
				fill
				size={16}
				className="mx-1 inline-flex text-fgFaded"
			/>
			by&nbsp;
			<a
				href="https://github.com/land-cap"
				target="_blank"
				className="font-bold underline"
			>
				land-cap
			</a>
		</p>
	</footer>
)
