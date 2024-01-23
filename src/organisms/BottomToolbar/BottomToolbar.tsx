'use client'

import { css } from 'styled-system/css'

import { Separator } from '~/components'
import { type TBook } from '~/db'
import { useShowBottomToolbar } from '~/organisms/BottomToolbar/useShowBottomToolbar'
import { BottomToolbarScrolled } from '~/organisms/BottomToolbarScrolled'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { BottomToolbarExtended } from './BottomToolbarExtended'

export const BottomToolbar = ({ bookList }: { bookList: TBook[] }) => (
	<BottomToolbarContainer>
		<Separator className={css({ column: 'content' })} />
		{useShowBottomToolbar() ? (
			<BottomToolbarExtended bookList={bookList} />
		) : (
			<BottomToolbarScrolled />
		)}
	</BottomToolbarContainer>
)
