import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { useRangeInput } from '~/hooks'

const buttonCls = cx(
	button({ icon: true, visual: 'solid' }),
	css({
		w: '12',
		h: '10',
	}),
)

export const IncrementField = <T,>({
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
			<div className={hstack({ gap: '0' })}>
				<div
					className={buttonCls}
					onClick={decrement}
					role="button"
					aria-disabled={value === range[0]}
				>
					<Icon size={5} weight={500} name={decreaseIcon} />
				</div>
				<div
					className={css({
						h: '10',
						w: '1px',
						bg: 'border.emphasized',
						_osDark: {
							bg: 'border.active',
						},
					})}
				/>
				<div
					className={buttonCls}
					onClick={increment}
					role="button"
					aria-disabled={value === range[range.length - 1]}
				>
					<Icon size={5} weight={500} name={increaseIcon} />
				</div>
			</div>
		</div>
	)
}
