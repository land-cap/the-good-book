import { precomputeValues } from '@capsizecss/core'
import dmSansMetrics from '@capsizecss/metrics/dMSans'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type FontSize =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl'

export const fontSizeToDefaultLeading: Record<
	FontSize,
	{
		capHeight: number
		leading: number
	}
> = {
	xs: { capHeight: 12, leading: 16 },
	sm: { capHeight: 14, leading: 20 },
	base: { capHeight: 16, leading: 24 },
	lg: { capHeight: 18, leading: 28 },
	xl: { capHeight: 28, leading: 28 },
	'2xl': { capHeight: 24, leading: 32 },
	'3xl': { capHeight: 30, leading: 36 },
	'4xl': { capHeight: 36, leading: 40 },
	'5xl': { capHeight: 48, leading: 48 },
	'6xl': { capHeight: 60, leading: 60 },
	'7xl': { capHeight: 72, leading: 72 },
	'8xl': { capHeight: 96, leading: 96 },
	'9xl': { capHeight: 128, leading: 128 },
}

export type Breakpoint = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const breakpointToMediaQuery: Record<Exclude<Breakpoint, 'base'>, string> = {
	xs: '(min-width: 640px)',
	sm: '(min-width: 768px)',
	md: '(min-width: 1024px)',
	lg: '(min-width: 1280px)',
	xl: '(min-width: 1536px)',
}

const getCapsizeCls = (() => {
	let i = 0
	return () => `cap-${i++}`
})()

export const withCapsize =
	<
		P extends {
			className?: string
		},
	>(
		Component: (props: P) => ReactNode,
	) =>
	//eslint-disable-next-line react/display-name
	({
		fontSize,
		className,
		...props
	}: P & {
		fontSize: FontSize | Partial<Record<Breakpoint, FontSize>>
	}) => {
		if (typeof fontSize === 'object') {
			const capsizeCls = getCapsizeCls()

			const fontSizeEntries = Object.entries(fontSize) as [
				Breakpoint,
				FontSize,
			][]
			const responsiveCapsizeStyle = fontSizeEntries.reduce(
				(responsizeStyle, [breakpoint, fontSize]) => {
					const capsizeValues = precomputeValues({
						fontSize: fontSizeToDefaultLeading[fontSize].capHeight,
						leading: fontSizeToDefaultLeading[fontSize].leading,
						fontMetrics: dmSansMetrics,
					})

					const { lineHeight, capHeightTrim, baselineTrim } = capsizeValues

					const breakpointStyle = `			
						${breakpoint !== 'base' ? `@media ${breakpointToMediaQuery[breakpoint]} {` : ''}
							.${capsizeCls} {
								font-size: ${capsizeValues.fontSize};
								line-height: ${lineHeight};
							}
							
							.${capsizeCls}:before {
								content: "";
								margin-bottom: ${capHeightTrim};
								display: table;
							}
							
							.${capsizeCls}:after {
								content: "";
								margin-bottom: ${baselineTrim};
								display: table;
							}
						${breakpoint !== 'base' ? `}` : ''}
						`
					return `
					${responsizeStyle}
					${breakpointStyle}
					`
				},
				'',
			)

			return (
				<>
					<style
						dangerouslySetInnerHTML={{
							__html: responsiveCapsizeStyle,
						}}
					/>
					{/* @ts-ignore */}
					<Component {...props} className={twMerge(className, capsizeCls)} />
				</>
			)
		} else {
			const capsizeValues = precomputeValues({
				fontSize: fontSizeToDefaultLeading[fontSize].capHeight,
				leading: fontSizeToDefaultLeading[fontSize].leading,
				fontMetrics: dmSansMetrics,
			})

			const { lineHeight, capHeightTrim, baselineTrim } = capsizeValues

			const capsizeCls = getCapsizeCls()

			const capsizeStyles = `
				.${capsizeCls} {
					font-size: ${capsizeValues.fontSize};
					line-height: ${lineHeight};
				}
				
				.${capsizeCls}:before {
					content: "";
					margin-bottom: ${capHeightTrim};
					display: table;
				}
				
				.${capsizeCls}:after {
					content: "";
					margin-bottom: ${baselineTrim};
					display: table;
				}
				`

			return (
				<>
					<style dangerouslySetInnerHTML={{ __html: capsizeStyles }} />
					{/* @ts-ignore */}
					<Component {...props} className={twMerge(className, capsizeCls)} />
				</>
			)
		}
	}
