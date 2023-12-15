import { type ReactNode } from 'react'

export const SectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="my-6 md:my-8 text-xl md:text-2xl">{children}</h2>
)

export const LargeSectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="text-xs md:text-sm font-black tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle">
		{children}
	</h2>
)

export const VerseLabel = ({ children }: { children: ReactNode }) => (
	<span className="text-[0.75em] font-mono text-fgSubtle">
		{' '}
		{children}
		<span className="font-sans text-base md:text-lg leading-[2.25em] md:leading-[2.5em]">
			{' '}
		</span>
	</span>
)
