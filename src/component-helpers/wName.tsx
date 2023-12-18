import { forwardRef, type JSX } from 'react'

type TIntrinsicElement = keyof JSX.IntrinsicElements

export const wName = <E extends TIntrinsicElement>(Element: E) =>
	//eslint-disable-next-line react/display-name
	forwardRef((props: JSX.IntrinsicElements[E], ref) => (
		//@ts-ignore
		<Element {...props} ref={ref} />
	))
