'use client'

import { useAtomValue } from 'jotai'
import { hstack, subgrid } from 'styled-system/patterns'

import { nextChapterUrlAtom, prevChapterUrlAtom } from '~/state'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { ChapterPickerMenuRoot } from './ChapterPickerMenu'
import { ReaderNavButton } from './ReaderNavButton'
import { ReturnFromReferenceFab } from './ReturnFromReferenceFab'

export const BottomToolbar = () => {
	const prevChapterUrl = useAtomValue(prevChapterUrlAtom)
	const nextChapterUrl = useAtomValue(nextChapterUrlAtom)

	return (
		<BottomToolbarContainer>
			<div
				className={subgrid({
					column: 'content',
					pos: 'relative',
					pb: 'safe_area_bottom',
				})}
			>
				<ReturnFromReferenceFab />
				<div
					className={hstack({
						gap: '0',
						h: '14',
					})}
				>
					<ReaderNavButton url={prevChapterUrl} direction="left" />
					<ChapterPickerMenuRoot />
					<ReaderNavButton url={nextChapterUrl} direction="right" />
				</div>
			</div>
		</BottomToolbarContainer>
	)
}
