'use client'

import { useAtomValue } from 'jotai'
import { css } from 'styled-system/css'

import { Separator } from '~/components'
import { type TBook } from '~/db'
import { forceShowControlsAtom } from '~/global.state'
import { BottomToolbarCompressed } from '~/organisms/BottomToolbarScrolled'

import { BottomToolbarContainer } from './BottomToolbarContainer'
import { BottomToolbarExtended } from './BottomToolbarExtended'
import { useShowCompressedBottomToolbar } from './useShowCompressedBottomToolbar'

export const BottomToolbar = ({ bookList }: { bookList: TBook[] }) => {
	const forceShowControls = useAtomValue(forceShowControlsAtom)

	const showCompressedToolbar = useShowCompressedBottomToolbar()

	const showCompressedVersion = showCompressedToolbar

	console.log(forceShowControls)

	return (
		<BottomToolbarContainer>
			<Separator className={css({ column: 'content' })} />
			{showCompressedVersion ? (
				<BottomToolbarExtended bookList={bookList} />
			) : (
				<BottomToolbarCompressed />
			)}
		</BottomToolbarContainer>
	)
}
