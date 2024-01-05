import { type Dispatch, type SetStateAction, useEffect } from 'react'

import { type TChapterPickerTab } from './ChapterPicker'

export const useDisableBodyScrollWhileDialogIsOpen = ({
	isDialogOpen,
	setTab,
}: {
	isDialogOpen: boolean
	setTab: Dispatch<SetStateAction<TChapterPickerTab>>
}) =>
	useEffect(() => {
		if (isDialogOpen) {
			document.body.style.overflow = 'clip'
		} else {
			document.body.style.overflow = 'auto'
			setTab('book')
		}
	}, [isDialogOpen, setTab])
