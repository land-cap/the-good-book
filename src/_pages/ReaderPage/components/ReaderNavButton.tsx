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
		className="flex h-14 w-14 place-content-center place-items-center text-fgFaded transition duration-quick ease-in-out hover:bg-bgSubtle hover:text-fgSubtle active:text-fg sm:h-16 sm:w-16"
	>
		<Icon
			size={40}
			name={direction === 'right' ? 'chevron_right' : 'chevron_left'}
		/>
	</Link>
)
