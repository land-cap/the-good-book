'use client'

import { Dialog, type DialogProps } from '@ark-ui/react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import { currBookAtom, currChapterAtom, isScrollLockedAtom } from '~/state'

import { ChapterPickerMenu } from './ChapterPickerMenu'
import {
	activeTabAtom,
	selectedBookIdAtom,
	showChapterPickerMenu,
} from './chapterPickerMenu.state'

const triggerCls = cx(button(), css({ h: 'full', flexGrow: 1 }))

export const ChapterPickerMenuRoot = () => {
	const [showMenu, setShowMenu] = useAtom(showChapterPickerMenu)
	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)
	const setTab = useSetAtom(activeTabAtom)
	const currChapter = useAtomValue(currChapterAtom)
	const currBook = useAtomValue(currBookAtom)
	const setSelectedBookId = useSetAtom(selectedBookIdAtom)

	useEffect(
		() => setIsBodyScrollLocked(showMenu),
		[showMenu, setIsBodyScrollLocked],
	)

	const handleDialogExitComplete = () => {
		setTab('book')
	}

	const handleOpenChange: DialogProps['onOpenChange'] = ({ open }) => {
		setShowMenu(open)
		if (open) {
			setSelectedBookId(currBook.id)
		}
	}

	const triggerLabel = `${currBook.book_name!.value} ${currChapter}`

	return (
		<Dialog.Root
			id="chapter-picker-menu"
			trapFocus
			lazyMount
			unmountOnExit
			preventScroll={false}
			open={showMenu}
			onOpenChange={handleOpenChange}
			onExitComplete={handleDialogExitComplete}
		>
			<Dialog.Trigger className={triggerCls} onClick={() => setShowMenu(true)}>
				{triggerLabel}
			</Dialog.Trigger>
			<ChapterPickerMenu />
		</Dialog.Root>
	)
}
