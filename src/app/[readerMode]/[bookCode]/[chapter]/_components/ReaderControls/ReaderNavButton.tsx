import Link from 'next/link'
import { flex } from 'styled-system/patterns'

import { Icon } from '../../../../../../components/atoms'

export const ReaderNavButton = ({
	href,
	direction,
	isDisabled,
}: {
	href: string
	direction: 'left' | 'right'
	isDisabled?: boolean
}) => (
	<Link
		prefetch
		href={href}
		aria-disabled={isDisabled}
		className={flex({
			'&[aria-disabled=true]': {
				color: 'fg.moreFaded',
				pointerEvents: 'none',
			},
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
			name={direction === 'left' ? 'arrow_back' : 'arrow_forward'}
		/>
	</Link>
)
