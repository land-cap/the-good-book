import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { flex } from 'styled-system/patterns'
import { setPageWidth } from '~/components/Page'

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

const ChapterPickerTrigger = styled('input', {
	base: {
		display: 'inline-flex',
		borderWidth: '1',
		borderStyle: 'solid',
		borderColor: 'border.emphasized',
		bg: 'bg.surface',
		py: '1.5',
		pl: '3',
		pr: '10',
		color: 'fg',
	},
})

export const NavBar = ({
	bookName,
	chapter,
}: {
	bookName: string
	chapter: string
}) => (
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
				{/*<ChapterPickerTrigger value={`${bookName} ${chapter}`} />*/}
			</div>
		</div>
	</NavBarContainer>
)
