import { usePrevious } from '@mantine/hooks'
import { useEffect } from 'react'

export const useOnReaderParamChange = (
	handler: () => void,
	bookCode: string,
	currChapter: number,
) => {
	const prevBookCode = usePrevious(bookCode)

	const prevChapter = usePrevious(currChapter)

	useEffect(() => {
		if (prevBookCode !== bookCode || prevChapter !== currChapter) {
			handler()
		}
	}, [bookCode, currChapter, handler, prevBookCode, prevChapter])
}
