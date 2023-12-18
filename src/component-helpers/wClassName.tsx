import { forwardRef, type JSX, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TIntrinsicElement = keyof JSX.IntrinsicElements

type TComponent<P extends { className?: string }> = (props: P) => ReactNode

type TStyledIntrinsicElement<E extends TIntrinsicElement> = (
	className: string,
) => (props: JSX.IntrinsicElements[E]) => ReactNode

type TStyledComponent<P extends { className?: string }> = (
	className: string,
) => (props: P) => ReactNode

export function wClassName<E extends TIntrinsicElement>(
	Element: E,
): TStyledIntrinsicElement<E>

export function wClassName<P extends { className?: string }>(
	Component: TComponent<P>,
): TStyledComponent<P>

// TODO: improve typing with conditional types and remove overloading
export function wClassName<P extends { className?: string }>(
	Component: TComponent<P>,
) {
	return (className: string) =>
		//eslint-disable-next-line react/display-name
		forwardRef((props: P, ref) => (
			<Component
				{...props}
				ref={ref}
				className={twMerge(className, props.className)}
			/>
		))
}
