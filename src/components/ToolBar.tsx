import { styled } from '../../styled-system/jsx'

const ToolBarContainer = styled('div', {
	base: {
		display: 'flex',
		placeContent: 'center',
		alignItems: 'center',

		textStyle: 'xs',
		fontWeight: 'blacker',
		color: 'fg',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
		whiteSpace: 'nowrap',

		position: 'fixed',
		bottom: 'calc(token(spacing.4) + env(safe-area-inset-bottom))',
		left: '50%',
		transform: 'translateX(-50%)',
		h: '10',
		w: 'fit-content',
		px: '4',
		bg: 'bg.surface',
		rounded: 'full',
		oRingWidth: '2px',
		oRingColor: 'fg',
		oRingInset: true,
		oShadow: 'lg',
	},
})

export const ToolBar = ({ chapter }: { chapter: string }) => (
	<ToolBarContainer>{chapter}</ToolBarContainer>
)
