import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '~/components'

export const SectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="my-6 md:my-8 font-bold text-xl md:text-2xl">{children}</h2>
)

export const LargeSectionTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="text-xs md:text-sm font-black tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle">
		{children}
	</h2>
)

export const LargeSectionReference = ({
	children,
}: {
	children: ReactNode
}) => (
	<h3 className="text-xs md:text-sm tracking-[0.05em] leading-[2.25em] md:leading-[2.5em] text-fgSubtle">
		{children}
	</h3>
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
	<span className="inline-flex">
		<Icon
			name="article_shortcut"
			className="p-1 text-fgFaded [font-size:inherit]"
		/>
		<span className="hidden">{referenceList}</span>
	</span>
)
