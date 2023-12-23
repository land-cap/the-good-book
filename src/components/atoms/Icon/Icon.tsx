import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export type TIconSize = 16 | 20 | 24 | 40 | 48

export type TIconWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700

export const sizeToClass: Record<number, string> = {
	16: 'w-4 h-4 text-[16px]',
	20: 'w-5 h-5 text-[20px]',
	24: 'w-6 h-6 text-[24px]',
	40: 'w-10 h-10 text-[40px]',
	48: 'w-12 h-12 text-[48px]',
}

const fillToCls = new Map<boolean, string>([
	[true, '[--icon-fill:1]'],
	[false, '[--icon-fill:0]'],
])

const weightToCls = new Map<TIconWeight, string>([
	[100, '[--icon-wght:100]'],
	[200, '[--icon-wght:200]'],
	[300, '[--icon-wght:300]'],
	[400, '[--icon-wght:400]'],
	[500, '[--icon-wght:500]'],
	[600, '[--icon-wght:600]'],
	[700, '[--icon-wght:700]'],
])

const opticalSizeToCls = new Map<TIconSize, string>([
	[16, '[--icon-opsz:16]'],
	[20, '[--icon-opsz:20]'],
	[24, '[--icon-opsz:24]'],
	[40, '[--icon-opsz:40]'],
	[48, '[--icon-opsz:48]'],
])

const iconBaseCls =
	"[font-family:'Material_Symbols_Sharp'] [font-weight:normal] [font-style:normal] line-height-[1] letter-spacing-[normal] text-transform-[none] flex items-center [white-space:nowrap] [word-wrap:normal] [direction:ltr] [-webkit-font-feature-settings:'liga'] [-webkit-font-smoothing:antialiased] [--icon-grad:0] dark:[--icon-grad:-25]"

export const iconSizeList = Object.keys(sizeToClass).map((size) =>
	Number(size),
) as TIconSize[]

export const Icon = ({
	name,
	className,
	size = 16,
	weight = 400,
	fill = false,
	dark = false,
}: {
	name: string
	className?: string
	size?: TIconSize
	weight?: TIconWeight
	fill?: boolean
	dark?: boolean
}) => {
	const sizeClass = useMemo(() => size && sizeToClass[size], [size])

	return (
		<span
			className={twMerge(
				iconBaseCls,
				fillToCls.get(fill),
				weightToCls.get(weight),
				opticalSizeToCls.get(size),
				"[font-variation-settings:'FILL'_var(--icon-fill),'wght'_var(--icon-wght),'opsz'_var(--icon-opsz),'GRAD'_var(--icon-grad)]",
				sizeClass,
				className,
			)}
		>
			{name}
		</span>
	)
}
