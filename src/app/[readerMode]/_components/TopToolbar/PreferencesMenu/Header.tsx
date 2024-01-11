import { Dialog } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { hstack, macrogrid } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon, Separator } from '~/components'

export const Header = () => (
	<div className={macrogrid()}>
		<div className={css({ column: 'content' })}>
			<div className={hstack({ h: '14', justify: 'space-between' })}>
				<h2 className={css({ fontWeight: 'bold' })}>Preferences</h2>
				<Dialog.CloseTrigger className={button({ icon: true })}>
					<Icon size={6} name="close" />
				</Dialog.CloseTrigger>
			</div>
		</div>
		<Separator css={{ column: 'content' }} />
	</div>
)
