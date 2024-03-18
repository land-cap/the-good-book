'use client'

import { Dialog, Portal } from '@ark-ui/react'
import { useSetAtom } from 'jotai'
import { Flex, Macrogrid } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

import { Header, Icon, Menu } from '~/components'
import {
	isPreferencesMenuSuspendedAtom,
	showFontMenuAtom,
	showPreferencesMenuAtom,
} from '~/state'

import { FontOptions } from './FontOptions'

export const FontMenu = () => {
	const setShowFontMenu = useSetAtom(showFontMenuAtom)
	const setIsPreferencesMenuSuspended = useSetAtom(
		isPreferencesMenuSuspendedAtom,
	)
	const setShowPreferencesMenuOpen = useSetAtom(showPreferencesMenuAtom)

	return (
		<Portal>
			<Menu.Positioner>
				<Menu.Content>
					<Flex direction="column">
						<Header
							title="Fonts"
							rightButton={
								<Dialog.CloseTrigger
									className={button({ icon: true })}
									onClick={() => {
										setTimeout(() => {
											setIsPreferencesMenuSuspended(false)
											setShowPreferencesMenuOpen(false)
										}, 150)
									}}
								>
									<Icon size={6} code="&#xe5cd;" />
								</Dialog.CloseTrigger>
							}
							leftButton={
								<button
									className={button({ icon: true })}
									onClick={(e) => {
										e.stopPropagation()
										setShowFontMenu(false)
										setTimeout(() => setIsPreferencesMenuSuspended(false), 150)
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
