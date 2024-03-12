'use client'

import { Portal } from '@ark-ui/react'
import { useAtomValue } from 'jotai'
import { Flex, Macrogrid } from 'styled-system/jsx'

import { Menu } from '~/components'

import { FontOptions } from './FontOptions'
import { Header } from './Header'
import { Preferences } from './Preferences'
import { showFontOptionsAtom } from './preferencesMenu.state'

export const PreferencesMenu = () => {
	const showFontOptions = useAtomValue(showFontOptionsAtom)

	return (
		<Portal>
			<Menu.Backdrop opacity="1/2" />
			<Menu.Positioner css={{ h: 'content' }}>
				<Menu.Container
					css={{
						h: 'content',
						maxH: 'calc(100dvh * 2 / 3)',
						borderTopWidth: '1px',
						borderColor: 'border',
					}}
				>
					<Flex direction="column" h="fit-content" maxH="calc(100dvh * 2 / 3)">
						<Header />
						<Macrogrid
							direction="column"
							overflow="auto"
							overscrollBehavior="contain"
							h="fit-content"
						>
							{showFontOptions ? <FontOptions /> : <Preferences />}
						</Macrogrid>
					</Flex>
				</Menu.Container>
			</Menu.Positioner>
		</Portal>
	)
}
