import { buttonRecipe, type ButtonVariants } from './buttonRecipe'
import { cx } from 'styled-system/css'
import { Icon } from '../Icon/Icon'

export type IconButtonProps = {
	iconName: string
	className?: string
} & ButtonVariants

export const IconButton = (props: IconButtonProps) => {
	const { iconName, ...variants } = props
	const classes = buttonRecipe(variants)

	return (
		<button className={cx(classes.button, props.className)}>
			<Icon name={iconName} className={cx(classes.icon, 'icon')} />
		</button>
	)
}
