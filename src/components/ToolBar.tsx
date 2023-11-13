import { styled } from '../../styled-system/jsx'
import { Button } from '~/components/atoms/Button/Button'
import { css } from 'styled-system/css'
import { IconButton } from '~/components/atoms/Button/IconButton'

const chapterButtonStyles = css({
	shadow: 'md',
	px: '5',
	h: '12',
	fontSize: 'xs',
	fontWeight: 'blacker',
	textTransform: 'uppercase',
	letterSpacing: '0.05em',
	whiteSpace: 'nowrap',
	bg: 'bg.surface',
})

const ToolBarContainer = styled('div', {
	base: {
		display: 'flex',
		hideFrom: 'sm',
		gap: '2',
		placeContent: 'center',
		alignItems: 'center',
		position: 'fixed',
		bottom: 'calc(token(spacing.3) + env(safe-area-inset-bottom))',
		left: '50%',
		transform: 'translateX(-50%)',
		w: '100dvw',
	},
})

export const ToolBar = ({ chapter }: { chapter: string }) => (
	<ToolBarContainer>
		<Button label={chapter} size="xl" rounded className={chapterButtonStyles} />
		<IconButton
			iconName="format_size"
			size="xl"
			rounded
			className={css({ w: '12', h: '12' })}
		/>
	</ToolBarContainer>
)
