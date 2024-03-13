'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { Flex, Macrogrid } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

import { Header, Icon, Menu } from '~/components'
import { showPreferencesMenu } from '~/state'

import { showFontOptionsAtom } from '../preferencesMenu.state'
import { FontOptions } from './FontOptions'

export const FontOptionsMenu = () => {
	const setShowPreferencesMenu = useSetAtom(showPreferencesMenu)
	const setShowFontOptions = useSetAtom(showFontOptionsAtom)

	return (
		<Portal>
			<Menu.Backdrop />
			<Menu.Positioner>
				<Menu.Content>
					<Flex direction="column">
						<Header
							title="Fonts"
							rightButton={
								<Dialog.CloseTrigger className={button({ icon: true })}>
									<Icon size={6} code="&#xe5cd;" />
								</Dialog.CloseTrigger>
							}
							leftButton={
								<button
									className={button({ icon: true })}
									onClick={(e) => {
										e.stopPropagation()
										setShowFontOptions(false)
										setTimeout(() => setShowPreferencesMenu(true), 150)
									}}
								>
									<Icon size={6} code="&#xe5c4;" />
								</button>
							}
						/>
						<Macrogrid
							direction="column"
							overflow="auto"
							overscrollBehavior="contain"
							h="fit-content"
						>
							<FontOptions />
						</Macrogrid>
					</Flex>
				</Menu.Content>
			</Menu.Positioner>
		</Portal>
	)
}
