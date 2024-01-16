'use client'

import { normalizeProps, useMachine } from '@zag-js/react'
import * as slider from '@zag-js/slider'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { css } from 'styled-system/css'

import { fontSizeAtom } from '../TopToolbar.state'
import { Slider } from './SliderInput.styles'

export const FontSizeInput = () => {
	const [value, setValue] = useAtom(fontSizeAtom)

	const [state, send] = useMachine(
		slider.machine({
			id: 'font-size',
			name: 'font-size',
			value: [value],
			min: 14,
			max: 22,
		}),
	)

	const sliderApi = slider.connect(state, send, normalizeProps)

	useEffect(() => {
		if (typeof sliderApi.value.at(0) === 'number') {
			setValue(sliderApi.value.at(0)!)
		}
	}, [setValue, sliderApi.value])

	return (
		<Slider.Root
			{...sliderApi.rootProps}
			className={css({ pb: 'calc(22 / 16 * 1rem)' })}
		>
			<Slider.LabelContainer>
				<label {...sliderApi.labelProps}>Text size</label>
				<output {...sliderApi.valueTextProps}>{sliderApi.value.at(0)}</output>
			</Slider.LabelContainer>
			<Slider.Control {...sliderApi.controlProps}>
				<Slider.Track {...sliderApi.trackProps}>
					<Slider.Range {...sliderApi.rangeProps} />
				</Slider.Track>
				{sliderApi.value.map((_, index) => (
					<Slider.Thumb key={index} {...sliderApi.getThumbProps({ index })}>
						<input {...sliderApi.getHiddenInputProps({ index })} />
					</Slider.Thumb>
				))}
				<div {...sliderApi.markerGroupProps}>
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 15 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 16 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 17 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 18 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 19 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 20 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 21 })} />
				</div>
			</Slider.Control>
		</Slider.Root>
	)
}
