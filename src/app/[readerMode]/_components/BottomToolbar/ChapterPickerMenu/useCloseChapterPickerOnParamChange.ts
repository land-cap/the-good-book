import { useCallback } from 'react'

import { useOnReaderParamChange } from '../useOnReaderParamChange'

export const useCloseChapterPickerOnParamChange = ({
	currBookCode,
	currChapter,
	isDialogOpen,
	closeDialog,
}: {
	currBookCode: string
	currChapter: number
	isDialogOpen: boolean
	closeDialog: () => void
}) => {
	const handler = useCallback(() => {
		isDialogOpen && closeDialog()
	}, [closeDialog, isDialogOpen])

	useOnReaderParamChange(handler, currBookCode, currChapter)
}
