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

export const fontSizeToCapHeight: Record<
	FontSize,
	{
		capHeight: number
		lineGap: number
	}
> = {
	xs: { capHeight: 12, lineGap: 16 },
	sm: { capHeight: 14, lineGap: 20 },
	base: { capHeight: 16, lineGap: 24 },
	lg: { capHeight: 18, lineGap: 28 },
	xl: { capHeight: 29, lineGap: 28 },
	'2xl': { capHeight: 24, lineGap: 32 },
	'3xl': { capHeight: 30, lineGap: 36 },
	'4xl': { capHeight: 36, lineGap: 40 },
	'5xl': { capHeight: 48, lineGap: 48 },
	'6xl': { capHeight: 60, lineGap: 60 },
	'7xl': { capHeight: 72, lineGap: 72 },
	'8xl': { capHeight: 96, lineGap: 96 },
	'9xl': { capHeight: 128, lineGap: 128 },
}

export type Breakpoint = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const breakpointToMediaQuery: Record<Exclude<Breakpoint, 'base'>, string> = {
	xs: '(min-width: 640px)',
	sm: '(min-width: 768px)',
	md: '(min-width: 1024px)',
	lg: '(min-width: 1280px)',
	xl: '(min-width: 1536px)',
}

const generateCapsizeCls = (() => {
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
			const capsizeCls = generateCapsizeCls()

			const fontSizeEntries = Object.entries(fontSize) as [
				Breakpoint,
				FontSize,
			][]
			const responsiveCapsizeStyle = fontSizeEntries.reduce(
				(responsizeStyle, [breakpoint, fontSize]) => {
					const capsizeValues = precomputeValues({
						fontSize: fontSizeToCapHeight[fontSize].capHeight,
						leading: fontSizeToCapHeight[fontSize].lineGap,
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
				fontSize: fontSizeToCapHeight[fontSize].capHeight,
				leading: fontSizeToCapHeight[fontSize].lineGap,
				fontMetrics: dmSansMetrics,
			})

			const { lineHeight, capHeightTrim, baselineTrim } = capsizeValues

			const capsizeCls = generateCapsizeCls()

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
