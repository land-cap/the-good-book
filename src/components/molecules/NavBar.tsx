import { styled } from 'styled-system/jsx'
import { css } from 'styled-system/css'
import { flex } from 'styled-system/patterns'

const NavBarContainer = styled('nav', {
	base: {
		zIndex: '10',
		pos: 'sticky',
		top: '0',
		mx: 'auto',
		width: 'full',
		maxW: '2xl',
		px: '8',
		bg: 'bg.surface',
	},
})

// TODO: hide below sm after ChapterPicker component is added
// @ts-ignore
const Logo = styled('span', {
	base: {
		fontWeight: 'blacker',
		color: 'fg.subtle',
		'font-variation-settings': "'opsz' 48",
	},
})

export const NavBar = () => (
	<NavBarContainer>
		<div className={css({ borderBottom: '1px solid token(colors.border)' })}>
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
			</div>
		</div>
	</NavBarContainer>
)
