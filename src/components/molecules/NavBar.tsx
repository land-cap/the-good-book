'use client'

import { styled } from 'styled-system/jsx'
import { css } from 'styled-system/css'
import { flex } from 'styled-system/patterns'
import { setPageWidth } from '~/components/Page'
import { Button } from '../atoms'
import { currChapterAtom } from '~/_pages/ReaderPage/reader.state'
import { useAtomValue } from 'jotai'

const NavBarContainer = styled('nav', {
	base: {
		...setPageWidth,
		zIndex: '10',
		pos: 'sticky',
		top: '0',
		bg: 'bg.surface',
	},
})

// TODO: hide below sm after ChapterPicker component is added
// @ts-ignore
const Logo = styled('span', {
	base: {
		textStyle: 'md',
		fontWeight: 'blacker',
		color: 'fg.subtle',
		fontVariationSettings: "'opsz' 48",
	},
})

export const NavBar = () => {
	const currChapter = useAtomValue(currChapterAtom)

	return (
		<NavBarContainer>
			<div
				className={css({
					borderBottom: '1px solid token(colors.border.emphasized)',
				})}>
				<div
					className={flex({
						direction: { base: 'column', sm: 'row' },
						gap: '6',
						justify: 'space-between',
						align: 'center',
						py: { base: '4', sm: '0' },
						h: { sm: '16' },
					})}>
					<Logo>The Good Book</Logo>
					<Button label={currChapter} visual="soft" />
				</div>
			</div>
		</NavBarContainer>
	)
}
