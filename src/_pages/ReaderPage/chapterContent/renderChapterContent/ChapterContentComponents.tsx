import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'

export const FancyAside = ({ children }: { children: ReactNode }) => (
	<p
		data-component="FancyAside"
		className={css({
			color: 'fg.subtle',
			fontFamily: 'mono',
		})}
	>
		{children}
	</p>
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
			className={cx(
				isStudyMode &&
					css({
						left: '-2',
						position: 'absolute',
						sm: { left: '-3' },
						top: 0,
						transform: 'translateX(-100%)',
					}),
			)}
		>
			{!isStudyMode && ' '}
			<LabelTag
				className={cx(
					css({ color: 'fg.subtle', fontFamily: 'sans', fontStyle: 'normal' }),
					isStudyMode &&
						css({
							fontSize: '0.625rem',
							sm: { fontSize: 'xs' },
						}),
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
	<span data-component="CrossReference" className={css({ cursor: 'pointer' })}>
		&nbsp;
		<sup
			className={css({
				color: 'fg.faded',
				fontFamily: 'sans',
				fontSize: '0.75em',
				fontWeight: '1000',
			})}
		>
			&dagger;
		</sup>
		<div className={css({ display: 'none' })}>{referenceList}</div>
	</span>
)

export const Quote = ({ children }: { children: ReactNode }) => (
	<span
		data-component="Quote"
		className={css({
			display: 'block',
			fontFamily: 'mono',
		})}
	>
		{children}
	</span>
)
