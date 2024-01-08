import { type ReactNode } from 'react'
import { css } from 'styled-system/css'
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
			className={css({
				bg: 'bg.canvas',
				column: '1 / -1',
				position: 'sticky',
				top: '0',
				zIndex: '1',
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
