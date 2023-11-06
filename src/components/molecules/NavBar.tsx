import { styled } from '../../../styled-system/jsx'
import { css } from '../../../styled-system/css'
import { flex } from '../../../styled-system/patterns'

const NavBarContainer = styled('nav', {
	base: {
		zIndex: '10',
		position: 'sticky',
		top: '0',
		marginX: 'auto',
		width: 'full',
		maxWidth: '2xl',
		paddingX: '8',
		background: 'white',
	},
})

const Logo = styled('span', {
	base: {
		display: {
			// TODO: hide below sm after ChapterPicker component is added
			// base: 'none',
			sm: 'block',
		},
		fontWeight: 'blacker',
		color: 'neutral.500',
	},
})

export const NavBar = () => (
	<NavBarContainer>
		<div
			className={css({ borderBottom: '1px solid token(colors.neutral.200)' })}>
			<div
				className={flex({
					direction: { base: 'column', sm: 'row' },
					gap: '6',
					justify: 'space-between',
					align: 'center',
					paddingY: { base: '4', sm: '0' },
					height: { sm: '16' },
				})}>
				<Logo>The Good Book</Logo>
			</div>
		</div>
	</NavBarContainer>
)
