import { type ReactNode } from 'react'
import { css, cx } from 'styled-system/css'

import { labelCss } from '~/styles/label.css'

import { Separator } from '../../../../../../../components'

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
				className={cx(
					labelCss,
					css({
						py: '4',
					}),
				)}
			>
				{children}
			</div>
			<Separator />
		</div>
	)
}