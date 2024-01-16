'use client'

import { normalizeProps, useMachine } from '@zag-js/react'
import * as slider from '@zag-js/slider'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

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
			<Slider.LabelContainer>
				<label {...sliderApi.labelProps}>Line gap</label>
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
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 1.25 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 1.5 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 1.75 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 2 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 2.25 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 2.5 })} />
					<Slider.TickMarker {...sliderApi.getMarkerProps({ value: 2.75 })} />
				</div>
			</Slider.Control>
		</Slider.Root>
	)
}
