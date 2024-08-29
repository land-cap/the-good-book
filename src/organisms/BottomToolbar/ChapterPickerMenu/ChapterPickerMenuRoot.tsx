'use client'

import { Dialog, type DialogProps } from '@ark-ui/react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { equals } from 'ramda'
import { useEffect, useRef } from 'react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

import type { TReaderPageParams } from '~/_pages'
import { currBookAtom, currChapterAtom, isScrollLockedAtom } from '~/state'

import { ChapterPickerMenu } from './ChapterPickerMenu'
import {
	activeTabAtom,
	selectedBookIdAtom,
	showChapterPickerMenu,
} from './chapterPickerMenu.state'

export const ChapterPickerMenuRoot = () => {
	const setTab = useSetAtom(activeTabAtom)

	const [showMenu, setShowMenu] = useAtom(showChapterPickerMenu)

	const setIsBodyScrollLocked = useSetAtom(isScrollLockedAtom)

	useEffect(
		() => setIsBodyScrollLocked(showMenu),
		[showMenu, setIsBodyScrollLocked],
	)

	const currBook = useAtomValue(currBookAtom)

	const setSelectedBookId = useSetAtom(selectedBookIdAtom)

	const params = useParams<TReaderPageParams>()

	const paramsValueWhenDialogOpened = useRef(params)

	const currChapter = useAtomValue(currChapterAtom)

	const handleDialogExitComplete = () => {
		const hasParamsChanged = !equals(
			paramsValueWhenDialogOpened.current,
			params,
		)
		setTab('book')
		if (hasParamsChanged) {
			document.body.scrollIntoView({ behavior: 'instant' })
		}
	}

	const handleOpenChange: DialogProps['onOpenChange'] = ({ open }) => {
		setShowMenu(open)

		if (open) {
			setSelectedBookId(currBook.id)
			paramsValueWhenDialogOpened.current = params
		}
	}

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
			<Dialog.Trigger
				className={cx(button(), css({ h: 'full', flexGrow: 1 }))}
				onClick={() => setShowMenu(true)}
			>
				{currBook.book_name?.value} {currChapter}
			</Dialog.Trigger>
			<ChapterPickerMenu />
		</Dialog.Root>
	)
}
