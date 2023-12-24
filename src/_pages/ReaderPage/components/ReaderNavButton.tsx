import Link from 'next/link'
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
		className="flex h-14 w-14 place-content-center place-items-center text-fg transition duration-quick ease-in-out hover:bg-bgSubtle active:text-fgSubtle"
	>
		<Icon
			size={40}
			weight={300}
			name={direction === 'left' ? 'chevron_left' : 'chevron_right'}
		/>
	</Link>
)
