import { type JSX, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TIntrinsicElement = keyof JSX.IntrinsicElements

type TComponent<P extends { className?: string }> = (props: P) => ReactNode

type TStyledIntrinsicElement<E extends TIntrinsicElement> = (
	className: string,
) => (props: JSX.IntrinsicElements[E]) => ReactNode

type TStyledComponent<P extends { className?: string }> = (
	className: string,
) => (props: P) => ReactNode

export function styled<E extends TIntrinsicElement>(
	Element: E,
): TStyledIntrinsicElement<E>

export function styled<P extends { className?: string }>(
	Component: TComponent<P>,
): TStyledComponent<P>

// TODO: improve typing with conditional types and remove overloading
export function styled<P extends { className?: string }>(
	Component: TComponent<P>,
) {
	//eslint-disable-next-line react/display-name
	return (className: string) => (props: P) => (
		<Component {...props} className={twMerge(className, props.className)} />
	)
}
