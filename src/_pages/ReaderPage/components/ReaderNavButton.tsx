import Link from 'next/link'
import { type CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '~/components'

export const ReaderNavButton = ({
	href,
	direction,
	className,
	style,
}: {
	href: string
	direction: 'left' | 'right'
	className: string
	style: CSSProperties
}) => (
	<Link
		href={href}
		className={twMerge(
			className,
			'group place-content-center place-items-center w-12 h-12 hover:bg-primary-50',
		)}
		style={style}
	>
		<Icon
			size={48}
			name={direction === 'right' ? 'chevron_right' : 'chevron_left'}
			className={twMerge('text-fgFaded group-hover:text-fgSubtle')}
		/>
	</Link>
)
