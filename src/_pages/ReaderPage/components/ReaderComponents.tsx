import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const LargeSectionTitle = ({ children }: { children: ReactNode }) => (
	<h2
		className={twMerge(
			'rc-large-section-title text-xs md:text-sm font-black tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle',
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
		className={twMerge(
			'rc-large-section-reference text-xs font-black md:text-sm tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle',
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
		className={twMerge(
			'rc-large-section-cross-reference text-xs md:text-sm leading-[2.25em] md:leading-[2.5em] text-fgSubtle',
		)}
	>
		{children}
	</h4>
)

export const SectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="rc-section-title text-lg font-bold md:text-xl">{children}</h2>
)

export const FancyAside = ({ children }: { children: ReactNode }) => (
	<h2 className={twMerge('rc-fancy-aside font-mono italic text-fgSubtle')}>
		{children}
	</h2>
)

export const Paragraph = ({ children }: { children: ReactNode }) => (
	<p className={twMerge('rc-paragraph')}>{children}</p>
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
			className={twMerge(
				'rc-verse-label',
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
	<span className="rc-cross-reference">
		&nbsp;
		<sup className="font-sans text-[0.75em] text-fgFaded [font-weight:1000]">
			&dagger;
		</sup>
		<span className="hidden">{referenceList}</span>
	</span>
)

export const JesusWords = ({ children }: { children: ReactNode }) => (
	<span className={twMerge('rc-jesus-words text-red-600 dark:text-red-400')}>
		{children}
	</span>
)

export const Quote = ({ children }: { children: ReactNode }) => (
	<span className={twMerge('rc-quote block font-mono scroll-mt-[65px]')}>
		{children}
	</span>
)
