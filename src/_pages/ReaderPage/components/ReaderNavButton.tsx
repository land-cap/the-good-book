import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Icon } from '~/components'

export const ReaderNavButton = ({
	href,
	direction,
}: {
	href: string
	direction: 'left' | 'right'
}) => (
	<Link
		href={href}
		className={twMerge(
			'group place-content-center place-items-center w-12 h-12',
		)}
	>
		<Icon
			size={48}
			weight={400}
			name={direction === 'right' ? 'chevron_right' : 'chevron_left'}
			className={twMerge(
				'text-fgFaded group-hover:text-fgSubtle transition duration-quick ease-in-out',
			)}
		/>
	</Link>
)
