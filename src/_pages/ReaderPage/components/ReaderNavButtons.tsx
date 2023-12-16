'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { type ReaderPageParams } from '~/_pages/ReaderPage/ReaderPage.types'
import { styled } from '~/component-helpers'

const ChapterNavLink = styled(Link)(twMerge('font-bold underline'))

export const ReaderNavButtons = ({
	bookCode,
	chapter,
	readerMode,
}: ReaderPageParams) => (
	<div className="flex justify-between my-8 md:my-12">
		<ChapterNavLink href={`/${bookCode}/${Number(chapter) - 1}/${readerMode}`}>
			Previous chapter
		</ChapterNavLink>
		<ChapterNavLink href={`/${bookCode}/${Number(chapter) + 1}/${readerMode}`}>
			Next chapter
		</ChapterNavLink>
	</div>
)
