'use client'

import { normalizeProps, useMachine } from '@zag-js/react'
import * as slider from '@zag-js/slider'
import { type PrimitiveAtom, useAtom } from 'jotai'
import { useEffect } from 'react'
import { css } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'

import { Slider } from './SliderInput.styles'

export const SliderInput = ({
	inputName,
	inputLabel,
	valueAtom,
}: {
	inputName: string
	inputLabel: string
	valueAtom: PrimitiveAtom<number>
}) => {
	const [value, setValue] = useAtom(valueAtom)

	const [state, send] = useMachine(
		slider.machine({
			id: inputName,
			name: inputName,
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
		<Slider.Root {...sliderApi.rootProps}>
			<div className={hstack({ justify: 'space-between' })}>
				<label {...sliderApi.labelProps}>{inputLabel}</label>
				<output
					{...sliderApi.valueTextProps}
					className={css({ fontWeight: 'bold' })}
				>
					{sliderApi.value.at(0)}
				</output>
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
