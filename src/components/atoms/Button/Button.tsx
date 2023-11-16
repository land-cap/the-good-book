import { buttonRecipe, type ButtonVariants } from './buttonRecipe'
import { Icon } from '../Icon/Icon'
import { css } from 'styled-system/css'
import { type SystemStyleObject } from 'styled-system/types'

export type ButtonProps = {
	label: string
	leftIcon?: string
	rightIcon?: string
	rootStyles?: SystemStyleObject
} & ButtonVariants

export const Button = (props: ButtonProps) => {
	const { label, leftIcon, rightIcon, rootStyles, ...variants } = props
	const slotStyles = buttonRecipe.raw(variants)

	const mergedCss = css(slotStyles.button, rootStyles)

	return (
		<button className={mergedCss}>
			{leftIcon ? (
				<Icon name={leftIcon} className={css(slotStyles.iconLeft)} />
			) : null}
			{label}
			{rightIcon ? (
				<Icon name={rightIcon} className={css(slotStyles.iconRight)} />
			) : null}
		</button>
	)
}
