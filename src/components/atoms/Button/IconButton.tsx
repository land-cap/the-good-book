import { buttonRecipe, type ButtonVariants } from './buttonRecipe'
import { css } from 'styled-system/css'
import { Icon } from '../Icon/Icon'
import { type SystemStyleObject } from 'styled-system/types'

export type IconButtonProps = {
	iconName: string
	styles?: {
		button?: SystemStyleObject
		icon?: SystemStyleObject
	}
} & ButtonVariants

export const IconButton = (props: IconButtonProps) => {
	const { iconName, styles, ...variants } = props
	const slotStyles = buttonRecipe.raw({ ...variants, iconOnly: true })

	return (
		<button className={css(slotStyles.button, styles?.button)}>
			<Icon name={iconName} className={css(slotStyles.icon, styles?.icon)} />
		</button>
	)
}
