import { type Dispatch, type SetStateAction, useEffect } from 'react'

import { type TChapterPickerTab } from './ChapterPicker'

export const useDisableBodyScrollWhileModalOpen = ({
	isModalOpen,
	setTab,
}: {
	isModalOpen: boolean
	setTab: Dispatch<SetStateAction<TChapterPickerTab>>
}) =>
	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'clip'
		} else {
			document.body.style.overflow = 'auto'
			setTab('book')
		}
	}, [isModalOpen, setTab])
