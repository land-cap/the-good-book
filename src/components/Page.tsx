import { type ReactNode } from 'react'
import { flex } from '../../styled-system/patterns'

const pageStyle = flex({
	flexGrow: 1,
	marginX: 'auto',
	width: 'full',
	maxWidth: '2xl',
	paddingX: '8',
})

export const Page = ({ children }: { children: ReactNode }) => (
	<div className={pageStyle}>{children}</div>
)
