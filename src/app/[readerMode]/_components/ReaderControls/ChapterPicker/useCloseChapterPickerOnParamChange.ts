import { useCallback } from 'react'

import { useOnReaderParamChange } from '../useOnReaderParamChange'

export const useCloseChapterPickerOnParamChange = (
	currBookCode: string,
	currChapter: number,
	isModalOpen: boolean,
	closeModal: () => void,
) => {
	const handler = useCallback(() => {
		isModalOpen && closeModal()
	}, [closeModal, isModalOpen])

	useOnReaderParamChange(handler, currBookCode, currChapter)
}