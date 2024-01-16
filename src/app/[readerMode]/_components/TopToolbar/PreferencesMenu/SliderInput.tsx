'use client'

import { normalizeProps, useMachine } from '@zag-js/react'
import * as slider from '@zag-js/slider'
import { type PrimitiveAtom, useAtom } from 'jotai'
import { useEffect, useMemo } from 'react'
import { css } from 'styled-system/css'

import { Slider } from './SliderInput.styles'

export type TSliderMachineProps = Parameters<typeof slider.machine>[0]

export const SliderInput = ({
	valueAtom,
	label,
	machineProps,
}: {
	valueAtom: PrimitiveAtom<number>
	label: string
	machineProps: TSliderMachineProps
}) => {
	const [value, setValue] = useAtom(valueAtom)

	const [state, send] = useMachine(
		slider.machine({ ...machineProps, value: [value] }),
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
		<Slider.Root
			{...sliderApi.rootProps}
			className={css({ pb: 'calc(22 / 16 * 1rem)' })}
		>
			<Slider.LabelContainer>
				<label {...sliderApi.labelProps}>{label}</label>
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
					{valueRange?.map((value) => (
						<Slider.TickMarker
							key={value}
							{...sliderApi.getMarkerProps({ value })}
						/>
					))}
				</div>
			</Slider.Control>
		</Slider.Root>
	)
}
