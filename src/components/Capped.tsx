import { precomputeValues } from '@capsizecss/core'
import dmSansMetrics from '@capsizecss/metrics/dMSans'
import { type ReactNode } from 'react'

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
	{ capHeight: number; lineGap: number }
> = {
	xs: { capHeight: 7.5, lineGap: 7.5 },
	sm: { capHeight: 9, lineGap: 9 },
	base: { capHeight: 10, lineGap: 10 },
	lg: { capHeight: 12, lineGap: 12 },
	xl: { capHeight: 14, lineGap: 14 },
	'2xl': { capHeight: 18, lineGap: 18 },
	'3xl': { capHeight: 22, lineGap: 22 },
	'4xl': { capHeight: 26, lineGap: 26 },
	'5xl': { capHeight: 32, lineGap: 32 },
	'6xl': { capHeight: 40, lineGap: 40 },
	'7xl': { capHeight: 56, lineGap: 28 },
	'8xl': { capHeight: 68, lineGap: 34 },
	'9xl': { capHeight: 92, lineGap: 46 },
}

const generateCapsizeCls = (() => {
	let i = 0
	return () => `capsize-${i++}`
})()

export const withCapsize =
	(fontSize: FontSize) =>
	<P extends { className: string }>(Component: (props: P) => ReactNode) => {
		//eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
		const capsizeValues = precomputeValues({
			capHeight: fontSizeToCapHeight[fontSize].capHeight,
			leading: 24,
			fontMetrics: dmSansMetrics,
		})

		//eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

		//eslint-disable-next-line react/display-name
		return (props: P) => (
			<>
				<style
					suppressHydrationWarning
					dangerouslySetInnerHTML={{ __html: capsizeStyles }}
				/>
				<Component {...props} className={`${props?.className} ${capsizeCls}`} />
			</>
		)
	}
