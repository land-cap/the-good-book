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
	<Link href={href}>
		<Icon
			size={40}
			name={direction === 'right' ? 'chevron_right' : 'chevron_left'}
			className={twMerge(
				'text-fgFaded group-hover:text-fgSubtle transition duration-quick ease-in-out',
			)}
		/>
	</Link>
)
