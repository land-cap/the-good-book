import { Portal } from '@ark-ui/react'
import { useAtom } from 'jotai'
import { css } from 'styled-system/css'
import { macrogrid } from 'styled-system/patterns'

import { FullscreenMenu } from '~/components'

import { BookTabView } from './BookTabView'
import {
	activeTabAtom,
	type TChapterPickerTab,
} from './chapterPickerMenu.state'
import { TabsContent, TabsRoot } from './ChapterPickerMenu.styles'
import { ChapterTabView } from './ChapterTabView'
import { Header } from './Header'

export const ChapterPickerMenu = () => {
	const [activeTab, setActiveTab] = useAtom(activeTabAtom)

	return (
		<Portal>
			<FullscreenMenu.Positioner>
				<FullscreenMenu.Content>
					<TabsRoot
						value={activeTab}
						onValueChange={({ value }) =>
							setActiveTab(value as TChapterPickerTab)
						}
					>
						<Header />
						<TabsContent
							value="book"
							className={css({
								pb: 'calc(token(spacing.4) + token(spacing.safe_area_bottom))',
							})}
						>
							<BookTabView />
						</TabsContent>
						<TabsContent value="chapter" className={macrogrid()}>
							<ChapterTabView />
						</TabsContent>
					</TabsRoot>
				</FullscreenMenu.Content>
			</FullscreenMenu.Positioner>
		</Portal>
	)
}
