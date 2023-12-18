import { forwardRef, type JSX, type ReactNode } from 'react'

type TIntrinsicElement = keyof JSX.IntrinsicElements

type TWChildrenable<P extends { children?: ReactNode }> = (
	props: P,
) => ReactNode

export function wChildren(
	Element: TIntrinsicElement,
): (props: { children: ReactNode }) => ReactNode

export function wChildren<P extends { children?: ReactNode }>(
	Component: TWChildrenable<P>,
): (props: { children: ReactNode }) => ReactNode

// TODO: improve typing with conditional types and remove overloading
export function wChildren<P extends { children?: ReactNode }>(
	Component: TWChildrenable<P> | TIntrinsicElement,
) {
	//eslint-disable-next-line react/display-name
	return forwardRef(({ children }: P, ref) => (
		//@ts-ignore
		<Component ref={ref}>{children}</Component>
	))
}
