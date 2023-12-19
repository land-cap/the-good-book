'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { type ReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { wClassName } from '~/component-helpers'

const ChapterNavLink = wClassName(Link)(twMerge('font-bold underline'))

export const ReaderNavButtons = ({
	bookCode,
	chapter,
	readerMode,
}: ReaderPageParams) => (
	<div className="mt-[2.5rem] flex justify-between md:mt-[3rem]">
		<ChapterNavLink href={`/${readerMode}/${bookCode}/${Number(chapter) - 1}`}>
			Previous chapter
		</ChapterNavLink>
		<ChapterNavLink href={`/${readerMode}/${bookCode}/${Number(chapter) + 1}`}>
			Next chapter
		</ChapterNavLink>
	</div>
)
