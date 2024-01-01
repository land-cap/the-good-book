'use client'

import { useSetAtom } from 'jotai'
import { type ReactNode, useEffect } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { readerPageContainerElAtom } from '../_readerPage.state'

export const ReaderPageContainer = ({ children }: { children: ReactNode }) => {
	const setReaderPageContainerEl = useSetAtom(readerPageContainerElAtom)

	useEffect(() => {
		document.addEventListener('scroll', (...args) => {
			console.log(args)
		})
	}, [])

	return (
		<div
			ref={setReaderPageContainerEl}
			className={macrogrid({
				column: 'fullbleed',
				gridAutoRows: 'min-content',
				gridRow: '1fr',
				h: 'full',
				overflow: 'scroll',
			})}
		>
			{children}
		</div>
	)
}
