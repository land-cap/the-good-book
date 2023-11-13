import { styled } from '../../styled-system/jsx'
import { Button } from '~/components/atoms/Button/Button'
import { css } from 'styled-system/css'

const chapterButtonStyles = css({
	shadow: 'md',
	px: '4',
	fontSize: 'xs',
	fontWeight: 'blacker',
	textTransform: 'uppercase',
	letterSpacing: '0.05em',
	whiteSpace: 'nowrap',
})

const ToolBarContainer = styled('div', {
	base: {
		display: 'flex',
		hideFrom: 'sm',
		placeContent: 'center',
		alignItems: 'center',
		position: 'fixed',
		bottom: 'calc(token(spacing.3) + env(safe-area-inset-bottom))',
		left: '50%',
		transform: 'translateX(-50%)',
		w: 'fit-content',
	},
})

export const ToolBar = ({ chapter }: { chapter: string }) => (
	<ToolBarContainer>
		<Button label={chapter} size="xl" rounded className={chapterButtonStyles} />
	</ToolBarContainer>
)
