import Link from 'next/link'
import { flex } from 'styled-system/patterns'

import { Icon } from '~/components'

export const ReaderNavButton = ({
	href,
	direction,
}: {
	href: string
	direction: 'left' | 'right'
}) => (
	<Link
		prefetch
		href={href}
		className={flex({
			_active: { bg: 'bg.subtle', color: 'fg.subtle' },
			_canHover: { _hover: { bg: 'bg.subtle' } },
			h: '14',
			placeContent: 'center',
			placeItems: 'center',
			transition: 'colors',
			transitionDuration: 'fast',
			transitionTimingFunction: 'ease-out',
			w: '14',
		})}
	>
		<Icon
			size={6}
			name={direction === 'left' ? 'arrow_back_ios_new' : 'arrow_forward_ios'}
		/>
	</Link>
)
