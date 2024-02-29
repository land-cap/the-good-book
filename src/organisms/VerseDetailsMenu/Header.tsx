import { Dialog } from '@ark-ui/react'
import { css } from 'styled-system/css'
import { Macrogrid } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon, Separator } from '~/components'

export const Header = ({ title }: { title: string }) => (
	<Macrogrid>
		<div
			className={hstack({
				column: 'content',
				h: '14',
				justify: 'space-between',
			})}
		>
			<h2 className={css({ fontWeight: 'bold' })}>{title}</h2>
			<Dialog.CloseTrigger className={button({ icon: true })}>
				<Icon size={6} name="close" />
			</Dialog.CloseTrigger>
		</div>
		<Separator css={{ column: 'content' }} />
	</Macrogrid>
)
