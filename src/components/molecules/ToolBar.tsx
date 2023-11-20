import { styled } from 'styled-system/jsx'
import { Button, type ButtonProps } from '~/components/atoms/Button/Button'
import { type SystemStyleObject } from 'styled-system/types'
import { css } from 'styled-system/css'

const chapterButtonStyles: SystemStyleObject = css.raw({
	whiteSpace: 'nowrap',
	shadow: '8',
	bg: { _osDark: 'bg.subtle' },
	color: { _osDark: 'fg.muted' },
})

const ToolBarContainer = styled('div', {
	base: {
		display: 'flex',
		gap: '2',
		placeContent: 'center',
		alignItems: 'center',
		position: 'sticky',
		'--bottom-offset': { base: 'spacing.4', md: 'spacing.6' },
		bottom: 'calc(var(--bottom-offset) + env(safe-area-inset-bottom))',
		left: '50%',
		mt: { base: '10', md: '12' },
	},
})

export const ToolBar = ({ chapter }: { chapter: string }) => {
	const chapterPickerButtonProps: Partial<ButtonProps> = {
		visual: 'secondary',
		size: 'xl',
		rounded: true,
		rootStyles: chapterButtonStyles,
	}

	return (
		<ToolBarContainer>
			<Button label={chapter} {...chapterPickerButtonProps} />
		</ToolBarContainer>
	)
}
