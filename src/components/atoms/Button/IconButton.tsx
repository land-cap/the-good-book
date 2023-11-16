import { buttonRecipe, type ButtonVariants } from './buttonRecipe'
import { css } from 'styled-system/css'
import { Icon } from '../Icon/Icon'
import { type SystemStyleObject } from 'styled-system/types'

export type IconButtonProps = {
	iconName: string
	rootStyles?: SystemStyleObject
} & ButtonVariants

export const IconButton = (props: IconButtonProps) => {
	const { iconName, rootStyles, ...variants } = props
	const slotStyles = buttonRecipe.raw({ ...variants, iconOnly: true })

	return (
		<button className={css(slotStyles.button, rootStyles)}>
			<Icon name={iconName} className={css(slotStyles.icon)} />
		</button>
	)
}
