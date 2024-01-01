'use client'

import { useSetAtom } from 'jotai'
import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { readerPageContainerElAtom } from '../_readerPage.state'

export const ReaderPageContainer = ({ children }: { children: ReactNode }) => {
	const setReaderPageContainerEl = useSetAtom(readerPageContainerElAtom)

	return (
		<div
			ref={setReaderPageContainerEl}
			className={macrogrid({
				// fixes jagged scroll on chrome
				backfaceVisibility: 'hidden',
				column: 'fullbleed',
				gridAutoRows: 'min-content',
				gridRow: '1fr',
				h: 'full',
				overflow: 'scroll',
				transform: 'translate3d(0,0,0)',
			})}
		>
			{children}
		</div>
	)
}
