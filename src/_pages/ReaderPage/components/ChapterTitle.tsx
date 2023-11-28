'use client'

import { chapterTitleStyles } from '~/_pages/ReaderPage/reader.styles'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { currChapterAtom } from '~/_pages/ReaderPage/reader.state'

export const ChapterTitle = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => {
	const [currChapter, setCurrChapter] = useAtom(currChapterAtom)

	useEffect(() => {
		setCurrChapter(`${bookName} ${chapter}`)
	}, [bookName, chapter, setCurrChapter])

	return <h1 className={chapterTitleStyles}>{currChapter}</h1>
}
