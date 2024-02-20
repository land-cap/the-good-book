import { useSearchParams } from 'next/navigation'
import { flatten, range } from 'ramda'

const computeVerseRange = (verseRangeStr: string) => {
	const generateRange = (rangeStr: string) => {
		const start = Number(rangeStr.split('-')?.[0])
		const end = Number(rangeStr.split('-')?.[1])
		return range(start)(end)
	}

	//eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return flatten(
		//@ts-ignore
		verseRangeStr?.split(',').reduce(
			(acc, range) =>
				//@ts-ignore
				range.includes('-')
					? [...acc, generateRange(range)]
					: [...acc, Number(range)],
			[] as number[],
		),
	) as number[]
}

export const useVerseRangeList = () => {
	const searchParams = useSearchParams()

	const verseRangeStr = searchParams.get('verse-range')

	return verseRangeStr ? computeVerseRange(verseRangeStr) : []
}
