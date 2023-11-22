'use client'

import { isStudyModeAtom } from '../reader.state'
import { useAtom } from 'jotai'
import { css, cx } from 'styled-system/css'
import { type ReactNode } from 'react'
import { pageCss } from '~/components'

const pageCss_mode_reader = css({ pl: { smDown: '14' } })

export const ReaderPageContainer = ({ children }: { children: ReactNode }) => {
	const [isStudyMode] = useAtom(isStudyModeAtom)

	return (
		<main className={cx(pageCss, isStudyMode && pageCss_mode_reader)}>
			{children}
		</main>
	)
}
