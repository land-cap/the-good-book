import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'
import { useRangeInput } from '~/hooks'

const buttonCls = cx(
	button({ icon: true, visual: 'solid', size: 'lg' }),
	css({
		flexGrow: 1,
		aspectRatio: '4/3',
	}),
)

export const IncrementField = <T,>({
	range,
	value,
	onChange,
	decreaseIcon,
	increaseIcon,
}: {
	range: T[]
	value: T
	onChange: (values: T) => void
	decreaseIcon: string
	increaseIcon: string
}) => {
	const { decrement, increment } = useRangeInput(range, value, onChange)

	return (
		<div className={hstack({ gap: '0' })}>
			<button
				className={buttonCls}
				onClick={decrement}
				disabled={value === range[0]}
			>
				<Icon size={5} weight={500} code={decreaseIcon} />
			</button>
			<div
				className={css({
					h: '12',
					w: '1px',
					bg: 'border.onBgMuted',
				})}
			/>
			<button
				className={buttonCls}
				onClick={increment}
				disabled={value === range[range.length - 1]}
			>
				<Icon size={5} weight={500} code={increaseIcon} />
			</button>
		</div>
	)
}
