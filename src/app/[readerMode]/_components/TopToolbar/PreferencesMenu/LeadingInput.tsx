'use client'

import { normalizeProps, useMachine } from '@zag-js/react'
import * as slider from '@zag-js/slider'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { hstack } from 'styled-system/patterns'

import { leadingAtom } from '~/app/[readerMode]/_components/TopToolbar/TopToolbar.state'

import { Slider } from './SliderInput.styles'

export const LeadingInput = () => {
	const [value, setValue] = useAtom(leadingAtom)

	const [state, send] = useMachine(
		slider.machine({
			id: 'leading',
			name: 'leading',
			value: [value],
			min: 1,
			max: 3,
			step: 0.25,
		}),
	)

	const sliderApi = slider.connect(state, send, normalizeProps)

	useEffect(() => {
		if (typeof sliderApi.value.at(0) === 'number') {
			setValue(sliderApi.value.at(0)!)
		}
	}, [setValue, sliderApi.value])

	return (
		<Slider.Root {...sliderApi.rootProps}>
			<div className={hstack({ justify: 'space-between' })}>
				<label {...sliderApi.labelProps}>Line gap</label>
				<output {...sliderApi.valueTextProps}>{sliderApi.value.at(0)}</output>
			</div>
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
					<Slider.Marker {...sliderApi.getMarkerProps({ value: 14 })}>
						14
					</Slider.Marker>
					<Slider.Marker {...sliderApi.getMarkerProps({ value: 16 })}>
						16
					</Slider.Marker>
					<Slider.Marker {...sliderApi.getMarkerProps({ value: 22 })}>
						22
					</Slider.Marker>
				</div>
			</Slider.Control>
		</Slider.Root>
	)
}
