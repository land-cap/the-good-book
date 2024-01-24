import { css, cx } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'

const buttonCls = cx(
	button({ icon: true }),
	css({ h: '10', aspectRatio: '4/3', bg: 'bg.muted' }),
)

export const IncrementInput = ({
	label,
	decreaseIcon,
	increaseIcon,
}: {
	label: string
	decreaseIcon: string
	increaseIcon: string
}) => {
	return (
		<div className={hstack({ justify: 'space-between', h: '10' })}>
			<label>{label}</label>
			<div className={hstack({ gap: '1px' })}>
				<div className={buttonCls}>
					<Icon size={5} name={decreaseIcon} />
				</div>
				<div className={buttonCls}>
					<Icon size={5} name={increaseIcon} />
				</div>
			</div>
		</div>
	)
}
