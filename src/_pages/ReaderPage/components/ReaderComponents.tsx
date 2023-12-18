import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '~/components'

export const LargeSectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="rc-large-section-title text-xs md:text-sm font-black tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle">
		{children}
	</h2>
)

export const LargeSectionReference = ({
	children,
}: {
	children: ReactNode
}) => (
	<h3 className="rc-large-section-reference text-xs md:text-sm tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle">
		{children}
	</h3>
)

export const SectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="rc-section-title my-6 md:my-8 font-bold text-xl md:text-2xl">
		{children}
	</h2>
)

export const Paragraph = ({ children }: { children: ReactNode }) => (
	<p className={twMerge('rc-paragraph')}>{children}</p>
)

export const Verse = ({
	children,
	isStudyMode,
}: {
	children: ReactNode
	isStudyMode: boolean
}) => (
	<span className={twMerge('rc-verse', isStudyMode && 'block relative')}>
		{children}
	</span>
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
				{children}
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
		<span className="inline-flex translate-y-[0.1em] -m-1 p-1">
			<Icon
				name="article_shortcut"
				size={16}
				className="text-fgFaded cursor-pointer"
			/>
		</span>
		<span className="hidden">{referenceList}</span>
	</span>
)

export const JesusWords = ({ children }: { children: ReactNode }) => (
	<span className={twMerge('rc-jesus-words text-red-700')}>{children}</span>
)

export const Quote = ({ children }: { children: ReactNode }) => (
	<span className={twMerge('rc-quote font-mono [&>.rc-verse]:block')}>
		{children}
	</span>
)
