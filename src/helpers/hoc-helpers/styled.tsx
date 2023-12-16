import Link from 'next/link'
import { type JSX, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type IntrinsicElement = keyof JSX.IntrinsicElements

type Component<P extends { className?: string }> = (props: P) => ReactNode

type StyledItem<
	ElementOrComponent extends IntrinsicElement | Component<never>,
> = ElementOrComponent extends Component<infer P>
	? P
	: //@ts-ignore
	  JSX.IntrinsicElements[ElementOrComponent]

type A = StyledItem<'a'>

type B = StyledItem<typeof Link>

export const styled =
	<
		P extends { className?: string },
		ElementOrComponent extends IntrinsicElement | Component<P>,
	>(
		ElementOrComponent: ElementOrComponent,
	) =>
	(className: string) =>
	//eslint-disable-next-line react/display-name
	(props: StyledItem<ElementOrComponent>) => (
		// TODO: fix type issue
		//@ts-ignore
		<ElementOrComponent
			{...props}
			className={twMerge(className, props.className)}
		/>
	)

const StyledLink = styled(Link)

const SimpleComponent = ({ className }: { className?: string }) => (
	<div className={className}>simple component</div>
)

const StyledSimpleCoponent = styled(SimpleComponent)
