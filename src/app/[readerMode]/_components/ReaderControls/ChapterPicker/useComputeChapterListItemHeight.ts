import { useEffect, useRef, useState } from 'react'

export const useComputeChapterListItemHeight = () => {
	const chapterListItemRef = useRef<HTMLLIElement>()

	const [chapterListItemHeight, setChapterListItemHeight] = useState<number>(0)

	useEffect(() => {
		const handleWindowResize = () => {
			chapterListItemRef.current &&
				setChapterListItemHeight(
					chapterListItemRef.current?.getBoundingClientRect().height,
				)
		}
		window.addEventListener('resize', handleWindowResize)
		return () => window.removeEventListener('resize', handleWindowResize)
	}, [])

	const refCallback = (el: HTMLLIElement) => {
		if (el) {
			chapterListItemRef.current = el
			const height = el.getBoundingClientRect().height
			setChapterListItemHeight(height)
		}
	}

	return { chapterListItemHeight, chapterListItemRef: refCallback } as const
}
