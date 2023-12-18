import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export type TIconSize = 16 | 20 | 24 | 40 | 48

export type TIconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700

export const sizeToClass: Record<number, string> = {
	12: 'w-3 h-3 text-[12px]',
	16: 'w-4 h-4 text-[16px]',
	20: 'w-5 h-5 text-[20px]',
	24: 'w-6 h-6 text-[24px]',
	40: 'w-10 h-10 text-[40px]',
	48: 'w-12 h-12 text-[48px]',
}

export const iconSizeList = Object.keys(sizeToClass).map((size) =>
	Number(size),
) as TIconSize[]

export const Icon = ({
	name,
	className,
	size,
	weight,
	fill,
}: {
	name: string
	className?: string
	size?: TIconSize
	weight?: TIconWeight
	fill?: boolean
}) => {
	const sizeClass = useMemo(() => size && sizeToClass[size], [size])

	return (
		<span
			className={twMerge('material-icon', sizeClass, className)}
			style={{
				fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${
					weight ?? '700'
				}, 'opsz' ${size ?? 20}`,
			}}
		>
			{name}
		</span>
	)
}
