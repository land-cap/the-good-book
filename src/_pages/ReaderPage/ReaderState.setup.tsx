'use client'

import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useHydrateAtoms } from 'jotai/utils'
import { readerMode } from './reader.state'
import { useAtom } from 'jotai'
import { type ReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'

export const ReaderStateSetup = () => {
	const { mode } = useParams<ReaderPageParams>()
	useHydrateAtoms([[readerMode, mode]])

	const [isStudyMode] = useAtom(readerMode)

	useEffect(() => {
		console.log({ isStudyMode })
	}, [isStudyMode])
	return null
}
