import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const SectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="my-6 md:my-8 font-bold text-xl md:text-2xl">{children}</h2>
)

export const LargeSectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="text-xs md:text-sm font-black tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle">
		{children}
	</h2>
)

export const VerseLabel = ({
	children,
	isStudyMode,
}: {
	children: ReactNode
	isStudyMode: boolean
}) => {
	const LabelTag = isStudyMode ? 'span' : 'sup'

	return (
		<span
			className={twMerge(
				'verse-label-container',
				isStudyMode && 'absolute -left-2 sm:-left-4 top-0 -translate-x-full',
			)}
		>
			{!isStudyMode && ' '}
			<LabelTag
				className={twMerge(
					'verse-label text-[0.75em] font-mono text-fgSubtle',
					isStudyMode && 'text-[0.625rem] sm:text-[0.75em]',
				)}
			>
				{children}
			</LabelTag>
			{!isStudyMode && ' '}
		</span>
	)
}
