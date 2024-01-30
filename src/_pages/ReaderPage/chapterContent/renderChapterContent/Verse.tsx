'use client'

import { useAtomValue } from 'jotai/index'
import type { ReactNode } from 'react'
import { css, cx } from 'styled-system/css'

import { verseBreaksLineAtom } from '~/state'

export const Verse = ({ children }: { children: ReactNode }) => {
	const verseBreaksLine = useAtomValue(verseBreaksLineAtom)

	return (
		<span
			data-component="Verse"
			className={cx(
				verseBreaksLine &&
					css({
						cursor: 'text',
						display: 'block',
						pos: 'relative',
					}),
			)}
		>
			{children}
		</span>
	)
}
