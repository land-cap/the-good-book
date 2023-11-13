import { buttonRecipe, type ButtonVariants } from './buttonRecipe'
import { Icon } from '../Icon/Icon'
import { cx } from 'styled-system/css'

export type ButtonProps = {
	label: string
	leftIcon?: string
	rightIcon?: string
	className?: string
} & ButtonVariants

export const Button = (props: ButtonProps) => {
	const { label, leftIcon, rightIcon, ...variants } = props
	const classes = buttonRecipe(variants)

	return (
		<button className={cx(classes.button, props.className)}>
			{leftIcon ? (
				<Icon name={leftIcon} className={cx(classes.iconLeft, 'iconLeft')} />
			) : null}
			{label}
			{rightIcon ? (
				<Icon name={rightIcon} className={cx(classes.iconRight, 'iconRight')} />
			) : null}
		</button>
	)
}
