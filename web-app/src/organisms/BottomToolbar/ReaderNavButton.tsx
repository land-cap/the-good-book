import Link from 'next/link'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'

export const ReaderNavButton = ({
	url,
	direction,
	isDisabled,
}: {
	url: string
	direction: 'left' | 'right'
	isDisabled?: boolean
}) => (
	<Link
		prefetch
		href={url}
		aria-disabled={isDisabled}
		className={button({ icon: true, size: 'xl' })}
	>
		<Icon size={6} code={direction === 'left' ? '&#xe5c4;' : '&#xe5c8;'} />
	</Link>
)
