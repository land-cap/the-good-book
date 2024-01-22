import { type ReactNode } from 'react'

import { Footer } from './_components/Footer'

const Layout = ({ children }: { children: ReactNode }) => (
	<>
		{children}
		<Footer />
	</>
)

export default Layout
