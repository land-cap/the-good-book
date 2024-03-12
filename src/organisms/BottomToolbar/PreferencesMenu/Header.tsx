import { Dialog } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { css } from 'styled-system/css'
import { Macrogrid } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'
import { button } from 'styled-system/recipes'

import { Icon, Separator } from '~/components'

import { showFontOptionsAtom } from './preferencesMenu.state'

export const Header = () => {
	const [showFontOptions, setShowFontOptions] = useAtom(showFontOptionsAtom)

	return (
		<Macrogrid>
			<div
				className={hstack({
					gap: '4',
					justify: 'space-between',
					column: 'content',
					h: '14',
				})}
			>
				{showFontOptions && (
					<button
						className={button({ icon: true })}
						onClick={(e) => {
							e.stopPropagation()
							setShowFontOptions(false)
						}}
					>
						<Icon size={6} code="&#xe5c4;" />
					</button>
				)}
				<h2 className={css({ fontWeight: 'bold' })}>
					{showFontOptions ? 'Font' : 'Preferences'}
				</h2>
				<Dialog.CloseTrigger className={button({ icon: true })}>
					<Icon size={6} code="&#xe5cd;" />
				</Dialog.CloseTrigger>
			</div>
			<Separator css={{ column: 'content' }} />
		</Macrogrid>
	)
}
