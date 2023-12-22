import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const LargeSectionTitle = ({ children }: { children: ReactNode }) => (
	<h2
		data-component="LargeSectionTitle"
		className={twMerge(
			'text-xs md:text-sm tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle select-none',
		)}
	>
		{children}
	</h2>
)

export const LargeSectionReference = ({
	children,
}: {
	children: ReactNode
}) => (
	<h3
		data-component="LargeSectionReference"
		className={twMerge(
			'text-xs md:text-sm tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle select-none',
		)}
	>
		({children})
	</h3>
)

export const LargeSectionCrossReference = ({
	children,
}: {
	children: ReactNode
}) => (
	<h4
		data-component="LargeSectionCrossReference"
		className={twMerge(
			'text-xs md:text-sm leading-[2.25em] md:leading-[2.5em] text-fgSubtle select-none',
		)}
	>
		{children}
	</h4>
)

export const SectionTitle = ({ children }: { children: ReactNode }) => (
	<h2
		data-component="SectionTitle"
		className="select-none text-[1.25em] text-fgSubtle"
	>
		{children}
	</h2>
)

export const FancyAside = ({ children }: { children: ReactNode }) => (
	<h2
		data-component="FancyAside"
		className={twMerge('font-mono italic text-fgSubtle select-none')}
	>
		{children}
	</h2>
)

export const Paragraph = ({ children }: { children: ReactNode }) => (
	<p data-component="Paragraph">{children}</p>
)

export const VerseLabel = ({
	verseNumber,
	isStudyMode,
}: {
	verseNumber: ReactNode
	isStudyMode: boolean
}) => {
	const LabelTag = isStudyMode ? 'span' : 'sup'

	return (
		<span
			data-component="VerseLabel"
			className={twMerge(
				'select-none',
				isStudyMode && 'absolute -left-2 sm:-left-3 top-0 -translate-x-full',
			)}
		>
			{!isStudyMode && ' '}
			<LabelTag
				className={twMerge(
					'text-[0.75em] font-mono text-fgSubtle',
					isStudyMode && 'text-[0.625rem] sm:text-[0.75em]',
				)}
			>
				{verseNumber}
			</LabelTag>
			{!isStudyMode && <>&nbsp;</>}
		</span>
	)
}

export const CrossReference = ({
	referenceList,
}: {
	referenceList: string
	isStudyMode: boolean
}) => (
	<span data-component="CrossReference" className="cursor-pointer select-none">
		&nbsp;
		<sup className="font-sans text-[0.75em] text-fgFaded [font-weight:1000]">
			&dagger;
		</sup>
		<span className="hidden">{referenceList}</span>
	</span>
)

export const JesusWords = ({ children }: { children: ReactNode }) => (
	<span
		data-component="JesusWords"
		className={twMerge('text-red-600 dark:text-red-400')}
	>
		{children}
	</span>
)

export const Quote = ({ children }: { children: ReactNode }) => (
	<span data-component="Quote" className={twMerge('block font-mono')}>
		{children}
	</span>
)
