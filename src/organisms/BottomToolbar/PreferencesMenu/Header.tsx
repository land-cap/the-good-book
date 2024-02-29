import { Dialog } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { Macrogrid } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon, Separator } from '~/components'

export const Header = () => (
	<Macrogrid>
		<div
			className={hstack({
				justify: 'space-between',
				column: 'content',
				h: '14',
			})}
		>
			<h2 className={css({ fontWeight: 'bold' })}>Preferences</h2>
			<Dialog.CloseTrigger className={button({ icon: true })}>
				<Icon size={6} name="close" />
			</Dialog.CloseTrigger>
		</div>
		<Separator css={{ column: 'content' }} />
	</Macrogrid>
)
