import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

const buttonCls = cx(
	button({ visual: 'solid', size: 'small', weight: 'regular' }),
	css({
		pos: 'absolute',
		top: '-4',
		right: '0',
		transform: 'translateY(-100%)',
	}),
)

export const ReturnFromReferenceFAB = () => {
	return <button className={buttonCls}>Gen. 12</button>
}
