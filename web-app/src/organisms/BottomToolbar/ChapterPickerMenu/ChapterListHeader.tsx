import { type ReactNode } from 'react'
import { caption } from 'styled-system/patterns'

import { Separator } from '~/components'

export const ChapterListHeader = ({
	children,
	chapterListItemHeight,
}: {
	children: ReactNode
	chapterListItemHeight: number
}) => {
	const marginBottom = (chapterListItemHeight - 16) / 2

	return (
		<div
			className={caption({
				column: '1 / -1',
				zIndex: '1',
				pos: 'sticky',
				top: '0',
				bg: 'bg.canvas',
			})}
			style={{ marginBottom }}
		>
			<div
				className={caption({
					py: '4',
				})}
			>
				{children}
			</div>
			<Separator />
		</div>
	)
}
