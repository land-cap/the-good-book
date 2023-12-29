import { type ReactNode } from 'react'

const Layout = ({
	children,
	readerControls,
}: {
	children: ReactNode
	readerControls: ReactNode
}) => (
	<>
		{children}
		{readerControls}
	</>
)

export default Layout
