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
		className={button({ icon: true })}
	>
		<Icon
			size={6}
			name={direction === 'left' ? 'arrow_back' : 'arrow_forward'}
		/>
	</Link>
)
