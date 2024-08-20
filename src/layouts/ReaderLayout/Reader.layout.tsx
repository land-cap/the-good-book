import type { ReactNode } from 'react'

import { Footer } from './Footer'

export const ReaderLayout = ({ children }: { children: ReactNode }) => (
	<>
		{children}
		<Footer />
	</>
)
