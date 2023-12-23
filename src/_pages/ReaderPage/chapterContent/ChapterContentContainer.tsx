import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import styles from './ChapterContentContainer.module.css'

export const ChapterContentContainer = ({
	children,
}: {
	children: ReactNode
}) => (
	<div
		className={twMerge(
			styles.chapterContentContainer,
			'col-[content] mt-reader-gap md:mt-reader-gap-md text-base md:text-lg leading-[2em] md:leading-[2.25em]',
		)}
	>
		{children}
	</div>
)
