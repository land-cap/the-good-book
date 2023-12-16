import { type JSX } from 'react'
import { twMerge } from 'tailwind-merge'

type IntrinsicElement = keyof JSX.IntrinsicElements

export const styled =
	<E extends IntrinsicElement>(Element: E) =>
	(className: string) =>
	//eslint-disable-next-line react/display-name
	(props: JSX.IntrinsicElements[E]) => (
		// TODO: fix type issue
		//@ts-ignore
		<Element {...props} className={twMerge(className, props.className)} />
	)
