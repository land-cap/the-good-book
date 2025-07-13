import { useWindowEvent } from '@mantine/hooks'
import { useCallback, useRef, useState } from 'react'

export const useComputeChapterListItemHeight = () => {
	const chapterListItemRef = useRef<HTMLLIElement>()

	const [chapterListItemHeight, setChapterListItemHeight] = useState<number>(0)

	const handleWindowResize = useCallback(() => {
		chapterListItemRef.current &&
			setChapterListItemHeight(
				chapterListItemRef.current?.getBoundingClientRect().height,
			)
	}, [])

	useWindowEvent('resize', handleWindowResize)

	const refCallback = (el: HTMLLIElement) => {
		if (el) {
			chapterListItemRef.current = el
			const height = el.getBoundingClientRect().height
			setChapterListItemHeight(height)
		}
	}

	return { chapterListItemHeight, chapterListItemRef: refCallback } as const
}
