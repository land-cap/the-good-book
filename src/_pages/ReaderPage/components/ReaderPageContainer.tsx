import { css, cx } from 'styled-system/css'
import { type ReactNode } from 'react'
import { pageCss } from '~/components'

const pageCss_mode_reader = css({ px: { smDown: '10' } })

export const ReaderPageContainer = ({
	children,
	isStudyMode,
}: {
	children: ReactNode
	isStudyMode: boolean
}) => (
	<main className={cx(pageCss, isStudyMode && pageCss_mode_reader)}>
		{children}
	</main>
)
