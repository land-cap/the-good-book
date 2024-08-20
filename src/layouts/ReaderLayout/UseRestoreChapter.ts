'use client'

import { useAtom } from 'jotai'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useIsInitialRender } from '~/hooks'
import { currChapterUrlAtom } from '~/state'

export const UseRestoreChapter = () => {
	const [currChapterUrl, setCurrChapterUrl] = useAtom(currChapterUrlAtom)

	const router = useRouter()

	const isInitialRender = useIsInitialRender()

	useEffect(() => {
		isInitialRender && router.push(currChapterUrl)
	}, [currChapterUrl, isInitialRender, router])

	const pathname = usePathname()

	useEffect(() => {
		!isInitialRender &&
			pathname !== currChapterUrl &&
			setCurrChapterUrl(pathname)
	}, [currChapterUrl, isInitialRender, pathname, setCurrChapterUrl])

	return null
}
