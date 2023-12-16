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
	<div className="flex justify-between my-8 md:my-12">
		<ChapterNavLink href={`/${readerMode}/${bookCode}/${Number(chapter) - 1}`}>
			Previous chapter
		</ChapterNavLink>
		<ChapterNavLink href={`/${readerMode}/${bookCode}/${Number(chapter) + 1}`}>
			Next chapter
		</ChapterNavLink>
	</div>
)
