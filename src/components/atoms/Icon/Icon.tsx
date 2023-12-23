import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export type TIconSize = 16 | 20 | 24 | 40 | 48

export const sizeToClass: Record<number, string> = {
	16: 'w-4 h-4 text-[16px] [--icon-opsz:16] [--icon-weight:700]',
	20: 'w-5 h-5 text-[20px] [--icon-opsz:20] [--icon-weight:600]',
	24: 'w-6 h-6 text-[24px] [--icon-opsz:24] [--icon-weight:400]',
	40: 'w-10 h-10 text-[40px] [--icon-opsz:40] [--icon-weight:300]',
	48: 'w-12 h-12 text-[48px] [--icon-opsz:48] [--icon-weight:275]',
}

const fillToCls = new Map<boolean, string>([
	[true, '[--icon-fill:1]'],
	[false, '[--icon-fill:0]'],
])

const iconBaseCls =
	"[font-family:'Material_Symbols_Sharp'] [font-weight:normal] [font-style:normal] line-height-[1] letter-spacing-[normal] text-transform-[none] flex items-center [white-space:nowrap] [word-wrap:normal] [direction:ltr] [-webkit-font-feature-settings:'liga'] [-webkit-font-smoothing:antialiased] [--icon-grade:0] dark:[--icon-grade:-25]"

export const iconSizeList = Object.keys(sizeToClass).map((size) =>
	Number(size),
) as TIconSize[]

export const Icon = ({
	name,
	className,
	size = 16,
	fill = false,
}: {
	name: string
	className?: string
	size?: TIconSize

	fill?: boolean
}) => {
	const sizeClass = useMemo(() => size && sizeToClass[size], [size])

	return (
		<span
			className={twMerge(
				iconBaseCls,
				fillToCls.get(fill),
				"[font-variation-settings:'FILL'_var(--icon-fill),'wght'_var(--icon-weight),'opsz'_var(--icon-opsz),'GRAD'_var(--icon-grade)]",
				sizeClass,
				className,
			)}
		>
			{name}
		</span>
	)
}
