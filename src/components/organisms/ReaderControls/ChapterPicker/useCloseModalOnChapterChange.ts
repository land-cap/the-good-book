import { usePrevious } from '@mantine/hooks'
import { useEffect } from 'react'

import { type TBook } from '~/db'

export const useCloseModalOnChapterChange = (
	currBook: TBook,
	currChapter: number,
	isModalOpen: boolean,
	closeModal: () => void,
) => {
	const prevBook = usePrevious(currBook)

	const prevChapter = usePrevious(currChapter)

	useEffect(() => {
		if (
			isModalOpen &&
			(prevBook?.id !== currBook.id || prevChapter !== currChapter)
		) {
			closeModal()
		}
	}, [
		closeModal,
		currBook,
		currChapter,
		isModalOpen,
		prevBook?.id,
		prevChapter,
	])
}
