import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Icon } from '~/components'

export const ReaderNavButton = ({
	href,
	direction,
}: {
	href: string
	direction: 'left' | 'right'
}) => {
	const iconProps = {
		name: direction === 'right' ? 'chevron_right' : 'chevron_left',
		className: twMerge(
			'text-fgFaded group-hover:text-fgSubtle transition duration-quick ease-in-out',
		),
	}

	return (
		<Link href={href}>
			<Icon
				size={40}
				{...iconProps}
				className={twMerge(iconProps.className, 'sm:hidden')}
			/>
			<Icon
				size={48}
				{...iconProps}
				className={twMerge(iconProps.className, 'hidden sm:flex')}
			/>
		</Link>
	)
}
