import { icons, type LucideProps, SquareDot } from 'lucide-react'

export type IconProps = { name: string } & LucideProps

export const Icon = ({ name, ...props }: IconProps) => {
	//@ts-ignore
	//eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const LucideIcon = icons[name] || SquareDot
	return <LucideIcon {...props} />
}
