import { styled } from 'styled-system/jsx'
import { Button } from '~/components/atoms/Button/Button'
import { IconButton } from '~/components/atoms/Button/IconButton'
import { type SystemStyleObject } from 'styled-system/types'
import { css } from 'styled-system/css'

const chapterButtonStyles: SystemStyleObject = css.raw({
	oShadow: 'md',
	whiteSpace: 'nowrap',
	borderRightRadius: '0',
})

const ToolBarContainer = styled('div', {
	base: {
		display: 'flex',
		gap: '2',
		placeContent: 'center',
		alignItems: 'center',
		position: 'fixed',
		'--bottom-offset': 'spacing.4',
		bottom: 'calc(var(--bottom-offset) + env(safe-area-inset-bottom))',
		left: '50%',
		transform: 'translateX(-50%)',
		w: '100dvw',
	},
})

const preferencesIcon = (
	<IconButton
		iconName="format_size"
		visual="primary"
		size="2xl"
		rounded
		rootStyles={css.raw({ oShadow: 'md' })}
	/>
)

export const ToolBar = ({ chapter }: { chapter: string }) => (
	<ToolBarContainer>
		<Button
			label={chapter}
			visual="primary"
			size="xl"
			rounded
			rootStyles={chapterButtonStyles}
		/>
	</ToolBarContainer>
)
