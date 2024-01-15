'use client'

import { normalizeProps, useMachine } from '@zag-js/react'
import * as slider from '@zag-js/slider'
import { useEffect } from 'react'
import { css } from 'styled-system/css'
import { hstack, square, stack } from 'styled-system/patterns'

export const LeadingInput = () => {
	const [state, send] = useMachine(
		slider.machine({ id: '1', value: [16], min: 14, max: 22 }),
	)

	const sliderApi = slider.connect(state, send, normalizeProps)

	useEffect(() => {
		console.log(sliderApi.value)
	}, [sliderApi.value])

	return (
		<div
			{...sliderApi.rootProps}
			className={stack({
				direction: 'column',
				gap: '6',
				position: 'relative',
				column: 'content',
				sm: {
					direction: 'row',
				},
			})}
		>
			<div className={hstack({ justify: 'space-between' })}>
				<label {...sliderApi.labelProps}>Line spacing</label>
				<output
					{...sliderApi.valueTextProps}
					className={css({ fontWeight: 'bold' })}
				>
					{sliderApi.value.at(0)}
				</output>
			</div>
			<div {...sliderApi.controlProps} className={css({ flexGrow: '1' })}>
				<div
					{...sliderApi.trackProps}
					className={css({ h: '2', bg: 'neutral.200' })}
				>
					<div
						{...sliderApi.rangeProps}
						className={css({ h: '2', bg: 'fg.subtle' })}
					/>
				</div>
				{sliderApi.value.map((_, index) => (
					<div
						key={index}
						{...sliderApi.getThumbProps({ index })}
						className={square({
							size: '5',
							position: 'absolute',
							top: '-0.375rem',
							bg: 'white',
							border: '2px solid token(colors.fg)',
							outline: '2px solid token(colors.fg.inverted)',
						})}
					>
						<input {...sliderApi.getHiddenInputProps({ index })} />
					</div>
				))}
				<div {...sliderApi.markerGroupProps}>
					<span
						{...sliderApi.getMarkerProps({ value: 14 })}
						className={css({ mt: '2', color: 'fg.subtle', fontSize: '2xs' })}
					>
						14
					</span>
					<span
						{...sliderApi.getMarkerProps({ value: 16 })}
						className={css({ mt: '2', color: 'fg.subtle', fontSize: '2xs' })}
					>
						16
					</span>
					<span
						{...sliderApi.getMarkerProps({ value: 22 })}
						className={css({ mt: '2', color: 'fg.subtle', fontSize: '2xs' })}
					>
						22
					</span>
				</div>
			</div>
		</div>
	)
}
