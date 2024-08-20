import type { ReactNode } from 'react'

import { UseRestoreChapter } from '~/layouts/ReaderLayout/UseRestoreChapter'

import { Footer } from './Footer'

export const ReaderLayout = ({ children }: { children: ReactNode }) => (
	<>
		<UseRestoreChapter />
		{children}
		<Footer />
	</>
)
