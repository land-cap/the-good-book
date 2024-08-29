'use client'

import { Dialog, type DialogProps } from '@ark-ui/react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { equals } from 'ramda'
import { useEffect, useRef } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import {
	currBookAtom,
	currBookCodeAtom,
	currChapterAtom,
	isScrollLockedAtom,
} from '~/state'

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
	const currBookCode = useAtomValue(currBookCodeAtom)
	const currChapter = useAtomValue(currChapterAtom)
	const currBook = useAtomValue(currBookAtom)
	const setSelectedBookId = useSetAtom(selectedBookIdAtom)

	useEffect(
		() => setIsBodyScrollLocked(showMenu),
		[showMenu, setIsBodyScrollLocked],
	)

	const bookCodeWhenChapterOpened = useRef(currBookCode)
	const chapterWhenMenuOpened = useRef(currChapter)

	const handleDialogExitComplete = () => {
		setTab('book')
		const hasReaderNavigated =
			!equals(bookCodeWhenChapterOpened.current, currBookCode) ||
			!equals(chapterWhenMenuOpened.current, currChapter)
		if (hasReaderNavigated) {
			document.body.scrollIntoView({ behavior: 'instant' })
		}
	}

	const handleOpenChange: DialogProps['onOpenChange'] = ({ open }) => {
		setShowMenu(open)
		if (open) {
			setSelectedBookId(currBook.id)
			bookCodeWhenChapterOpened.current = currBookCode
			chapterWhenMenuOpened.current = currChapter
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
