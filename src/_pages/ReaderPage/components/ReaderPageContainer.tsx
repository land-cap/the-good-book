import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'
import { pageCls } from '~/components'

const pageCss_mode_reader = css({ px: { smDown: '10' } })

export const ReaderPageContainer = ({
	children,
	isStudyMode,
}: {
	children: ReactNode
	isStudyMode: boolean
}) => (
	<main className={cx(pageCls, isStudyMode && pageCss_mode_reader)}>
		{children}
	</main>
)
