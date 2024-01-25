export const steppedRange = (step: number, start: number, end: number) => {
	const getNextStep = (range: number[]): number[] =>
		range[range.length - 1] === end
			? range
			: getNextStep([...range, range[range.length - 1]! + step])
	return getNextStep([start])
}
