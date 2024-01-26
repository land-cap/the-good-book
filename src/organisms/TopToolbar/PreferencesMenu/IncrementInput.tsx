import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { useRangeInput } from '~/hooks/useRangeInput'

const buttonCls = cx(
	button({ icon: true, visual: 'solid' }),
	css({
		w: '14',
		h: '10',
	}),
)

export const IncrementInput = <T,>({
	label,
	range,
	value,
	onChange,
	decreaseIcon,
	increaseIcon,
}: {
	label: string
	range: T[]
	value: T
	onChange: (values: T) => void
	decreaseIcon: string
	increaseIcon: string
}) => {
	const { decrement, increment } = useRangeInput(range, value, onChange)

	return (
		<div className={hstack({ justify: 'space-between', h: '10' })}>
			<label>{label}</label>
			<div className={hstack({ gap: '1px' })}>
				<div
					className={buttonCls}
					onClick={decrement}
					aria-disabled={value === range[0]}
				>
					<Icon size={5} name={decreaseIcon} />
				</div>
				<div
					className={buttonCls}
					onClick={increment}
					aria-disabled={value === range[range.length - 1]}
				>
					<Icon size={5} name={increaseIcon} />
				</div>
			</div>
		</div>
	)
}
