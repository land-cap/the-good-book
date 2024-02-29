'use client'

import { normalizeProps, useMachine } from '@zag-js/react'
import * as slider from '@zag-js/slider'
import { type PrimitiveAtom, useAtom } from 'jotai'
import { useEffect, useMemo } from 'react'

import { Slider } from './SliderField.styles'

export type TSliderMachineProps = Parameters<typeof slider.machine>[0]

export const SliderField = ({
	valueAtom,
	machineProps,
	label,
	showTickMarks,
	showPreview,
}: {
	valueAtom: PrimitiveAtom<number>
	machineProps: TSliderMachineProps
	label: string
	showTickMarks?: boolean
	showPreview?: boolean
}) => {
	const [value, setValue] = useAtom(valueAtom)

	const [state, send] = useMachine(
		slider.machine({
			...machineProps,
			value: [value],
			thumbAlignment: 'contain',
			thumbSize: { width: 24, height: 24 },
		}),
	)

	const sliderApi = slider.connect(state, send, normalizeProps)

	useEffect(() => {
		if (typeof sliderApi.value.at(0) === 'number') {
			setValue(sliderApi.value.at(0)!)
		}
	}, [setValue, sliderApi.value])

	const valueRange = useMemo(() => {
		const { min, max } = machineProps
		const step = machineProps.step ?? 1

		if (!min || !max) return null

		const firstMarkValue = min + step
		const lastMarkValue = max - step

		const getValueRange = (range: number[]): number[] =>
			range[range.length - 1] === lastMarkValue
				? range
				: getValueRange([...range, range[range.length - 1]! + step])
		return getValueRange([firstMarkValue])
	}, [machineProps])

	return (
		<Slider.Root {...sliderApi.rootProps}>
			<Slider.LabelContainer>
				<label {...sliderApi.labelProps}>{label}</label>
				{showPreview ? (
					<output {...sliderApi.valueTextProps}>{sliderApi.value.at(0)}</output>
				) : null}
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
				{showTickMarks ? (
					<div {...sliderApi.markerGroupProps}>
						{valueRange?.map((value) => (
							<Slider.TickMarker
								key={value}
								{...sliderApi.getMarkerProps({ value })}
							/>
						))}
					</div>
				) : null}
			</Slider.Control>
		</Slider.Root>
	)
}
