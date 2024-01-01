'use client'

import { useSetAtom } from 'jotai'
import { type ReactNode } from 'react'
import { macrogrid } from 'styled-system/patterns'

import { pageContainerElAtom } from '~/components/organisms/ReaderControls/useResetReaderScrollOnParamChange'

export const PageContainer = ({ children }: { children: ReactNode }) => {
	const setPageContainerEl = useSetAtom(pageContainerElAtom)

	return (
		<div
			ref={setPageContainerEl}
			className={macrogrid({
				column: 'fullbleed',
				gridAutoRows: 'min-content',
				gridRow: '1fr',
				h: 'full',
				overflowY: 'scroll',
			})}
		>
			{children}
		</div>
	)
}
