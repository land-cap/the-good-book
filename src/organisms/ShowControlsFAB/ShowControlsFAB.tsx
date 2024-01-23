import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { Icon } from '~/components'

export const ShowControlsFAB = () => (
	<button
		className={cx(
			button({ icon: true }),
			css({
				pos: 'fixed',
				bottom: '8',
				right: '8',
				bg: 'bg.canvas',
				_osDark: { bg: 'bg.subtle' },
			}),
		)}
	>
		<Icon size={6} name="more_horiz" />
	</button>
)
