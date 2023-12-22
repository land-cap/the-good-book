'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ReaderNavButton } from '~/_pages/ReaderPage/components/ReaderNavButton'
import { type ReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { wClassName } from '~/component-helpers'

const ChapterNavLink = wClassName(Link)(twMerge('font-bold underline'))

export const ReaderNavButtons = ({
	bookCode,
	chapter,
	readerMode,
}: ReaderPageParams) => {
	const [readerPageContainerWidth, setReaderPageContainerWidth] = useState(0)

	useEffect(() => {
		const readerPageContainer = document.querySelector(
			'[data-component="ReaderPageContainer"]',
		)
		const ro = new ResizeObserver((entries) => {
			for (const entry of entries) {
				console.log(entry)
				setReaderPageContainerWidth(entry.target.clientWidth)
			}
		})

		// Observe one or multiple elements
		ro.observe(readerPageContainer as unknown as Element)
	}, [])

	return (
		<>
			<ReaderNavButton
				href={`/${readerMode}/${bookCode}/${Number(chapter) - 1}`}
				direction="left"
				className="fixed top-1/2 -translate-x-full -translate-y-1/2"
				style={{
					left: `calc(((100vw - ${readerPageContainerWidth}px) / 2) - 1rem)`,
				}}
			/>
			<ReaderNavButton
				href={`/${readerMode}/${bookCode}/${Number(chapter) + 1}`}
				direction="right"
				className="fixed top-1/2 -translate-y-1/2 translate-x-full"
				style={{
					right: `calc(((100vw - ${readerPageContainerWidth}px) / 2) - 1rem)`,
				}}
			/>
			<div className="mt-[2.5rem] flex justify-between md:mt-[3rem]">
				<ChapterNavLink
					href={`/${readerMode}/${bookCode}/${Number(chapter) - 1}`}
				>
					Previous chapter
				</ChapterNavLink>
				<ChapterNavLink
					href={`/${readerMode}/${bookCode}/${Number(chapter) + 1}`}
				>
					Next chapter
				</ChapterNavLink>
			</div>
		</>
	)
}
